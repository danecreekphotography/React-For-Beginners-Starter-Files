import React, { Component } from 'react';

class StorePicker extends Component {
    render() {
        return (
            <form action="" className="store-selector">
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store name"/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker