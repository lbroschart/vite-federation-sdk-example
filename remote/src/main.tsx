import React from 'react'
import ReactDOM from 'react-dom/client'

import { SDKWrapper } from 'example-sdk'

import App from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SDKWrapper>
      <App />
    </SDKWrapper>
  </React.StrictMode>
)
