import React, { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import MiApi from './components/MiApi';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div>
      <Header />
      <div>
        <Filter data={data} setFilteredData={setFilteredData} />
      </div>
      <div>
        <MiApi data={filteredData} setData={setData} />
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
