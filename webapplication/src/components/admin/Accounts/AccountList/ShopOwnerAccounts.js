import React, { Component } from 'react';
import '../../../admin/adminstyle.css';

class ShopOwnerAccounts extends Component {
    render() {
        return (
            <div class="col-md-9">
                <div class="row" >
                    <form action="" method="POST" role="form" class="form-inline" style={{ margin: '10px' }} >
                        <label>Sort by: </label>
                        <select name="" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                            <option value="">------</option>
                            <option value="">Date Create</option>
                            <option value="">Number of Promotion</option>
                        </select>
                    </form>
                </div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Shop Owner List</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th>ID</th>
                                    {/* <th>ID Shop</th> */}
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    {/* <th>Phone Number</th>    */}
                                    <th>Address</th>
        
                                    <th>Total Promotions</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nguyen Thanh Huy</td>
                                    <td>0989653234</td>
                                    <td>nguyenthanhhuy155@gmail.com</td>
                                    <td>183 Phan Thanh, Hai Chau, Da Nang</td>
                                    
                                    <td style = {{textAlign:'center'}}><a class="btn btn-sm btn-success" href="#" role="button">10</a> </td>
                                    <td>
                                        <button type="button"
                                            className="btn btn-sm btn-warning  "
                                        // onClick={() => this.onDelete(product.id)}
                                        >Block</button>
                                        <button type="button" style ={{marginLeft:5}}
                                            className="btn btn-sm btn-danger  "
                                        // onClick={() => this.onDelete(product.id)}
                                        >Delete</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Pham Van Han</td>
                                    <td>09896534534</td>
                                    <td>Hanphan68@gmail.com</td>
                                    <td>111 Cam Le, Da Nang</td>
                                   
                                    <td style={{ textAlign: 'center' }}><a class="btn btn-sm btn-success" href="#" role="button"                                     
                                        >15</a>  </td>
                                    <td>
                                        <button type="button"
                                            className="btn btn-sm btn-warning  "
                                        // onClick={() => this.onDelete(product.id)}
                                        >Block</button>
                                        <button type="button"
                                            className="btn btn-sm btn-danger  "
                                        // onClick={() => this.onDelete(product.id)}
                                            style={{ marginLeft: 5 }}>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShopOwnerAccounts;