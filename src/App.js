import React, { useState } from 'react';
import './App.css';
import TheList from './dataList';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);

  function clearAll() {
    setPeople([]);
  }

  function birthdayPlural() {
    if (people.length === 1) {
      return `There is 1 birthday today.`;
    } else if (people.length === 0) {
      return `There are no birthdays today.`;
    } else {
      return `There are ${people.length} birthdays today.`;
    }
  }

  return (
    <>
      <section className='container'>
        <header>
          <h3>{birthdayPlural()}</h3>
        </header>
        <TheList people={people} />
        <button className='btn' onClick={() => clearAll()}>
          Clear All
        </button>
      </section>
    </>
  );
};

export default App;
