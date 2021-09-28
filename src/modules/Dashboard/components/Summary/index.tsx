import {
  Container,
  Header,
  CardIncome,
  CardWithdraw,
  CardTotal,
  StyledDataTable
} from './styles'


const head = [
  'Título',
  'Preço',
  'Categoria',
  'Data'
]

const body = [
  ['Teste', '1000', 'qualquer', '13/10/1997'],
  ['Supermercado', '3000', 'algum', '13/10/1996'],
  ['Te', '2000', 'compras', '13/10/1995'],
]

export function Summary() {
  return (
    <Container>
      <Header>
        <CardIncome text={'R$ 1.200,00'} />
        <CardWithdraw text={'R$ 200,00'} />
        <CardTotal text={'R$ 1.000,00'} />
      </Header>

      <StyledDataTable>
        <thead>
          <tr>
            {head.map(th => <th key={String(th)}>{th}</th>)}
          </tr>
        </thead>

        <tbody>
          {body.map((tr, i) => (
            <tr key={String(i)}>{tr.map((td, k) => (
              <td key={String(k)}>{td}</td>
            ))}</tr>
          ))}
        </tbody>
      </StyledDataTable>
    </Container>
  )
}
