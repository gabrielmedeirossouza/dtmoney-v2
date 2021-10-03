import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/Light'
import { GlobalStyle } from '@/styles/shared/main'

import { Dashboard } from '@/modules/Dashboard'
import { TransactionsProvider } from '@/contexts/useTransactions'

import { I18nextProvider } from 'react-i18next'
import { i18next } from '@/i18n'

export function App() {
  return (
    <ThemeProvider theme={light}>
      <I18nextProvider i18n={i18next}>

        <GlobalStyle />

        <TransactionsProvider>
          <Dashboard />
        </TransactionsProvider>
      </I18nextProvider>
    </ThemeProvider>
  )
}
