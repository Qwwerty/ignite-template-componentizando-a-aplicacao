import { useEffect, useState } from 'react';

import { NavbarProvider } from './hooks/navbar';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';



export function App() {

  return (
    <NavbarProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </NavbarProvider>
  )
}