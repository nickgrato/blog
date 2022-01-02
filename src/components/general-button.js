import * as React from "react"

const GeneralButton = prop => {
  
  return (
    <button className={prop.category} onClick={()=>{ prop.click()}}>
      {prop.text}
    </button>
  )
}

export default GeneralButton
