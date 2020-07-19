import { Button, Icon, Input, ITableColumn, Pagination, Table, Title } from '@valudio/ui'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { debounce } from 'ts-debounce'
import Page from '../../components/Page'
import { downloadBlob } from '../../helpers/blob'
import { printRecords } from '../../helpers/print'
import useTimeReports from '../../hooks/useTimeReports'
import { emptyFilters, IFilters } from '../../models'
import { TimeRecordsService } from '../../services'
import Filters from './filters'

const TimeRecordsPage: React.FC = () => {
  const { locale, formatMessage } = useIntl()
  const [ pageNumber, setPageNumber ] = useState<number>()
  const [ areFiltersVisible, setAreFiltersVisible ] = useState(false)
  const [ filters, setFilters ] = useState<IFilters>(emptyFilters)
  const page = useTimeReports(pageNumber, filters)
  const columns: ITableColumn[] = [
    { key: 'worker', label: formatMessage({ id: 'worker' }) },
    { key: 'customer', label: formatMessage({ id: 'customer' }) },
    { key: 'project', label: formatMessage({ id: 'project' }) },
    { key: 'workStep', label: formatMessage({ id: 'workStep' }) },
    { key: 'description', label: formatMessage({ id: 'description' }) },
    { key: 'date', label: formatMessage({ id: 'date' }) },
    { key: 'startTime', label: formatMessage({ id: 'startTime' }) },
    { key: 'endTime', label: formatMessage({ id: 'endTime' }) },
    { key: 'totalTime', label: formatMessage({ id: 'totalTime' }) },
    { key: 'operation', label: formatMessage({ id: 'operation' }), className: 'no-flex' }
  ]

  const handleQueryChange = (value: string) => {
    setFilters({ ...filters, query: { value, isValid: value.length >= 3 }})
  }

  const debouncedHandleQueryChange = debounce(handleQueryChange, 1000)

  const handleApplyFilters = (nextFilters: IFilters) => {
    setFilters({ ...nextFilters, query: filters.query })
  }

  const handleDownload = async () => {
    const data = await TimeRecordsService.export()
    downloadBlob(data)
  }

  const handlePrint = async () => {
    const records = await TimeRecordsService.getTimeRecords2(1, filters, page.pagination.totalItems)
    printRecords(records, locale)
  }

  const items = page?.items.map(x => ({
    worker: x.worker.username,
    customer: x.customer.name,
    project: x.project.name,
    workStep: x.workStep.name,
    description: x.description,
    date: format(new Date(x.date), 'dd/MM/yyyy'),
    startTime: x.startTime,
    endTime: x.endTime,
    totalTime: x.totalTime
  }))

  return (
    <Page>
      <section style={ { background: 'white', padding: '20px 32px' } }>
        <Title style={{ marginBottom: 12 }}>{ formatMessage({ id: 'reports' }) }</Title>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button type="tertiary"  isCircular style={{ marginRight: 32, fontSize: 24 }} onClick={ setAreFiltersVisible.bind(undefined, !areFiltersVisible) }>
            <Icon icon="filter" />
          </Button>
          <Input placeholder="Search" onChange={ debouncedHandleQueryChange } style={{ marginRight: 'auto', width: 264 }} />
          <Button type="tertiary"  isCircular style={{ marginRight: 8, fontSize: 18 }} onClick={ handleDownload }>
            <Icon icon="download" />
          </Button>
          <Button type="tertiary"  isCircular style={{ fontSize: 18 }} onClick={ handlePrint }>
            <Icon icon="documents" />
          </Button>
        </div>
      </section>
      <Filters isHidden={ !areFiltersVisible } filters={ filters } onApply={ handleApplyFilters } />
      <section style={ { padding: '20px 32px' } }>
        <Table columns={ columns } items={ items || [] } style={{ marginBottom: 20 }} />
        <Pagination
          isHidden={ !page || page?.pagination.totalPages <= 1 }
          currentPage={ page?.pagination.pageNumber || 0 }
          totalPages={ page?.pagination.totalPages || 0 }
          onClick={ setPageNumber }
          style={{ justifyContent: 'right' }}
        />
      </section>
    </Page>
  )
}

export default TimeRecordsPage
