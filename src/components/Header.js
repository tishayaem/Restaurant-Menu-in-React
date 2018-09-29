import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Catch of the day</h1>

        <h3 className="tagline">
          <span>Fresh daily</span>
        </h3>
      </header>
    );
  }
}
