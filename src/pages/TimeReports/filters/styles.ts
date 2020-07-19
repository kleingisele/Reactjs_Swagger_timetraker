import { ITheme } from '@valudio/ui'
import styled from 'styled-components'

export default styled.section`
  display: flex;
  flex-direction: column;
  padding: 27px 32px 32px;
  flex-wrap: wrap;
  background: ${ ({ theme }) => (theme as ITheme).colors.white };
  border-top: 1px solid ${ ({ theme }) => (theme as ITheme).colors.grey.medium };


  .form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 0 14px;

    .field {
      margin: 0 0 14px;

      &:not(:last-child) {
        margin: 0 24px 14px 0;
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: row;
  }
`
