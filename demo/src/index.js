import React from 'react'
import {
  render
} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({
  render() {
    return <div >
      <
      h1 > react - mis - en - scene Demo < /h1> <
      Component
    poster = "http://fillmurray.com/300/300"
    id = "hamster"
    videoUrl = "http://techslides.com/demos/sample-videos/small.mp4" /
      >
      <
      /div>
  }
})

render( < Demo / > , document.querySelector('#demo'))