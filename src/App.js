import React, { Component } from 'react';
import Header from './components/Hader';
import Form from './components/Form';
import {getYearDiff, brandCalc, getPlan} from './helper';
import Summary from './components/Summary';
import Result from './components/Result';


class App extends Component {

  state={
    result: '',
    data: {}
  }

  quoteInsurance = (auto) => {
    //we destructure auto to get the brand, yean and plan
    const {brand, year, plan} = auto;
    // we set a base
    let result = 2000;
   
    //get the year difference 
    const diff = getYearDiff(year);
  
    //for every year substract the 3% to the insurance value
    result -= ((diff * 3) * result ) / 100;
   
    // American 15% / European 30% / Asiatic 5%
    result = brandCalc(brand) * result;
   
    //get the plan
    let planIncrease = getPlan(plan)

    // Increasing 
    result = parseFloat(planIncrease * result).toFixed(2);
    
    // now with the result we change the state
    const dataAuto = {
      brand: brand,
      plan:plan,
      year:year
    }

    this.setState({
      result:result,
      data: dataAuto
    })
  }

  render() {
    return (
      <div className="container">
        <Header title="Auto Insurance Quoteer"/>

        <div className="form-container">
          <Form quoteInsurance={this.quoteInsurance}/>
          <Summary data={this.state.data}/>
          <Result result={this.state.result}/>
        </div>


      </div>
    );
  }
}

export default App;
