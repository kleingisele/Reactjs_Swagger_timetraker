import { Button, Field, Input, Modal, Select, Title } from '@valudio/ui'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import useRoles from '../../hooks/useRoles'
import { IDraft, initialWorker, IWorker } from '../../models'

interface IProps {
  isHidden: boolean
  onClose: () => void
  onSave: (worker: IWorker) => void
  initial?: IWorker
}

// tslint:disable: jsx-no-lambda
const Draft: React.FC<IProps> = ({ isHidden, onClose, onSave, initial }) => {
  const roles = useRoles()
  const { formatMessage } = useIntl()
  const [ draft, setDraft ] = useState<IDraft<IWorker>>({ isValid: false, value: initialWorker })

  const handleChange = (property: { [key: string]: any }) => {
    const value = { ...draft.value, ...property }
    const { username, firstName, lastName, role } = value
    const isValid =
      (!!initial && (initial.username !== username || initial.firstName !== firstName || initial.lastName !== lastName)) ||
      (!!username && !!role && !!firstName && !!lastName)
    setDraft({ isValid, value })
  }

  useEffect(() => {
    setDraft({ isValid: false, value: initial })
  }, [ initial ])

  return (
    <Modal isHidden={ isHidden || !roles } style={{ padding: 40 }}>
      <Title style={{ marginBottom: 20 }}>Create</Title>
      <Field label={ formatMessage({ id: 'role' }) } style={{ marginBottom: 20 }}>
        <Select
          labelProp="name"
          placeholder={ formatMessage({ id: 'role' }) }
          options={ roles as any }
          onChange={ x => handleChange({ role: x }) }
          initialValue={ initial && roles.find(x => x.id === initial?.role?.id) as any }
        />
      </Field>
      <Field label={ formatMessage({ id: 'username' }) } style={{ marginBottom: 20 }}>
        <Input
          placeholder={ formatMessage({ id: 'username' }) }
          onChange={ x => handleChange({ username: x }) }
          initialValue={ initial?.username }
        />
      </Field>
      <Field label={ formatMessage({ id: 'firstName' }) } style={{ marginBottom: 30 }}>
        <Input
          placeholder={ formatMessage({ id: 'firstName' }) }
          onChange={ x => handleChange({ firstName: x }) }
          initialValue={ initial?.firstName }
        />
      </Field>
      <Field label={ formatMessage({ id: 'lastName' }) } style={{ marginBottom: 30 }}>
        <Input
          placeholder={ formatMessage({ id: 'lastName' }) }
          onChange={ x => handleChange({ lastName: x }) }
          initialValue={ initial?.lastName }
        />
      </Field>
      <Field isHidden={ !!initial } label={ formatMessage({ id: 'password' }) } style={{ marginBottom: 30 }}>
        <Input
          type="password"
          placeholder={ formatMessage({ id: 'password' }) }
          onChange={ x => handleChange({ password: x }) }
          initialValue={ initial?.password }
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
