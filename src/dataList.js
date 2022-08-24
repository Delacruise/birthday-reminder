import React, { useState } from 'react';
import data from './data';

const List = () => {
  const [people, setPeople] = useState(data);

  function removeFromList({ id }) {
    console.log('We are in ' + id);
    let updatedPeopleList = people.filter((person) => person.id !== id);
    setPeople(updatedPeopleList);
  }

  const clearList = () => {
    setPeople([]);
  };
  return (
    <>
      <header>
        <h3>
          Today there are {people.length} people celebrating their birthdays.
        </h3>
      </header>
      <section>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id}>
              <img className='personPic' src={image} alt={name} />

              <div className='personDetails'>
                <div className='personName'>{name}</div>
                <div className='personAge'>{age}</div>
              </div>
              <div className='removePerson'>
                <button className='btn' onClick={() => removeFromList({ id })}>
                  Congratulated
                </button>
              </div>
            </article>
          );
        })}
      </section>
      <footer>
        <button className='btn' onClick={() => clearList()}>
          Congratualated All
        </button>
      </footer>
    </>
  );
};

export default List;
