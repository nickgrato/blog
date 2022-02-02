import * as React from "react"
import * as styles from "./general-input.module.scss"

const GeneralInput = prop => {
  return (
    <div className="group">
      <input
        type={prop.type || "text"}
        name={prop.name}
        required={prop.required || false}
        placeholder={prop.label}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{prop.label || "Label"}</label>
    </div>
  )
}

export default GeneralInput
