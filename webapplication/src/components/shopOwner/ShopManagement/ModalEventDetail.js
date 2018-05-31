import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { Modal, Carousel } from 'react-bootstrap'
import { handleCheckToday, formatDateTime } from '../../../constraints/HandleDate'
import {checkOnlyLength, checkEndDate, checkStartDate, } from '../../../constraints/InputValidation'
import LoadedImage from './LoadedImage'
import DeletedImage from './DeletedImage'
export default class ModalEventDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idShop :'',
            isChangeInformation: false,
            txtStartDate: '',
            txtCloseDate: '',
            txtDescription: '',
            txtEventTitle: '',
            imageArray: [],
            availableImage : [],
            formError: {
                txtEventTitle: '',
                txtStartDate: '',
                txtCloseDate: '',
                txtDescription: '',
            },
            colorStatusEvent: '',
            createdDate: '',
            totalFavorite: '',
            checkDay : '',
            dataEventComments: [],
            deletedImageArray: [],
            currentImageArrayForDeleting: [],
            keepStartDate: '',
            keepCloseDate: '',
        }
    }

    componentWillMount () {
        //this.props.onGetEventComment (idShop,1)
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.dataEventDetail)
        {
            var { title, allDay, start, end, images, totalFavorite, status, createdDate, decription, idShop } = nextProps.dataEventDetail
            var CheckDate = handleCheckToday(start, end)
            var statusEvent = '#FFCDD2'
            if (CheckDate === 0)
                statusEvent = '#C8E6C9'
            else if (CheckDate === 1)
                statusEvent = '#F0F4C3'
            this.setState ({
                txtStartDate: start,
                txtCloseDate: end,
                txtDescription: decription,
                txtEventTitle: title,
                availableImage: images,
                idShop: idShop,
                colorStatusEvent:statusEvent,
                createdDate: createdDate,
                totalFavorite: totalFavorite,
                checkDay: CheckDate,
                currentImageArrayForDeleting : images,
                keepStartDate: start,
                keepCloseDate: end,
            })
        }
        if (nextProps.dataEventComments) {
            this.setState ({
                dataEventComments : nextProps.dataEventComments
            })
        }
    }

    formatDateTime = (time) => {
        var customTime = new Date (time)
        const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        var hour = customTime.getHours()
        var minute =customTime.getMinutes()
        if (customTime.getHours () <10)
            hour = '0' + customTime.getHours()
        if (customTime.getMinutes () <10)
            minute = '0' + customTime.getMinutes()
        return customTime.getDate() + ' ' + monthArray[customTime.getMonth()] + ', ' +customTime.getFullYear() +
                                    ' at '+ hour + ':'+ minute
    }
    
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    loadItems  (page) {
        this.props.onGetEventComment (18, page)
    }

    _handleImageChange = (e) => {
        e.preventDefault();
        try {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {
                this.setState({
                    imageArray: this.state.imageArray.concat({ file: file, imagePreviewUrl: reader.result })
                    // file: file,
                    // imagePreviewUrl: reader.result
                })
            }
            reader.readAsDataURL(file)
        } catch (e) { console.log(e) }
    }

    _handleSubmit = (e) => {


        const { txtStartDate, txtCloseDate, txtDescription, txtEventTitle, imageArray ,
            deletedImageArray, currentImageArrayForDeleting, keepStartDate, keepCloseDate}= this.state
        const { onCreateEvent, resultFromCreatingEvent, onSwitchWaitingModal, dataShopDetail, switchModal } = this.props
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtStartDate: checkStartDate(txtStartDate),
                    txtCloseDate: checkEndDate(txtStartDate, txtCloseDate),
                    txtEventTitle: checkOnlyLength(txtEventTitle, 8),
                    txtDescription: checkOnlyLength(txtDescription),
                }
        },
            async () => {
                var formError = Object.values(this.state.formError)
                let isOkay = false
                for (let i = 0; i < formError.length; i++) {

                    if (formError[i] === '') {

                        isOkay = true
                    }
                    else {
                        isOkay = false
                        break
                    }
                }
                if (isOkay) {
                    this.props.onSwitchWaitingModal()
                    await this.props.onChangeEvent(
                        this.props.dataEventDetail.idShop,
	                    txtEventTitle,
                        txtDescription,
                        imageArray,
                        txtStartDate,
                        txtCloseDate,
                        deletedImageArray.toString (),
                        currentImageArrayForDeleting.toString (),
                        keepStartDate,
                        keepCloseDate
                    )
                    this.setState ({
                        txtStartDate: '',
                        txtCloseDate: '',
                        txtDescription: '',
                        txtEventTitle: '',
                        imageArray: [],
                        isChangeInformation: false
                    }, ()=> {
                        this.props.onSwitchEventModal ()
                        this.props.onSwitchWaitingModal()
                        }) 
                }
            }
        )
    }

    _closeImage = (imagePreviewUrl) => {
        this.setState({
            imageArray: this.state.imageArray.filter((item) => item.imagePreviewUrl !== imagePreviewUrl)
        })
    }

    _handleDeleteEvent  = async (idEvent) =>{
        this.props.onSwitchWaitingModal ()
        await this.props.onDeleteEvent (idEvent,this.state.txtStartDate, this.state.txtCloseDate)
        this.props.onSwitchEventModal ()
        this.props.onSwitchWaitingModal ()
    }

    _closeDetetedImage = (imageLink) =>{
        this.setState({
            currentImageArrayForDeleting: this.state.currentImageArrayForDeleting.filter((item) => item !== imageLink),
            deletedImageArray: this.state.deletedImageArray.concat (imageLink)
        })
    }

    render() {
        const {idShop, isChangeInformation, txtStartDate, txtCloseDate, totalFavorite,
            txtDescription, txtEventTitle, availableImage, colorStatusEvent, createdDate, checkDay, imageArray, currentImageArrayForDeleting} = this.state
        return (
            <Fragment>
                <Modal show={this.props.isOpenModalEventDetail}>
                    <Modal.Header style={{ backgroundColor: colorStatusEvent }}>
                        <button type="button" class="close" onClick={()=>this.props.onSwitchEventModal ()}>&times;</button>
                        <center><h4 class="modal-title"><strong>{txtEventTitle}</strong></h4></center>
                    </Modal.Header>

                    {!this.state.isChangeInformation ? (
                        <Modal.Body>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Created Date:</strong></td>
                                    <td class="col-xd-2 col-md-8">{formatDateTime (createdDate)}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Start Date:</strong></td>
                                    <td class="col-xd-2 col-md-8">{formatDateTime (txtStartDate)}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>End Date:</strong></td>
                                    <td class="col-xd-2 col-md-8">{formatDateTime (txtCloseDate)}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Total Favorites:</strong></td>
                                    <td class="col-xd-2 col-md-8">{totalFavorite}</td>
                                </tr>
                        
                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Description:</strong></td>
                                    <td class="col-xd-2 col-md-8">{txtDescription}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Images:</strong></td>
                                    <td class="col-xd-2 col-md-8">
                                        {
                                            availableImage.map((item, index) => {
                                                return( 
                                                    <img src={item} class="img-responsive" alt="Image" style = {{width: 40, height: 40, float:'left',marginRight:3}}/>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>

                                <tr style = {{width:'100%'}}>
                                    <td class="col-xd-2 col-md-4"><strong>Customer Messages:</strong></td>
                                        <td>  
                                          <div style ={{backgroundColor:'lightBlue', maxHeight:300,overflow:'auto'}}>
                                            {this.state.dataEventComments.map ((item,index) =>{
                                                return (
                                                    <li style = {{
                                                        backgroundColor: index%2===0?'#E8F5E9':'#E0F2F1', 
                                                        marginBottom :10, 
                                                        padding:10,
                                                        listStyleType: 'none'}}>
                                                        <div>
                                                            <span><strong>{`${item.Customer_FirstName} ${item.Customer_LastName}`}</strong></span>
                                                        </div>
                                        
                                                        <div>
                                                            <p>
                                                                <i>{item.Comment_Content}</i>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p style = {{color:'gray'}}>On: {this.formatDateTime( item.Time_Log)}}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>

                        </table>
                        </Modal.Body>
                    ) : (
                            <Modal.Body>
                                <form onSubmit={this._handleSubmit}>

                                    <div class="form-group">
                                        <label for="">Promotion Title:</label>
                                        <input
                                            onBlur={() => {
                                                this.setState({
                                                    formError: {
                                                        ...this.state.formError,
                                                        txtEventTitle: checkOnlyLength(this.state.txtEventTitle, 8),
                                                    }
                                                })
                                            }}
                                            type="text"
                                            class="form-control"
                                            placeholder="Input field"
                                            value={this.state.txtEventTitle}
                                            onChange={this.handleChange}
                                            name="txtEventTitle"
                                        />
                                        <p class={'text-danger'}>{this.state.formError.txtEventTitle}</p>
                                    </div>

                                    <div class="form-group">
                                        <label for="">Start Date: </label>
                                        <input
                                            onBlur={() => {
                                                this.setState({
                                                    formError: {
                                                        ...this.state.formError,
                                                        txtStartDate: checkStartDate(this.state.txtStartDate),
                                                    }
                                                })
                                            }}
                                            type="date"
                                            class="form-control"
                                            placeholder="Input field"
                                            value={this.state.txtStartDate}
                                            onChange={this.handleChange}
                                            name="txtStartDate"
                                        />
                                        <p class={'text-danger'}>{this.state.formError.txtStartDate}</p>
                                    </div>

                                    <div class="form-group">
                                        <label for="">End Date: </label>
                                        <input
                                            onBlur={() => {
                                                this.setState({
                                                    formError: {
                                                        ...this.state.formError,
                                                        txtCloseDate: checkEndDate(this.state.txtStartDate, this.state.txtCloseDate),
                                                    }
                                                })
                                            }}
                                            type="date"
                                            class="form-control"
                                            placeholder="Input field"
                                            value={this.state.txtCloseDate}
                                            onChange={this.handleChange}
                                            name="txtCloseDate"
                                            
                                        />
                                        <p class={'text-danger'}>{this.state.formError.txtCloseDate}</p>
                                    </div>

                                    <div class="form-group">
                                        <label for="">Description: </label>
                                        <textarea
                                            onBlur={() => {
                                                this.setState({
                                                    formError: {
                                                        ...this.state.formError,
                                                        txtDescription: checkOnlyLength(this.state.txtDescription),
                                                    }
                                                })
                                            }}
                                            class="form-control"
                                            rows="3"
                                            placeholder="Input field"
                                            value={this.state.txtDescription}
                                            onChange={this.handleChange}
                                            name="txtDescription"
                                        />
                                        <p class={'text-danger'}>{this.state.formError.txtDescription}</p>
                                    </div>

                            
                                </form>

                               <div class="form-group">
                                <label for=""><strong>Add more images for shop: </strong></label>
                                <div class="row">

                                    <div
                                        class="col-xs-6 col-sm-2 col-ld-2"
                                        style={{
                                            textAlign: 'center',
                                            display: imageArray.length === 5 ? 'none' : ''
                                        }}
                                    >
                                        <div class="input-file-container">
                                            <input
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                onChange={(e) => this._handleImageChange(e)}
                                                class="input-file" id="my-file" type="file" />

                                            <label
                                                style={{
                                                    display: 'block',
                                                    background: '#39D2B4',
                                                    color: '#fff',
                                                    fontSize: 45,
                                                    cursor: 'pointer',
                                                    width: 60,
                                                    height: 60,

                                                }}
                                                tabindex="0"
                                                for="my-file"
                                                class="input-file-trigger">+</label>
                                        </div>
                                    </div>

                                    {
                                        imageArray.length===0?null:imageArray.map((item, index) => {
                                            return (
                                                <LoadedImage
                                                    _closeImage={this._closeImage}
                                                    file={item.file}
                                                    imagePreviewUrl={item.imagePreviewUrl} />
                                            )
                                        })
                                    }
                                    
                                    {
                                        currentImageArrayForDeleting[0].length===0?null:currentImageArrayForDeleting.map((item, index) => {
                                            return (
                                                <DeletedImage
                                                    _closeDetetedImage={this._closeDetetedImage}
                                                    imageForDeleting = {item} />
                                            )
                                        })
                                    }

                                    <p class={'text-danger'}>{this.state.formError.imageArray}</p>
                                </div>
                            </div>
                            </Modal.Body>
                        )
                    }

                    <Modal.Footer>
                        <div style = {{display: checkDay ===-1 || checkDay=== 0 ?'none':'', float:'left'}}>
                            <button
                                onClick={
                                    () => { this.setState({ isChangeInformation: true }) }}
                                style={{ display: this.state.isChangeInformation === false ? '' : 'none' }} type="button" class="btn btn-primary">Change Information</button>

                            <button
                                onClick={
                                    () => { 
                                        this._handleSubmit ()}}
                                style={{ display: this.state.isChangeInformation === false ? 'none' : '' }} type="button" class="btn btn-primary">Update</button>

                                <button
                                onClick={
                                    () => {this.setState ({isChangeInformation: false})}}
                                style={{ display: this.state.isChangeInformation === false ? 'none' : '' }} type="button" class="btn btn-default">Close</button>
                        </div>
                        <div style = {{float: 'right'}}>
                            <button
                                onClick={
                                    () => { this._handleDeleteEvent(idShop)}}
                                style={{ display: checkDay === -1 ? 'none' : ''}} type="button" class="btn btn-danger">Delete this promotions</button>
                        </div>        
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

