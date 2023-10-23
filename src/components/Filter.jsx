import React, { useState } from 'react';

const Filter = ({ data, setFilteredData }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleFilter = () => {
    const filteredData = data.filter((item) => {
      const lowerSearchInput = searchInput.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowerSearchInput) ||
        item.date.toLowerCase().includes(lowerSearchInput) ||
        item.type.toLowerCase().includes(lowerSearchInput) ||
        (item.inalienable ? 'yes' : 'no').toLowerCase().includes(lowerSearchInput) ||
        item.extra.toLowerCase().includes(lowerSearchInput)
      );
    });
    setFilteredData(filteredData);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar un feriado"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button onClick={handleFilter}>Buscar</button>
    </div>
  );
};

export default Filter;

