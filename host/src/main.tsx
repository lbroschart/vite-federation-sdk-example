import React from 'react'
import ReactDOM from 'react-dom/client'

import { init } from '@module-federation/runtime'

import { SDKWrapper } from 'example-sdk'
import App from './app'

init({
  name: 'host',
  remotes: [{
   name: 'remote',
   entry: 'http://localhost:5001/remoteEntry.js',
   type: 'module'
  }]
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SDKWrapper>
      <App />
    </SDKWrapper>
  </React.StrictMode>
)
