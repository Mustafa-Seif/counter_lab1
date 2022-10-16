import React, { useState } from 'react'
import './CounterAction.css'

function CounterAction(props) {
  return (
    <div className="buttons">
        <button type="button" class="btn btn-success" onClick={props.in}>+</button>
        <button type="button" class="btn btn-danger ms-3"onClick={props.de} >-</button>
    </div>
  )
}

export default CounterAction