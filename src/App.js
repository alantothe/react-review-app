import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import IDontHaveToHaveTheSameName, {StringCounter, NewString} from './components/StringCounter';


function App() {
  const [helloWorldState, setHelloWorldState] = useState('Hello World')
  const [inputString, setInputString] = useState('')


  const makeAlert = (message) => {
    alert(helloWorldState)
  }

  const thisSetsSomeState = () => {
    setHelloWorldState('Guten Tag World')
  }

  const inputHandler = (e) => {
    let newString = e.target.value
    console.log(newString)
    setInputString(newString)
    // setInputString(e.target.value.length)
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
          <NewString 
            inputString={inputString}
            inputHandler={(e) => inputHandler(e)}
          />
          <StringCounter />
          <button name='Alert' onClick={() => makeAlert("I got clicked!")}>Alert</button>
          <button name='changeState' onClick={thisSetsSomeState}>Guten Tag</button>
        </div>
      
      </div>
    </div>
    
  );
}

export default App;
