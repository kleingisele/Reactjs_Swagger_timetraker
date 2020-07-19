import { Button, DateTime, Field, IBaseProps, Icon, MultiSelect } from '@valudio/ui'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { emptyFilters, IFilters, IInitialReport } from '../../../models'
import { ReportService } from '../../../services'
import Styled from './styles'

interface IProps extends IBaseProps {
  onApply: (filters: IFilters) => void
  filters: IFilters
}

// tslint:disable: jsx-no-lambda
const Filters: React.FC<IProps> = ({ isHidden, className, style, onApply }) => {
  const { formatMessage } = useIntl()
  const [ dto, setDto ] = useState<IInitialReport>()
  const [ form, setForm ] = useState<HTMLFormElement>()
  const [ filters, setFilters ] = useState<IFilters>(emptyFilters)

  useEffect(() => {
    if (form) form.addEventListener('submit', e => e.preventDefault())

    const fetch = async () => {
      const result = await ReportService.getInitialReport()
      setDto(result)
    }

    fetch()
  }, [ form ])

  if (isHidden) return null

  const handleChange = (change: { [key: string]: any }) => {
    setFilters({ ...filters, ...change })
  }

  const handleClear = () => {
    setFilters(emptyFilters)
    form.reset()
  }

  const isSomeFilterActive = filters !== emptyFilters

  return (
    <Styled className={ className || '' } style={ style }>
      <form ref={ setForm } className="form">
        <Field label={ formatMessage({ id: 'workers' }) } className="field">
          <MultiSelect
            placeholder={ formatMessage({ id: 'selectWorkers' }) }
            className="input"
            options={ dto?.workers as any }
            labelProp="username"
            onChange={ x => handleChange({ workers: x }) }
            form={ form }
          />
        </Field>
        <Field label={ formatMessage({ id: 'customers' }) } className="field">
          <MultiSelect
            placeholder={ formatMessage({ id: 'selectCustomers' }) }
            className="input"
            options={ dto?.customers as any }
            labelProp="name"
            onChange={ x => handleChange({ customers: x }) }
            form={ form }
          />
        </Field>
        <Field label={ formatMessage({ id: 'projects' }) } className="field">
          <MultiSelect
            placeholder={ formatMessage({ id: 'selectProjects' }) }
            className="input"
            options={ dto?.projects as any }
            labelProp="name"
            onChange={ x => handleChange({ projects: x }) }
            form={ form }
          />
        </Field>
        <Field label={ formatMessage({ id: 'from' }) } className="field">
          <DateTime
            placeholder={ formatMessage({ id: 'selectDate' }) }
            className="input"
            onChange={ x => handleChange({ rangeDate: { ...filters.rangeDate, from: x } }) }
            form={ form }
          />
        </Field>
        <Field label={ formatMessage({ id: 'to' }) } className="field">
          <DateTime
            placeholder={ formatMessage({ id: 'selectDate' }) }
            className="input"
            onChange={ x => handleChange({ rangeDate: { ...filters.rangeDate, to: x } }) }
            form={ form }
          />
        </Field>
      </form>
      <article className="actions">
        <Button type="tertiary" isHidden={ !isSomeFilterActive } onClick={ handleClear }>
          <Icon style={{ fontSize: 20, marginRight: 8 }} icon="close" />
          { formatMessage({ id: 'clearFilters' }) }
        </Button>
        <Button
          style={{ marginLeft: 'auto' }}
          onClick={ onApply.bind(undefined, filters) }
          isDisabled={ !isSomeFilterActive }
        >
          { formatMessage({ id: 'apply' }) }
        </Button>
      </article>
    </Styled>
  )
}

export default Filters
