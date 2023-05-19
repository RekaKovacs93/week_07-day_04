import React from 'react';
import ListItem from './ListItem';

const SelectCountries = ({countries, onCountrySelected}) => {
    const handleClick = function (event) {
        onCountrySelected(countries[event.target.value])
        // 
        
    
        
      }
    const countryItems = countries.map((country, index) => {
      return ( <ListItem
      country={country}
      key={index}
      index = {index}
    //   onCountrySelected={onCountrySelected}
      />
      )
    })

  return (
    <div>
    <select onChange ={handleClick}>
      {countryItems}
    </select>
  </div>
  )
}

export default SelectCountries;