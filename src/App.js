import React from 'react';
import {SideBar} from './components/layouts'
import {BrowserRouter} from "react-router-dom"
import AppRouter from './routers'
import {Layout } from "antd"

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <SideBar/>
          <AppRouter/>
        </Layout>
        
      </BrowserRouter>
    );
  }
}

