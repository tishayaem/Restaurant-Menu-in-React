import React from 'react';
import '../css/style.css';
import { getFunName } from '../helpers';

export default class Restaurant extends React.Component {
  myInput = React.createRef();
  goToRestaurant = event => {
    event.preventDefault();
    const reastaurantName = this.myInput.value.value;
    this.props.history.push(`/store/${reastaurantName}`);
  };
  render() {
    return (
      <form onSubmit={this.goToRestaurant} className="store-selector">
        <h2>Enter restaurant name</h2>
        <input
          ref={this.myInput}
          type="text"
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Restaurant</button>
      </form>
    );
  }
}
