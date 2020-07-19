import { ITheme } from '@valudio/ui'
import styled from 'styled-components'

export default styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  margin: 0;
  background: ${ ({ theme }) => (theme as ITheme).colors.grey.light };
`
