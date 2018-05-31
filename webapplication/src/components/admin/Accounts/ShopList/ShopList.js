import React, { Component } from 'react';
class ShopList extends Component {
    render() {
        return (     
                <div >
                    {this.props.children}
                </div>
        );
    }
}

export default ShopList;