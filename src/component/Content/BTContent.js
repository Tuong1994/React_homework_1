import React, { Component } from 'react';
import BTCarousel from './BTCarousel';
import BTProductList from './Product/BTProductList';

class BTContent extends Component {
    render() {
        return (
            <div className='container'>
                <BTCarousel />
                <BTProductList />
            </div>
        );
    }
}

export default BTContent;