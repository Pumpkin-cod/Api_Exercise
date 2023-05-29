/* eslint-disable no-unused-vars */
import React from 'react'
import UsersClass from './component/UsersClass'
import UsersFunction from './component/UsersFunction'
import './App.css'

const App = () => {
  return (
    <div>
    <h1>Class Component</h1>
      <UsersClass />
      <hr/>
      <h1>Functional Component</h1>
      <UsersFunction />
    </div>
  )
}

export default App

