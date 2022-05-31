// We can import the context object into only the component files that we care about in our application.

import React from "react";

export default React.createContext('english');

// const context =  React.createContext('english');
// console.log("LanguageContext",context);
// export default context;

// Could pass anything, e.g. object, array, etc.