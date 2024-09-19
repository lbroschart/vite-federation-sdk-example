import React from 'react'
import ReactDOM from 'react-dom/client'

import { SDKWrapper } from 'example-sdk'

import App from './app'
import BrokenApp from './app-broken'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SDKWrapper>
      <App />
      <BrokenApp />
    </SDKWrapper>
  </React.StrictMode>
)
