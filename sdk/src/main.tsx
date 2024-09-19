import React from 'react'
import ReactDOM from 'react-dom/client'

import { SDKWrapper } from './lib'
import { Button, CustomDatePicker } from './lib/components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SDKWrapper>
      <Button>HELLO WORLD</Button>
      <CustomDatePicker />
    </SDKWrapper>
  </React.StrictMode>
)
