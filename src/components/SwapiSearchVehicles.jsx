import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SwapiSearchVehicles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setNoResults(false);
  };

  const handleSearch = async () => {
    const response = await fetch(`https://swapi.dev/api/vehicles/?search=${searchTerm}`);
    const data = await response.json();
    if (data.results.length === 0) {
      setNoResults(true);
    }
    setSearchResults(data.results);
    setShowResults(true);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
    setNoResults(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const location = useLocation();
  useEffect(() => {
    handleReset();
  }, [location]);

  return (
    <div style={{ position: 'relative' }}>
      <div className={`ui action focus input ${noResults ? 'error' : ''}`}>
        <input type="text" placeholder="Search Vehicle" value={searchTerm} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        <button className="ui icon button" onClick={handleSearch}><i aria-hidden="true" className="search icon"></i></button>
        <button className="ui icon button" onClick={handleReset}><i aria-hidden="true" className="redo icon"></i></button>
      </div>
      {noResults && (
        <div className="search-box">
          <div style={{ color: 'red', padding: '1em 2.55em' }}>No Search Results</div>
        </div>
      )}
      {showResults && (
        <div className="search-box">
          {searchResults.map((result, index) => (
            <div className="search-result" key={index}>
              <p><span className="ui small label">name</span> {result.name}</p>
              <p><span className="ui small label">model</span> {result.model}</p>
              <p><span className="ui small label">vehicle class</span> {result.vehicle_class}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
