import React, { Component, Fragment } from 'react';
import ModalAddAdmin from './AccountData/ModalAddAdmin'
export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModalAddAdmin: false,
        }
    }
    _OpenModalAddAdmin = () => {
        this.setState({ isOpenModalAddAdmin: true })
    }
    _CloseModalAddAdmin = () => {
        this.setState({ isOpenModalAddAdmin: false })
    }
    render() {
        return (
            <Fragment>
                <ModalAddAdmin switchClose={this._CloseModalAddAdmin} isOpen={this.state.isOpenModalAddAdmin} />
            <div className="row">
                <form action="" method="POST" role="form" className="form-inline" style={Styles.form_sort} style={{ margin: '10px' }}>
                        <button type="button" className="btn btn-success" style={{ margin: '10px' }} onClick={() => this._OpenModalAddAdmin()}>Create Admin</button>
                        {/* <label style = {{marginLeft : '300px'}}>Sort by: </label>
                    <select name=""  className="form-control" required="required">
                            <option value="">------------</option>
                            <option value="">Online</option>
                            <option value="">Offline</option>
                        </select> */}
                    </form>
                </div>
            </Fragment>
          
        )   
    }
};

const Styles = {
    div_main: {
        width: '100%'
    },

    form_sort: {
        float: 'right'
    }
}