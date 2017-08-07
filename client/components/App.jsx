import React from 'react'

import AddWord from '../containers/AddWord'
import Words from '../containers/Words'

import AddImage from '../containers/AddImage'
import Images from '../containers/Images'


const App = () => (
  <div className='app-container'>

    <Words />
    <AddWord />

    <Images />
    <AddImage />

  </div>
)

export default App
