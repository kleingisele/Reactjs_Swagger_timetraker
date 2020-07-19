import { Button, Checkbox, Icon, Input, ITableColumn, ITableItem, Pagination, Table, Title } from '@valudio/ui'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { debounce } from 'ts-debounce'
import Page from '../../components/Page'
import useMaterialsPage from '../../hooks/useMaterialsPage'
import { emptyValidatedInputField, IMaterial, IValidatedInputField } from '../../models'
import { MaterialService } from '../../services'
import theme from '../../theme'
import Draft from './draft'

const Materials: React.FC = () => {
  const { formatMessage } = useIntl()
  const [ pageNumber, setPageNumber ] = useState<number>()
  const [ draft, setDraft ] = useState<IMaterial>()
  const [ isCreating, setIsCreating ] = useState(false)
  const [ query, setQuery ] = useState<IValidatedInputField<string>>(emptyValidatedInputField)
  const page = useMaterialsPage(query, pageNumber, isCreating)
  const columns: ITableColumn[] = [
    { key: 'check', label: '', style: { width: 20, flex: 'auto 0 0' } },
    { key: 'name', label: formatMessage({ id: 'name' }) },
    { key: 'unit', label: formatMessage({ id: 'unit' })  }
  ]

  const handleQueryChange = (value: string) => {
    setQuery({ value, isValid: value.length >= 3 })
  }

  const debouncedHandleQueryChange = debounce(handleQueryChange, 1000)

  const handleSave = async (material: IMaterial) => {
    try {
      if (draft) await MaterialService.updateMaterial({ ...material, id: draft.id })
      else await MaterialService.createMaterial(material)
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.error(error)
    }
  }

  const handleEdit = () => {
    setIsCreating(true)
  }

  const handleClose = () => {
    setDraft(null)
    setIsCreating(false)
  }

  const handleCreate = () => {
    setDraft(null)
    setIsCreating(true)
  }

  const items: ITableItem[] = page?.items.map(x => ({
    check: <Checkbox value={ draft === x } onChange={ setDraft.bind(undefined, draft === x ? null : x) }/>,
    name: x.name,
    unit: x.unit,
    onClick: setDraft.bind(undefined, draft === x ? null : x),
    style: draft === x ? { background: `${ theme.colors.primary.medium }35` } : null
  }))

  return (
    <Page>
      <section style={{ background: 'white', padding: '20px 32px' }}>
        <Title style={{ marginBottom: 12 }}>Materials</Title>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Input placeholder="Search" onChange={ debouncedHandleQueryChange } style={{ marginRight: 'auto', width: 264 }}/>
          <Button type="tertiary" onClick={ handleEdit } isDisabled={ !draft } style={{ marginRight: 8 }} isCircular>
            <Icon icon="edit"/>
          </Button>
          <Button type="tertiary" onClick={ handleCreate }>
            <Icon icon="add" style={{ marginRight: 8 }}/>
            { formatMessage({ id: 'addNewItem' }) }
          </Button>
        </div>
      </section>
      <section style={{ padding: '20px 32px' }}>
        <Table columns={ columns } items={ items || [] } style={{ marginBottom: 20 }}/>
        <Pagination
          isHidden={ !page || page?.pagination.totalPages <= 1 }
          currentPage={ page?.pagination.pageNumber || 0 }
          totalPages={ page?.pagination.totalPages || 0 }
          onClick={ setPageNumber }
          style={{ justifyContent: 'right' }}
        />
      </section>
      <Draft isHidden={ !isCreating } initial={ draft } onClose={ handleClose } onSave={ handleSave }/>
    </Page>
  )
}

export default Materials
