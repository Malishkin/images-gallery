import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

const UNSPLASH_ACCESS_KEY=process.env.REACT_APP_UNSPLASH_ACCESS_KEY
const App = () => {
  const [word, setWord]=useState('');
  const handleSearchSubmit =(e)=>{
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_ACCESS_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      setWord('');
  }
  // console.log(process.env);
  // console.log("UNSPLASH_ACCESS_KEY: ", UNSPLASH_ACCESS_KEY);
  return (
    <div>
      <Header title ="Images Gallery"/>
      <Search handleSubmit={handleSearchSubmit} word={word} setWord={setWord}/>
    </div>
  );
};

export default App;
