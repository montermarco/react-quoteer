import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Result extends Component {
    render() {
        const result = this.props.result;
        const mensaje = (!result) ? 'Please select a brand and Insurance Plan' : 'The Insurance total is: $';
        return (
            <div className="gran-total">
                {mensaje}
                    <TransitionGroup component="span" className="resultado">
                         <CSSTransition 
                              classNames="resultado"
                               key={result} 
                               timeout={{enter: 500, exit: 500}} >
                               <span>{result}</span>
                         </CSSTransition>
                    </TransitionGroup>
               </div>
        );
    }
}

export default Result;