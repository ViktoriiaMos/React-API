import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
const [page, setPage] = useState([]);
const [repository, setRepository] = useState([]);

useEffect(() => {
  axios.get('http://api.github.com/users/ViktoriiaMos?client_id=493f1a40ef8639faf440&client_secret=0540a83e3233a5f7302ad2458a567e9effe88486&sort=created')
  .then((res) => {setPage(res.data); })
  .catch(err => {console.log(err)})
}, []);

useEffect(() => {
  axios.get('https://api.github.com/users/ViktoriiaMos/repos')
  .then((repository) => setRepository(repository.data))
  .catch(err => {console.log(err)})
})
const photo = page.avatar_url;

  return (
    <div className="App">
     <div className='upper-part'>
        <div className='img'>
          <img src={photo} alt="photo"/>
        </div>
        <div className='info'>
          <p>FullName: {page.name}</p>
          <p>UserName: {page.login}</p>
          <p>Location: {page.location}</p>
          <p>email: {page.email}</p>
        </div>
      </div>
      <div className='mapping-part'>
        <h3>My repositories</h3>
        <ul>
          {repository.map((item) => {
            return <li key={item.id}><a href={'https://github.com/' + item.full_name}>{item.name}</a></li>
          })}
        </ul>

      </div>
    </div>
  );
}

export default App;
