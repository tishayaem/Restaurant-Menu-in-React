import React from 'react';
import '../css/style.css'
import { getFunName } from '../helpers';

export default class Restaurant extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Enter restaurant name</h2>
                <input type="text" placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Restaurant</button>
            </form>
        )
    }
}