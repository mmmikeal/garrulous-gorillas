import React from 'react';
import ReactDOM from 'react-dom';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const Argument = (props) => (
  <div>
    <form >
      <input onChange={props.handleVote()} type="checkbox" />
        {props.argument}  
    </form>
  </div>
)

export default Argument;