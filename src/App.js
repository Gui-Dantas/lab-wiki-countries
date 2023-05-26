import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {

  const [fetching, setFetching] = useState(false);

  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get(apiURL).then((response)=>{
      setCountries(response.data);
      setFetching(true);
    })
  })
  return (
    <div>
      <Header />
      <h3>List Of Countries</h3>
      {fetching && <p>Loading</p>}
      {countries.map((country)=>{
        return (
          <div key={country._id}>
            <h3>{country.name.common}</h3>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
