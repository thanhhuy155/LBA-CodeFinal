import React, { Component,Fragment } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import {Modal} from 'react-bootstrap';
import {handleSplitDate, handleCheckToday, formatDateTime} from '../../../../constraints/HandleDate';
// import * as Message from './../constants/Message';
class PromotionItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModalDeleteShop: false
        }
    }
    onDelete = async (Promotion_ID) => {
        // if (confirm('You decide to detele this Promotions ?')) { // eslint-disable-line
        //     // console.log(id); //phai go~ dung' dong` tren Eslint
            await this.props.onDelete(Promotion_ID);
        // }
    }

    render() {
        var { promotion, index } = this.props;
        var StartedDate = handleSplitDate(promotion.Promotion_DateStart);
        var EndDate = handleSplitDate(promotion.Promotion_DateEnd)    
        var CheckDate = handleCheckToday(StartedDate, EndDate)
        var statusEvent = '#FFCDD2'
        if (CheckDate === 0)
            statusEvent = '#C8E6C9'
        else if (CheckDate === 1)
            statusEvent = '#F0F4C3'
        return (
             <Fragment>
                            <Modal show = {this.state.isOpenModalDeleteShop} >
                    <Modal.Header style = {{backgroundColor:'#f9c882'}}>
                        <p style = {{fontSize:20}}><center><strong>Delete Promotion</strong></center></p>
                    </Modal.Header>

                    <Modal.Body>
                       <center> <p><strong>{`Are you sure you want to delete promotion "${promotion.Promotion_Title}" ?`}</strong></p></center>
                    </Modal.Body>

                    <Modal.Footer>
                        <button 
                            onClick = {()=> this.setState ({isOpenModalDeleteShop:false})} 
                            type="button" 
                            class="btn btn-default">Cancel</button>
                        <button
                            onClick = {
                            () => {
                                this.onDelete(promotion.Promotion_ID)
                                this.setState ({isOpenModalDeleteShop:false})}
                            }
                            type="button" 
                            class="btn btn-danger">Delete</button>
                    </Modal.Footer>
                </Modal>  
            <div className = "col-xs-6 col-sm-6 col-md-3">
            <div
             className={`panel ${promotion.Promotion_Status === 1 ? 'panel-success' : 'panel-danger'}`} 
            >
                <div className="panel-heading" ><center>
                    {/* <center><h3 className="panel-title"> {promotion.Promotion_ID} {promotion.Promotion_Title}</h3></center> */}
                        <LinesEllipsis
                                text={promotion.Promotion_Title}
                                maxLine='1'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            /></center>
                            <td style = {{display : 'none'}}>{promotion.Promotion_ID} </td>
                </div>
                <div className="panel-body">
                    <center>
                        <img src={promotion.Promotion_Image.length===0?'':promotion.Promotion_Image.split(',')[0]} className="img-responsive" alt="img" style={{ height: 210 }} />
                    </center>
                </div>
                <div className="panel-footer" style= {{backgroundColor:statusEvent}}>
                    <b>Start Date: {formatDateTime(handleSplitDate(promotion.Promotion_DateStart))} </b> <br />
                    <b>End Date  : {formatDateTime(handleSplitDate(promotion.Promotion_DateEnd)) }</b>   <br />
                    <b>Shop      : {promotion.Store_Name }</b>   <br />
                    <button type="button" class="btn btn-large btn-block btn-warning"
                        onClick={() => {this.setState ({isOpenModalDeleteShop:true})} }>Delete</button>
                </div>
            </div>
            </div>
             </Fragment>
            
        );
    }
}

export default PromotionItem;
