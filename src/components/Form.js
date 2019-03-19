import React, { Component } from 'react';

class Form extends Component {

    //We need refs to read the form field values 
    brandRef = React.createRef();
    yearRef = React.createRef();
    basicRef = React.createRef();
    fullRef = React.createRef();

    handleFormSubmit = (e) => {
        e.preventDefault();
        //read the plan
        const plan = this.basicRef.current.checked ? 'basic' : 'full'
        //get the data & create the object
        const infoAuto = {
            brand: this.brandRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }
        //send it to principal component (App parent) we send it there so the father can share it 
        this.props.quoteInsurance(infoAuto);
    }



    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.handleFormSubmit}>
                <div className="campo">
                    <label>Brand</label>
                    <select name="brand" ref={this.brandRef}>
                        <option value="american">American</option>
                        <option value="european">European</option>
                        <option value="asiatic">Asiatic</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Year</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" ref={this.basicRef} name="plan" value="basic"/> Basic
                    <input type="radio" ref={this.fullRef} name="plan" value="full"/> Full
                </div>

                <button type="submit" className="boton">Quote</button>
            </form>
        );
    }
}

export default Form;