import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux'
import { remove, add } from './actions/actions'



//Step 1 create a store with your reducer function




const App = (props) => {
 
  const removeFeature = item => {
    props.remove(item)
  };

  const buyItem = item => {
   props.add(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
         <AddedFeatures delete = {removeFeature} car={props.car} /> }
      </div>
      <div className="box">
         <AdditionalFeatures additionalFeatures={props.additionalFeatures} add = {buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} /> 
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  { remove, add}
)(App)
