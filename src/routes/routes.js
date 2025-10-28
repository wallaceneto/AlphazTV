import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Songs from '../pages/Songs'
import Varieties from '../pages/Varieties'
import About from '../pages/About'
import Member from '../pages/Member'
import Videos from '../pages/Videos'
import NotFound from '../pages/NotFound'

const routes = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/musicas', Component: Songs },
  { path: '/variedades', Component: Varieties },
  { path: '/sobre', Component: About },
  { path: '/member/:memberId', Component: Member },
  { path: '/playlist/:playlistId', Component: Videos },
  { path: '*', Component: NotFound },
])

export default routes