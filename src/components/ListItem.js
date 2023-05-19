import React from 'react';
import './ListItem.css';

const ListItem = ({country, index}) => {


  return <option value = {index} >{country.translations.hun.official} {country.flag}</option>
}

export default ListItem;