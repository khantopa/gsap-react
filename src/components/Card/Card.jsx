import React from 'react';
import './Card.css';

const Card = React.forwardRef((props,ref) => {
  return (
    <div ref={ ref } className="box" >
     <h1> { props.title }</h1>
     <button onClick = {props.handleClick}>
       Click me
     </button>
    </div>
  );
})

export default Card;
