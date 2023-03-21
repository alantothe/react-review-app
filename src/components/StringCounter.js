import React from 'react'

export const NewString = (props) => {
    return (
        <input onChange={props.inputHandler} value={props.inputString}  placeholder='Pleaser enter your String'/>
    )
}

export const StringCounter = () => {
  return (
    <div>StringCounter</div>
  )
}


export default function MyDefaultFunc() {
    return (
        <h1>Default</h1>
    )
}