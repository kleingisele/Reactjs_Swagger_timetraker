import { ReactNode } from 'react'
import { IBlobFile } from './blob-file'

export interface ITabOption {
  label: 'materialRecords' | 'timeRecords'
  content: ReactNode
  export: () => Promise<IBlobFile>
  print: () => void
  onClick: () => void
}
