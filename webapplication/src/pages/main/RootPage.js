import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import callAPI from '../../utils/apiCaller'
import { actHandleTokeRequest, actSaveUser } from '../../actions/LoginAction'

class RootPage extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            directNumber: null
        })
    }
    componentWillMount() {
        this._checkToken()
    }

    _checkToken =  () => {
        if (localStorage.getItem('User')) {
            const User = JSON.parse (localStorage.getItem('User'))
            this.setState({
                directNumber: User.data.Group_Accounts_Id
            })
        }
    }

    render() {
        var directNumber = this.state.directNumber
        var myRedirect = <Redirect to={{ pathname: '/' }} />
        if (directNumber === 1) {
            myRedirect = <Redirect to={{ pathname: '/a' }} />
        }
        else if (directNumber === 2) {
            myRedirect = <Redirect to={{ pathname: '/s' }} />
        }
        else if (directNumber === null) {
            myRedirect = <Redirect to={{ pathname: '/w/Login' }} />
        }
        return (
            <div>
                {myRedirect}
            </div>
        )
    }
};

const mapStyleToProps = (state) => {
    return {
        dataUser: state.handleLogin
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRequestToken: async (data) => {
            await dispatch(actSaveUser(data));
        },
    }
}
export default connect(null, mapDispatchToProps)(RootPage)
