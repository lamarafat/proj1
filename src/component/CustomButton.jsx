import React from 'react'

export default function CustomButton({text, style}) {
    let btnClass = 'btn btn-lg rounded ';
    if (style == 'download') {
        btnClass += 'btn-outline-secondary';
    }else if (style == 'send'){
        btnClass += 'btn-color';
    }
  return (
    <button className={btnClass} >{text}</button>
  )
}

