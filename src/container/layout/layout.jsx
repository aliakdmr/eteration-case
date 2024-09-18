import React from 'react'
import Header from '../../components/header/header'
import RouteLinks from '../routes/routes';
import './layout.scss';

function Layout() {
  return (
    <div className='layout-container' >
        <Header/ >
        <RouteLinks />
    </div>
  )
}

export default Layout