import React, { Component } from 'react';
class PromotionList extends Component {
    render() {
        return (
            <div >
                {this.props.children}
            </div>
        );
    }
}

export default PromotionList;