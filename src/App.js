import React, {useState} from 'react';
import CamelCaseString from './components/CamelCaseString';
import logo from './logo.svg';
import './App.css';
import IDontHaveToHaveTheSameName, {StringCounter, NewString} from './components/StringCounter';
// default does not need to have the samed name, but it should.
// {} for anything without default

function App() {
  const [helloWorldState, setHelloWorldState] = useState('Hello World')
  const [inputString, setInputString] = useState('')

  // Make a new component (file) that camelCases the inputString state from App.js, should execute with a button "camelCase It!"

  const makeAlert = (message) => {
    alert("The String's length is: " + inputString.length)
  }

  const thisSetsSomeState = () => {
    setHelloWorldState('Guten Tag World')
  }

  const inputHandler = (e) => {
    // let newString = e.target.value
    // console.log(newString)
    // setInputString(newString)
    setInputString(e.target.value)
  }

  const capitalizeState = () => {
    // capitalize the inputString state
    // let newString = inputString.toUpperCase()
    // setInputString(newString)
    setInputString(inputString.toUpperCase())
  }

  //demonstrate why we use state instead of variables
  let stringVar = "I am a string variable"
  const capitalizeVar = () => {
    // capitalize the stringVar variable
    // without state, no changes will happen on the vDom
    stringVar = stringVar.toUpperCase()
    console.log(stringVar);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3>React</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Review</h3>
      </header>
      <div>
        <h1>Welcome back to React!</h1>
        <h1>{helloWorldState}</h1>
        <div>
          <IDontHaveToHaveTheSameName />
          <h2>inputString State: {inputString}</h2>
          <h2>String Var: {stringVar}</h2>
          <CamelCaseString inputString={inputString} setInputString={setInputString}/>
          <NewString
            inputString={inputString}
            inputHandler={(e) => inputHandler(e)}
          />
          <StringCounter inputString={inputString} />

          {/* button to capitolize */}
          <button onClick={capitalizeState}>Capitalize State!</button>
          <button onClick={capitalizeVar}>Capitalize Variable!</button>
          <button name='Alert' onClick={() => makeAlert("I got clicked!")}>Alert</button>
          <button name='changeState' onClick={thisSetsSomeState}>Guten Tag</button>
        </div>

      </div>
    </div>

  );
}

export default App;
