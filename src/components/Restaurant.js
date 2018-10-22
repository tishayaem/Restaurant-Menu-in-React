import React from 'react';
import '../css/style.css'

export default class Restaurant extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Enter restaurant name</h2>
                <input type="text" />
                <button type="submit">Visit Restaurant</button>
            </form>
        )
    }
}