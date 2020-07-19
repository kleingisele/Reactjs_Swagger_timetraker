import { Button, Field, Input, Modal, Select, Title } from '@valudio/ui'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import useCustomers from '../../hooks/useCustomers'
import { IDraft, initialProject, IProject } from '../../models'

interface IProps {
  isHidden: boolean
  onClose: () => void
  onSave: (material: IProject) => void
  initial?: IProject
}

// tslint:disable: jsx-no-lambda
const Draft: React.FC<IProps> = ({ isHidden, onClose, onSave, initial }) => {
  const customers = useCustomers()
  const { formatMessage } = useIntl()
  const [ draft, setDraft ] = useState<IDraft<IProject>>({ isValid: false, value: initialProject })

  const handleChange = (property: { [key: string]: any }) => {
    const value = { ...draft.value, ...property }
    const { name, customer } = value
    const isValid =
      (!!initial && (initial.name !== name || initial.customer.id !== customer.id)) ||
      (!!name && !!customer)
    setDraft({ isValid, value })
  }

  useEffect(() => {
    setDraft({ isValid: false, value: initial })
  }, [ initial ])

  return (
    <Modal isHidden={ isHidden || !customers } style={{ padding: 40 }}>
      <Title style={{ marginBottom: 20 }}>Create</Title>
      <Field label={ formatMessage({ id: 'name' }) } style={{ marginBottom: 20 }}>
        <Input
          placeholder={ formatMessage({ id: 'name' }) }
          onChange={ x => handleChange({ name: x }) }
          initialValue={ initial?.name }
        />
      </Field>
      <Field label={ formatMessage({ id: 'customer' }) } style={{ marginBottom: 20 }}>
        <Select
          labelProp="unit"
          placeholder={ formatMessage({ id: 'customer' }) }
          options={ customers as any }
          onChange={ x => handleChange({ unitId: x }) }
          initialValue={ initial && customers.find(x => x.id === initial?.customer.id) as any }
        />
      </Field>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button onClick={ onClose } type="secondary" style={{ margin: '0 10px 0 0' }}>Cancel</Button>
        <Button isDisabled={ !draft.isValid } onClick={ onSave.bind(undefined, draft.value) }>Save</Button>
      </div>
    </Modal>
  )
}

export default Draft
