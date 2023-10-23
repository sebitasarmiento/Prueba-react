import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const MiApi = ({ data, setData }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://api.victorsanmartin.com/feriados/en.json');
        const json = await res.json();
        setData(json.data); 
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [setData]); 

  return (
    <Table striped bordered hover className='Tabla'>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Irrenunciable</th>
          <th>Extra</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.inalienable ? 'Si' : 'No'}</td>
            <td>{item.extra}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MiApi;
