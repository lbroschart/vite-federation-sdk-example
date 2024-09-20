import { ComponentType, lazy, Suspense } from 'react'

import { loadRemote } from '@module-federation/runtime'

const Remote = () => {
  const Lazy = lazy(() => new Promise<{ default: ComponentType<{}> }>(async (resolve, reject) => {
    try {
      const app = await loadRemote<{ default: ComponentType<{}> }>(`remote/app`)

      if (app) {
        resolve(app)
      } else {
        reject()
      }
    } catch (e) {
      reject(e)
    }
  }))

  return (
    <Suspense>
      <Lazy />
    </Suspense>
  )
}

export default Remote
