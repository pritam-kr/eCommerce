import React from 'react'

const Button = () => {
  return (
    <div className="qyt-btn-wrapper">
    {"k" <= 1 ? (
      <button
        className="btn btn-qyt btn-decrement "
        onClick={() => ""}
      >
        -
      </button>
    ) : (
      <button
        onClick={() => ""}
        className="btn btn-qyt btn-decrement "
      >
        -
      </button>
    )}

    <div className="qyt">{"k"}</div>
    <button
      className="btn btn-qyt btn-increment"
      onClick={() => ""}
    >
      +
    </button>
  </div>
 
  )
}

export default Button