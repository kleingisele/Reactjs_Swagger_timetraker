import { PureComponent } from 'react'
import { autobind } from 'core-decorators'
import { IDraft } from './draft'

export interface IDraftModalProps<T> {
  title: string
  isHidden: boolean
  onSubmit: (item: T) => Promise<void>
  onCancel: () => void
  item?: T
}

interface IState<T> {
  draft: IDraft<T>
}

// tslint:disable-next-line:max-line-length
export abstract class DraftModal<T, P extends IDraftModalProps<T> = IDraftModalProps<T>> extends PureComponent<P, IState<T>> {
  protected initialDraft: IDraft<T> = {
    isValid: false,
    value: null
  }

  constructor(props: P) {
    super(props)
    this.state = { draft: this.initialDraft }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: IDraftModalProps<T>): void {
    if (nextProps.item) this.setState({ draft: { isValid: false, value: nextProps.item } })
  }

  @autobind
  protected handleChange(value: { [key: string]: any }): void {
    this.setState({
      draft: {
        ...this.state.draft,
        value: {
          ...this.state.draft.value,
          ...value
        }
      }
    })
  }

  @autobind
  protected async handleSubmit(): Promise<void> {
    await this.props.onSubmit(this.state.draft.value)
    this.setState({ draft: this.initialDraft })
  }
}
