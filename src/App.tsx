import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';
import AddToList from './components/AddToList';

// mix of tutorial with notes and personal additions for understanding prior to project

  // interface approach - assign types to empty state - note conditional
  export interface InitState {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string
    }[] // return an array
  }

function App() {

  // // type inference - not specified - typescript assumes and assigns.
  // const [ number, setNumber ] = useState(5);

  // // pass type
  // const changeNumber = (number:number) => {
  //   setNumber(number)
  // }

  // // empty array, only run on initialization and not on every render. Use as an on mount.
  // useEffect(() => {
  //   changeNumber(10)
  // }, [])

  // can infer nested object properties
  // const [people, setPeople] = useState([
  //   {
  //     name: "name",
  //     url: "",
  //     age: 36,
  //     note: "Note one on player one"
  //   },
  //   {
  //     name: "nameTwo",
  //     url: "",
  //     age: 43,
  //     note: "Note two on player two"
  //   },
  // ])

  // cannot infer empty state
  // const [people, setPeople] = useState([])

  // define types manually in case of starting without state
  // below possible not best practice
  // const [people, setPeople] = useState<{age: number}>([])

  // see interstate at top

  const [people, setPeople] = useState<InitState['people']>([
    {
      name: 'Bethany',
      url: 'https://cdn2.vectorstock.com/i/thumb-large/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg',
      age: 23,
      note: 'I am a note'
    },
    {
      name: 'George',
      url: 'https://cdn1.vectorstock.com/i/thumb-large/80/20/young-businessman-avatar-vector-9978020.jpg',
      age: 41,
      note: 'I am a note as well'
    }
  ]) // receive an array

  // people?.map(person => {
  //   person.age
  // })

  return (
    <div className="App">
      {/* { number } */}
      <h1> People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
