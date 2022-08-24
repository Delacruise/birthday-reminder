import React, { useState } from 'react';

import './App.css';
import data from './data';
import List from './dataList';

export const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <List />
    </main>
  );
};
export default App;
