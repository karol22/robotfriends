import React from 'react';
import CardList from './Components/CardList';
import {robots} from './Assets/robots';
import SearchBox from './Components/SearchBox';

const App = () => {
  return(
    <div className='tc'>
    <h1>Robo friends</h1>
    <SearchBox />
    <CardList robots={robots} />
    </div>
  );
}
export default App
