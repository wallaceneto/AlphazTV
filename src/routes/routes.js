import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import NetlifyRedirect from '../pages/NetlifyRedirect'

const routes = createBrowserRouter([
  { path: '/', Component: NetlifyRedirect },
  { path: '*', Component: NetlifyRedirect },
])

export default routes