import { IBlobFile } from '../models'

export const downloadBlob = (data: IBlobFile) => {
  const url = window.URL.createObjectURL(data.blob)
  const element = document.createElement('a')
  element.href = url
  element.download = data.filename
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
