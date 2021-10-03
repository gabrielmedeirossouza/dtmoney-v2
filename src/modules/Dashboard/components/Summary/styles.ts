import styled from 'styled-components'
import { Card, DataTable } from '@/components/global'

import incomeIcon from '@/assets/icons/income.svg'
import withdrawIcon from '@/assets/icons/withdraw.svg'
import totalIcon from '@/assets/icons/total.svg'

export const Container = styled.div`
  max-width: 1120px;
  margin: -70px auto 0;
`

export const Header = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`

export const CardIncome = styled(Card).attrs(({
  text
}) => ({
  title: "Entradas",
  icon: incomeIcon,
  text
}))``

export const CardWithdraw = styled(Card).attrs(({
  text
}) => ({
  title: "Saídas",
  icon: withdrawIcon,
  text
}))``

export const CardTotal = styled(Card).attrs(({
  text
}) => ({
  title: "Total",
  icon: totalIcon,
  text,
  type: "positive"
}))``

export const StyledDataTable = styled(DataTable)`
  margin-top: 4rem;

  thead,
  tbody {
    tr {
      grid-template-columns: 2fr 1fr 1fr 1fr;

      td,
      th {
        color: ${props => props.theme.colors.textSmoothLight};
      }

      td:first-child {
        color: ${props => props.theme.colors.text};
      }
    }
  }

  thead {
    tr {
      background-color: transparent;
    }
  }
`

interface TDataProps {
  type?: 'income' | 'withdraw'
}

const tDataColor = {
  income: 'positive',
  withdraw: 'negative'
}

export const TData = styled.td<TDataProps>`
  && {
    color: ${props => props.type
      ? props.theme.colors[tDataColor[props.type]]
      : props => props.theme.colors.textSmoothLight
    };
  }
`
