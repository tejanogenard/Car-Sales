import React from 'react';


const AddedFeature = props => {
  return (
    <li>
      {/* This button seems to not be working*/}
      <button onClick ={ () => props.deleteItem(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
