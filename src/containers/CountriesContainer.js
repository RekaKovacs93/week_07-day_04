import React, { useState, useEffect } from 'react';
import SelectCountries from '../components/SelectCountries';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function(country) {
        setSelectedCountry(country)
        console.log (selectedCountry)

    }

    return (
        <div className="main-container">
            <SelectCountries countries={countries} onCountrySelected = {onCountrySelected}/>
            {selectedCountry? <CountryDetail country= {selectedCountry}/>: null}
        </div>
    )
}

export default CountryContainer;
