import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import List from './Components/List';

function App() {
  // states
  const [vehicleList, setVehicleList] = useState([]);

  // add new vehicle to the list of vehicles
  function handleAdd(newVehicle){
    setVehicleList(prev => {
      return [...prev, {...newVehicle, isCheckedOut: false}];
    })
  }

  function handleCheckOut(checkOutTime, index){
    // confirm before checkout
    const confirmCheckOut = window.confirm("Are you sure to check out?");
    if(!confirmCheckOut){
      return;
    }

    // add checkout info
    setVehicleList(prev => {
      prev[index]['checkOutTime'] = checkOutTime;
      prev[index]['isCheckedOut'] = true;
      return [...prev];
    })
  }

  return (
      <div className="App container">
          <Header />
          <Form onAdd={handleAdd} />
          <List
              vehicleList={vehicleList}
              onCheckOut={handleCheckOut}
          />
      </div>
  );
}

export default App;