import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';



function ContriesList(props) {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setCountries(props.countries);
    }, [props.countries]);

  return (
    <div>
        <h2>ContriesList</h2>
        {countries.map((country) => ()}
    </div>
  )
}

export default ContriesList