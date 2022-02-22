import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

const App = () => {
  const [word, setWord]=useState('');
  const handleSearchSubmit =(e)=>{
    e.preventDefault();
    console.log(word);
  }
  return (
    <div>
      <Header title ="Images Gallery"/>
      <Search handleSubmit={handleSearchSubmit} word={word} setWord={setWord}/>
    </div>
  );
};

export default App;
