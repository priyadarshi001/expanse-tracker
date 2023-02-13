// Style-duplication such as box-styling, box-shadow in outer div as well as div of each expenseItems==> Hence making custom Card component to extract common styling which can be reused.

import React from 'react'
import "../styles/Card.css"

export default function Card(props) {
 const classes = 'card ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

// but using Card as wrapper to return JSX does not work for custom component==> props.children.
  // children is reserved name
// But other styling properties (like align-items) are not automatically taken by Card==> use props to pass className
