import React from 'react'

function List({vehicleList, onCheckOut}) {

  // count only the vehicles that are in parking lot
  let countVehiclesInLot = 0;
  vehicleList.forEach((vehicle) => {
      if (!vehicle.isCheckedOut) countVehiclesInLot++;
  });

  // when user clicks checkout btn
  function handleClick(index){
    // get the current time
    const checkOutTime = new Date().toLocaleTimeString();

    // pass the checkout info to parent to update state
    onCheckOut(checkOutTime, index);
  }

  return (
    <div className='row'>
        <div className='list-component-group'>
          <h2 className='list-component-header'>Vehicle List</h2>
          <p className='total-vehicles'>Total Vehicles in Lot: <b>{countVehiclesInLot}</b></p>
        </div>
        <div className='list-component-group vehicle-list'>
            {
              vehicleList.map((vehicle, index) => {
                return(
                  <div key={index} className='row vehicle'>
                    <div>
                      <h4>{vehicle.driverName}</h4>
                      <p>{vehicle.regNumber}</p>
                    </div>
                    <div>
                      <p>{vehicle.checkInTime}</p>
                      {/* conditional rendering of checkout button and checkout time */}
                      {vehicle.isCheckedOut 
                        ? <p>{vehicle.checkOutTime}</p>
                        : <button className='checkOutBtn' type='button' onClick={() => handleClick(index)}>Check Out</button>
                      }
                    </div>
                  </div>
                );
              })
            }
        </div>
    </div>
  )
}

export default List;