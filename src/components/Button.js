import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component{
  // Must be called 'contextType'.
  // static adds a property directly to the class itself;
  // Code below is the same as writing 'Button.contextType= LanguageContext;'
  // static contextType = LanguageContext;  // Context type is only required when we want to get our data assigned to the this.context property.

  // Helper method
  renderSubmit(value){
    return value === 'english'?'Submit':'Voorleggen';
  }
  
  // helper function
  renderButton(colour){
    return (
      <button className={`ui button ${colour}`} >
        {/* We are providing a function as a child to a real component. That component is going to take that child function and automatically invoke it for us. */}
        <LanguageContext.Consumer>
          {(value)=>this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render(){
    // console.log("this.context=>",this.context);
    // const text = this.context === 'english'?'Submit':'Voorleggen';
    return (
      // Must pass function to consumer component
      <ColourContext.Consumer>
        { (colour)=>this.renderButton(colour)}
      </ColourContext.Consumer>
    )
  }
}

export default Button;