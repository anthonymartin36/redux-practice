import React from 'react'
import {connect} from 'react-redux'
import {addImage} from '../actions'

function submitImage (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addImage(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const AddImage = (props) => (
  <input
    placeholder='Enter a image'
    onKeyUp={e => {
      // the connect() call below puts
      // dispatch directly on props
      submitImage(e, props.dispatch)
    }}
  />
)

export default connect()(AddImage)
