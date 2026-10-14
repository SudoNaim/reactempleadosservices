import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeComponent from "./Home";
import Menu from "./Menu";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu/>
        <br/>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
