const CountryDetail = ({country}) => {

    return (
      <div className="country-detail">
        The population of {country.name.common} is {country.population}
      </div>
    )
}
  
export default CountryDetail;