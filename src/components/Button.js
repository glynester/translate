import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
  // Must be called 'contextType'.
  // static adds a property directly to the class itself;
  // Code below is the same as writing 'Button.contextType= LanguageContext;'
  static contextType = LanguageContext;
  
  render(){
    console.log("this.context=>",this.context);
    const text = this.context === 'english'?'Submit':'Voorleggen';
    return (
      <button className='ui button primary'>{text}</button>
    )
  }
}

export default Button;