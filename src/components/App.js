import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class App extends React.Component{
  state={ language:'english' };

  onLanguageChange=(language)=>{
    this.setState({language});
  }
  render(){
    return (<div className="ui container">
      <div>
        Select a language: 
        <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
        <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')}/>
      </div>
      {/* {this.state.language} */}
      {/* The prop name of value is very special to a provider. */}
      {/* Could have been inside LanguageContext also */}
      <ColourContext.Provider value ='orange'>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColourContext.Provider>
      {/* <LanguageContext.Provider value={'dutch'}>
        <UserCreate />
      </LanguageContext.Provider> 
      <UserCreate /> */}{/* Always gets just the default value and never sees any update. */}
    </div>)
  }
}

export default App;