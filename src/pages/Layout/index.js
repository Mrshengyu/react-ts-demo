import React, { useEffect } from 'react'

import { request } from '@/utils'



export default function Layout() {
  useEffect(() => {
    request.get('/api/test')
  }, [])
  return (
    <div>
      woshi layout
    </div>
  )

}
