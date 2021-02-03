import React, { Component } from 'react';
import BTHeader from './Header/BTHeader';
import BTContent from './Content/BTContent';
import BTFooter from './Footer/BTFooter';

class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTContent />
                <BTFooter />
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;