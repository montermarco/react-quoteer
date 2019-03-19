import React, { Component } from 'react';
import {firstUppercase} from '../helper';

class Summary extends Component {

    showSummary = () => {
    const {brand, plan,year} = this.props.data
    
    if(!brand || !plan || !year) return null;

    return( 
    <div className="resumen">
        <h3>Quote Summary</h3>
        <li>Brand: {firstUppercase(brand)}</li>
        <li>Year: {firstUppercase(year)}</li>
        <li>Plan: {firstUppercase(plan)}</li>
    </div>
    )}

    render() {
       
        return (
            <div>
                {this.showSummary()}   
            </div>
        );
    }
}

export default Summary;



//<Result result={this.props.result}/>