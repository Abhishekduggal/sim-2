import React from "react";

export default function House(props) {
  let { e, deleteHouse } = props;
  return (
    <div>
      <h3>{e.name}</h3>
      <h4>Address: {e.address}</h4>
      <h4>City: {e.city}</h4>
      <h4>State: {e.state}</h4>
      <h4>Zip: {e.zip}</h4>
      <img src={e.img} alt="house" />
      <h4>Mortgage: {e.mortgage}</h4>
      <h4>Rent: {e.rent}</h4>
      <button onClick={() => deleteHouse(e.id)}>Delete</button>
    </div>
  );
}
