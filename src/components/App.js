import React from 'react';
import Header from "./Header";
import Restaurant from './Restaurant';

export default class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
          <Restaurant />
        </div>
        {/* <Inventory />
        <Order /> */}
      </div>
    );
  }
}


