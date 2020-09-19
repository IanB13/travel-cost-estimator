import {useState} from 'react'

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
      setValue(event.target.value)
    }
    const placeholder = "0.00"
    const style = {
      'marginLeft': '0.2em',
      'marginRight': '0.2em',
      'width': '6em',
      'paddingRight': '0px'}

    return { type, value, onChange,placeholder,style}
  }


