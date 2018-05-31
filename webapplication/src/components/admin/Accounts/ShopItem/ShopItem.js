import React, { Component,Fragment } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
    import {Modal} from 'react-bootstrap'
// import * as Message from './../constants/Message';

class ShopItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModalDeleteShop: false
        }
    }
    onDelete = async (Store_ID) => {
            await this.props.onDelete(Store_ID);
    }
    render() {
         var { shop, index } = this.props;
        return (  
            <Fragment>
                            <Modal show = {this.state.isOpenModalDeleteShop} >
                    <Modal.Header style = {{backgroundColor:'#f9c882'}}>
                        <p style = {{fontSize:20}}><center><strong>Delete Shop</strong></center></p>
                    </Modal.Header>

                    <Modal.Body>
                       <center> <p><strong>{`Are you sure you want to delete shop "${shop.Store_Name}" ?`}</strong></p></center>
                    </Modal.Body>

                    <Modal.Footer>
                        <button 
                            onClick = {()=> this.setState ({isOpenModalDeleteShop:false})} 
                            type="button" 
                            class="btn btn-default">Cancel</button>
                        <button
                            onClick = {
                            () => {
                                this.onDelete(shop.Store_ID)
                                this.setState ({isOpenModalDeleteShop:false})}
                            }
                            type="button" 
                            class="btn btn-danger">Delete</button>
                    </Modal.Footer>
                </Modal>  
            <div className = "col-xs-6 col-sm-6 col-md-3">
                <div className={`panel ${shop.Store_Status === 1 ? 'panel-primary' : 'panel-danger'}`}>
                    <div className="panel-heading" >  <center>
                        {/* <center><h3 className="panel-title">{shop.Store_ID} {shop.Store_Name}</h3></center> */}
                            <LinesEllipsis
                                text={shop.Store_Name}
                                maxLine='1'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            /></center>
                    </div>
                    <td style = {{display : 'none'}}>{shop.Store_ID} </td>
                    <div className="panel-body">
                        <center>
                            <img src={shop.Store_ImageLink} className="img-responsive" alt="img" style={{ height: 210 }} />
                        </center>
                    </div>
                    <div className="panel-footer" style={{ color: shop.Store_Status === 1 ? 'green' : 'red' }}>
                            <LinesEllipsis
                                text={shop.Store_Street}
                                maxLine='2'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            /> 
                        {/* <center>{`${shop.Store_Street}, ${shop.Store_District}`}</center> */}
                        <br />
                        <b>  Type   : {shop.StoreCatalog_Name} </b> <br />
                        <b>  Owner: {shop.Owner_FirstName + ' ' + shop.Owner_LastName} </b>   <br />
                       <button type="button" class="btn btn-large btn-block btn-danger" 
                        onClick={() => {this.setState ({isOpenModalDeleteShop:true})}}  >Delete</button>
                    </div>
                </div>
                </div>
                </Fragment>
        );
    }
}

export default ShopItem;
