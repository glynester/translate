import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';
import LanguageSelector from './LanguageSelecter';

class App extends React.Component{
  // state={ language:'english' };

  // onLanguageChange=(language)=>{
  //   this.setState({language});
  // }
  render(){
    return (<div className="ui container">
      <LanguageStore>
        {/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> */}
        <LanguageSelector/>
        {/* {this.state.language} */}
        {/* The prop name of value is very special to a provider. */}
        {/* Could have been inside LanguageContext also */}
        <ColourContext.Provider value ='orange'>
          {/* <LanguageContext.Provider value={this.state.language}> */}

            <UserCreate />
          {/* </LanguageContext.Provider> */}
        </ColourContext.Provider>
        {/* <LanguageContext.Provider value={'dutch'}>
          <UserCreate />
        </LanguageContext.Provider> 
        <UserCreate /> */}{/* Always gets just the default value and never sees any update. */}
        </LanguageStore>
    </div>)
  }
}

export default App;