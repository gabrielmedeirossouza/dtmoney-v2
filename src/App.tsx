import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/Light'
import { GlobalStyle } from '@/styles/shared/main'

import { Dashboard } from '@/modules/Dashboard'
import { TransactionsProvider } from '@/contexts/useTransactions'

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <TransactionsProvider>
        <Dashboard />
      </TransactionsProvider>

    </ThemeProvider>
  )
}
