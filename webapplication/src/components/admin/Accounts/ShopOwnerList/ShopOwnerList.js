import React, { Component } from 'react'


class ShopOwnerList extends Component {
    render() {
        return (
            <div >
                <div className="row" >
                    {/* <form action="" method="POST" role="form" className="form-inline" style={{ margin: '10px' }} >
                        <label>Sort by: </label>
                        <select name="" id="input${1/(\w+)/\u\1/g}" className="form-control" required="required">
                            <option value="">------</option>
                            <option value="">Date Create</option>
                            <option value="">Number of Promotion</option>
                        </select>
                    </form> */}
                </div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Shop Owner List</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th style={{ textAlign: 'center' }}>ID</th>
                                    <th style = {{display : 'none'}}>ID Shop</th>
                                    <th style={{ textAlign: 'center' }}>Name</th>
                                    <th style={{ textAlign: 'center' }}>Phone Number</th>
                                    <th style={{ textAlign: 'center' }}>Email</th>
                                    {/* <th>Phone Number</th>    */}
                                   

                                    <th style={{ textAlign: 'center' }}>Business Type</th>
                                    <th style={{ textAlign: 'center' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td>Nguyen Thanh Huy</td>
                                    <td>0989653234</td>
                                    <td>nguyenthanhhuy155@gmail.com</td>
                                    <td>183 Phan Thanh, Hai Chau, Da Nang</td>

                                    <td style={{ textAlign: 'center' }}><a class="btn btn-sm btn-success" href="#" role="button">10</a> </td>
                                    <td>
                                        <button type="button"
                                            className="btn btn-sm btn-warning  "
                                        // onClick={() => this.onDelete(product.id)}
                                        >Block</button>
                                        <button type="button" style={{ marginLeft: 5 }}
                                            className="btn btn-sm btn-danger  "
                                        // onClick={() => this.onDelete(product.id)}
                                        >Delete</button></td>
                                </tr> */}
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShopOwnerList