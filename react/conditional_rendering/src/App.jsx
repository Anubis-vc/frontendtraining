import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// using below to test passing props and conditional rendering

function List(props) {
  return (
    <ul>
      {props.animalList.map(animal => {
        return animal.startsWith("L") ? 
          <li key={animal} animal={animal}>{animal}</li>
          : null
      })}
    </ul>
  )
}

function ListAnd(props) {
  return (
    <ul>
      {props.animalList.map(animal => {
        return animal.startsWith("L") && <li key={animal} animal={animal}>{animal}</li>
      })}
    </ul>
  )
}

function ListIf(props) {
  if (!props.animalList) {
    return <div>Loading...</div>;
  }
  else if (props.animalList.length === 0) {
    return <div>No animals in the list</div>;
  }
  else {
    return (
      <ul>
        {props.animalList.map(animal => {
          return animal.startsWith("L") && <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
  }
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <h1>Testing conditional rendering</h1>
      <div className="card">
        <h2>Animals: </h2>
        <ListIf animalList={animals} />
      </div>
    </>
  )
}

export default App