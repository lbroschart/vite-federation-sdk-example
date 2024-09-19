import type { PropsWithChildren } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterLuxon } from '@mui/x-date-pickers-pro/AdapterLuxon'

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          backgroundColor: 'red'
        }
      }
    }
  }
})

const SdkWrapper =  ({ children }: PropsWithChildren) => {
  return (
    <LocalizationProvider dateAdapter={ AdapterLuxon } adapterLocale={ "de" }>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default SdkWrapper
