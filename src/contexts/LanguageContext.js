// We can import the context object into only the component files that we care about in our application.

import React from "react";


const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };
  onLanguageChange=(language)=>{
    this.setState({ language });
  }

  //  render method with the provider is how we're going to share the current data along with the ability to change it with other components inside of our application.
  render(){
    return (
      // only the components that get wrapped by this provider will have access to the context that is implemented by this provider.
      // Any component we create has to have a capital letter.
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }} >
        {this.props.children} 
        {/* // Whenever we pass some jsx to a component we create, these components show up inside of that parent component on props.children. All the components rendered inside of it are going to have access to this context object that we just implemented.*/}
      </Context.Provider>
    )
  }
}

export default Context;

// export default React.createContext('english');

// const context =  React.createContext('english');
// console.log("LanguageContext",context);
// export default context;

// Could pass anything, e.g. object, array, etc.