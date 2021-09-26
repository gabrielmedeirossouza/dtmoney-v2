import styled from 'styled-components'

interface Props {
  type?: "positive" | "negative" | "attention"
}

export const Container = styled.div<Props>`
  color: ${props => props.type ? props.theme.colors.textLight : props.theme.colors.text};
  background-color: ${props => props.type ? props.theme.colors[props.type] : props.theme.colors.backgroundLight};
  border-radius: 4px;
  padding: 24px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 16px;
      font-weight: 400;
    }
  }

  span {
    font-size: 36px;
    font-weight: 500;
    line-height: 54px;
  }
`
