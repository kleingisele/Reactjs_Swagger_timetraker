import { Button, Field, Input, Modal, Select, Title } from '@valudio/ui'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import useUnits from '../../hooks/useUnits'
import { IDraft, IMaterial, initialMaterial } from '../../models'

interface IProps {
  isHidden: boolean
  onClose: () => void
  onSave: (material: IMaterial) => void
  initial?: IMaterial
}

// tslint:disable: jsx-no-lambda
const Draft: React.FC<IProps> = ({ isHidden, onClose, onSave, initial }) => {
  const units = useUnits()
  const { formatMessage } = useIntl()
  const [ draft, setDraft ] = useState<IDraft<IMaterial>>({ isValid: false, value: initialMaterial })

  const handleChange = (property: { [key: string]: any }) => {
    const value = { ...draft.value, ...property }
    const { name, unit } = value
    const isValid =
      (!!initial && (initial.name !== name || initial.unit.id !== unit.id)) ||
      (!!name && !!unit)
    setDraft({ isValid, value })
  }

  useEffect(() => {
    setDraft({ isValid: false, value: initial })
  }, [ initial ])

  return (
    <Modal isHidden={ isHidden || !units } style={{ padding: 40 }}>
      <Title style={{ marginBottom: 20 }}>Create</Title>
      <Field label={ formatMessage({ id: 'name' }) } style={{ marginBottom: 20 }}>
        <Input
          placeholder={ formatMessage({ id: 'name' }) }
          onChange={ x => handleChange({ name: x }) }
          initialValue={ initial?.name }
        />
      </Field>
      <Field label={ formatMessage({ id: 'unit' }) } style={{ marginBottom: 20 }}>
        <Select
          labelProp="unit"
          placeholder={ formatMessage({ id: 'unit' }) }
          options={ units as any }
          onChange={ x => handleChange({ unitId: x }) }
          initialValue={ initial && units.find(x => x.id === initial?.unit.id) as any }
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
