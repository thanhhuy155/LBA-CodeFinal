import React, { Component } from 'react';
import '../../../admin/adminstyle.css';

class CustomerAccounts extends Component {
    render() {
        return (
            <div class="col-md-9">
                <div class="row">
                    <form action="" method="POST" role="form" class="form-inline" style={{ margin: '10px' }}>
                        <label>Sort by: </label>
                        <select name="" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                            <option value="">------</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </form>
                </div>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Customer List</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr style = {{textAlign: 'center'}}>
                                <th>ID</th>
                                {/* <th>ID Shop</th> */}
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Day of Birth</th>
                                {/* <th>Phone Number</th>    */}
                                <th>Gender</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Harrison</td>
                                <td>0989653234</td>
                                <td>15-05-1995</td>
                                <td>Male</td>
                                <td>16-03-2018 </td>
                                <td>
                                    <button type="button"
                                        className="btn btn-sm btn-danger  "
                                        // onClick={() => this.onDelete(product.id)}
                                    >Delete</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hanson</td>
                                <td>09896534534</td>
                                <td>15-03-1996</td>
                                <td>Female</td>
                                <td>19-03-2018 </td>
                                <td>
                                    <button type="button"
                                        className="btn btn-sm btn-danger  "
                                        // onClick={() => this.onDelete(product.id)}
                                    >Delete</button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Hilbert</td>
                                <td>09896534534</td>
                                <td>15-03-1996</td>
                                <td>Female</td>
                                <td>19-03-2018 </td>
                                <td>
                                    <button type="button"
                                        className="btn btn-sm btn-danger  "
                                        // onClick={() => this.onDelete(product.id)}
                                    >Delete</button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Kerry</td>
                                <td>0943243434</td>
                                <td>6-12-1996</td>
                                <td>Female</td>
                                <td>11-03-2018 </td>
                                <td>
                                    <button type="button"
                                        className="btn btn-sm btn-danger  "
                                        // onClick={() => this.onDelete(product.id)}
                                    >Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
export default CustomerAccounts;

