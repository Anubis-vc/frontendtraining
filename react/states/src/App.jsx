import { useState } from 'react'
import './App.css'

function Person() {
  const [person, setPerson] = useState({ firstName: "", lastName: "", age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstNameChange = e => {
    setPerson( {firstName: e.target.value, lastName: person.lastName, age: person.age});
  }
  const handleLastNameChange = e => {
    setPerson( {firstName: person.firstName, lastName: e.target.value, age: person.age});
  }

  return (
    <>
      <h1>{person.firstName + person.lastName}</h1>
      <h2>{person.age}</h2>
      <input type="text" placeholder="enter first name" onChange={handleFirstNameChange}/>
      <input type="text" placeholder='enter last name' onChange={handleLastNameChange}/>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}


function App() {
  return (
    <>
      <Person />
    </>
  )
}

export default App
