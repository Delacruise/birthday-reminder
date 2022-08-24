import React from 'react';

const TheList = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id}>
            <div className='birtdayBlock'>
              <img className='thePic' src={image}></img>
              <div className='theName'>{name}</div>
              <div className='theAge'>{age} years</div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default TheList;
