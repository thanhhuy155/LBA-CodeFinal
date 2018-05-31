// import React, { Component } from 'react';
// import '../../../admin/adminstyle.css';

// class AdminAccounts extends Component {
//     onDelete = (id) => {
//         if (confirm('You decide to detele this ?')) { // eslint-disable-line
//             // console.log(id); //phai go~ dung' dong` tren Eslint
//             // this.props.onDelete(id);
//         }
//     }
//     render() {
//         return (
//                 <div className="panel panel-primary">
//                     <div className="panel-heading">
//                         <h3 className="panel-title">Admin List</h3>
//                     </div>
//                     <div className="panel-body">
//                         <table className="table table-bordered table-hover" >
//                             <thead>
//                             <tr>
//                                 <th style={{ textAlign: 'center',maxWidth:35 }}>ID Admin</th>
//                                     {/* <th>ID Shop</th> */}
//                                 <th style={{ textAlign: 'center' }}>Name</th>
//                                     {/* <th>Phone Number</th>    */}
//                                 <th style={{ textAlign: 'center'}}>Status</th>
//                                 <th style={{ textAlign: 'center',Width: 80  }}>Actions</th>
//                                 </tr>
//                             </thead>
//                         <tbody style={{ textAlign: 'center' }}>
//                                 {/* {this.props.children} */}
//                             <tr>
//                                 <td>1</td>
//                                 <td>Nguyen Thanh Huy</td>
//                                 <td>
//                                     <span className={`label label-warning`}>Online</span>
//                                 </td>
//                                 <td>
//                                     <a  
//                                         className="btn btn-sm btn-success"
//                                         style={{ marginRight: 10 }}>Edit</a>
//                                     <button type="button"
//                                         className="btn btn-sm btn-danger  "
//                                         onClick={() => this.onDelete(this.id)}
//                                     >Delete</button> </td>
//                                     </tr>
//                             <tr>
//                                 <td>2</td>
//                                 <td>Pham Van Han</td>
//                                 <td>
//                                     <span className={`label label-default`}>Offline</span>
//                                 </td>
//                                 <td>
//                                     <a  
//                                         className="btn btn-sm btn-success"
//                                         style={{ marginRight: 10 }}>Edit</a>
//                                     <button type="button"
//                                         className="btn btn-sm btn-danger  "
//                                         onClick={() => this.onDelete(this.id)}
//                                     >Delete</button> </td>
//                                     </tr>
//                             <tr>
//                                 <td>3</td>
//                                 <td>Tran Xuan Hiep</td>
//                                 <td>
//                                     <span className={`label label-default`}>Offline</span>
//                                 </td>
//                                 <td>
//                                     <a  
//                                         className="btn btn-sm btn-success"
//                                         style={{ marginRight: 10 }}>Edit</a>
//                                     <button type="button"
//                                         className="btn btn-sm btn-danger  "
//                                         onClick={() => this.onDelete(this.id)}
//                                     >Delete</button> </td>
//                                     </tr>
//                             <tr>
//                                 <td>4</td>
//                                 <td>Do Thien Thu</td>
//                                 <td>
//                                     <span className={`label label-default`}>Offline</span>
//                                 </td>
//                                 <td>
//                                     <a  
//                                         className="btn btn-sm btn-success"
//                                         style={{ marginRight: 10 }}>Edit</a>
//                                     <button type="button"
//                                         className="btn btn-sm btn-danger  "
//                                         onClick={() => this.onDelete(this.id)}
//                                     >Delete</button> </td>
//                                     </tr>
//                             </tbody>
//                         </table>    
//                     </div>
//                 </div>
//         )
//     }
// }
// export default AdminAccounts;

