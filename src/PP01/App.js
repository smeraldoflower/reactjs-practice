// Nusaiba Mahmood
// ITRJS PP01
// App.js

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Q/A LIST</h1>
        <ol>
          <li>What is the significance of Virtual DOM? How can Virtual DOM make a pagemore performant than original DOM?</li>
          <ul><li>A Virtual DOM is like a snapshot of the actual DOM that REACT makes and uses when it needs to update the DOM.
          Since traversing the actual DOM requires the use of expensive DOM operations REACT creates a virtual DOM to plan out
          the updates and changes that need be made. Only the updated nodes on the actual DOM are then manipulated.
          It makes things much more efficient.</li></ul>
          <br></br>
          <li>How JSX is different from HTML? Explain with examples.</li>
          <ul><li>JSX is syntax that allows us to mix javascript into html-like syntax in REACT.</li></ul>
          <br></br>
          <li>The <code>​setState()</code>​ method, is it sync or async? In either case, defend your answer why the <code>​setState()</code>​ operates as it does.</li>
          <ul><li>It is an async method.</li></ul>
          <br></br>
        </ol>
      </div>
    );
  }
}

export default App;
