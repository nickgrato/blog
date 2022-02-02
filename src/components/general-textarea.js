import * as React from "react"

const GeneralTextarea = prop => {
  return (
    <div className="group">
      <textarea required={prop.required || false}  name={prop.name} />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{prop.label || "Label"}</label>
    </div>
  )
}

export default GeneralTextarea
