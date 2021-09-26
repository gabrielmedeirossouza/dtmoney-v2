import { AppCard } from '../../../../components/global'
import { Container } from './styles'

import incomeIcon from '../../../../assets/icons/income.svg'
import withdrawIcon from '../../../../assets/icons/withdraw.svg'
import totalIcon from '../../../../assets/icons/total.svg'

export function Summary() {
  return (
    <Container>
      <AppCard
        title="Entradas"
        icon={incomeIcon}
        text={'R$ 1.200,00'}
      />

      <AppCard
        title="Saídas"
        icon={withdrawIcon}
        text={'R$ 200,00'}
      />

      <AppCard
        title="Total"
        icon={totalIcon}
        text={'R$ 1.000,00'}
        type="positive"
      />
    </Container>
  )
}
