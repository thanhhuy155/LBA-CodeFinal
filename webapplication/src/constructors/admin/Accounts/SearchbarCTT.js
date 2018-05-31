import React, { Component } from 'react';
import SearchBar from '../../../components/admin/Accounts/SearchBar'
import { connect } from 'react-redux'
class SearchbarCTT extends Component {
    render() {
        return (
                <SearchBar />
        )
    }
};

const mapStyleToProps = (state) => {
    return {
    }
}

export default connect(mapStyleToProps, null)(SearchbarCTT)
