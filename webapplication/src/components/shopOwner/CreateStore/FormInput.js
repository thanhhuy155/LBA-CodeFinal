import React, { Component, Fragment } from 'react';
import { checkLengthInput, checkOnlyNumber, checkTimeFormat, checkOnlyLength } from '../../../constraints/InputValidation'
import LoadedImage from '../../../components/shopOwner/ShopManagement/LoadedImage'
//import InputLocationCTT from '../../../constructors/InputLocationCTT'
import {withRouter} from 'react-router-dom'
import InputLocation from './InputLocation'
class FormInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listDistrict: [
                'Hải Châu',
                'Thanh Khê',
                'Cẩm Lệ',
                'Liên Chiểu',
                'Ngũ Hành Sơn',
                'Sơn Trà'
            ],
            listWard : [
                ['Bình Hiên','Bình Thuận','Hải Châu I','Hải Châu II','Hòa Cường Bắc','Hòa Cường Nam','Hòa Thuận Đông','Hòa Thuận Tây','Nam Dương', 'Phước Ninh','Thạch Thang','Thanh Bình','Thuận Phước'],
                ['An Khê','Chính Gián','Hòa Khê','Tam Thuận','Tân Chính','Thạc Gián','Thanh Khê Đông','Thanh Khê Tây','Vĩnh Trung','Xuân Hà'],
                ['Hòa An','Hòa Phát'],
                ['Hòa Hiệp Bắc','Hòa Hiệp Nam','Hòa Khánh Bắc','Hòa Khánh Nam','Hòa Minh'],
                ['Hòa Quý','Hòa Hải','Khuê Mỹ','Mỹ An'],
                ['An Hải Bắc','An Hải Đông','An Hải Tây','Mân Thái','Nại Hiên Đông','Phước Mỹ','Thọ Quang'],
            ],
            txtNameOfShop: '',
            txtTypeOfShop: 1,
            txtPhoneNumber: '',
            txtOpenTime: '',
            txtCloseTime: '',
            txtStreet: '',
            txtDistrict: 'Hải Châu',
            txtMinPrice: '',
            txtMaxPrice: '',
            txtDescription: '',
            txtWard : '0',
            ckMon: true,
            ckTue: true,
            ckWed: true,
            ckThu: true,
            ckFri: true,
            ckSat: true,
            ckSun: true,
            txtlat:'',
            txtlng: '',
            formError: {
                txtWard: '',
                txtNameOfShop: '',
                txtTypeOfShop: '',
                txtPhoneNumber: '',
                txtOpenTime: '',
                txtCloseTime: '',
                txtMinPrice: '',
                txtMaxPrice: '',
                txtDescription: '',
                txtOpenDate: '',
                imageArray: '',
                avartarImage: '',
                txtStreet: ''
            },
            imageArray :[],
            avartarImage: null,
        }
    }

    handleShopPosition = (address,lag, lng) =>{
        this.setState ({
            txtStreet: address,
            txtlat: lag,
            txtlng: lng
        })
    }

    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    _checkImage = (imagePreviewUrl) => {
        const { imageArray } = this.state
        var check = false
        for (let i = 0; i < imageArray.length; i++) {
            if (imageArray[i].imagePreviewUrl === imagePreviewUrl) {
                check = true
                break
            }
            else {
                check = false
            }
        }
        return check
    }

    _handleImageChange = (e) => {
        e.preventDefault();
        try
        {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                imageArray: !this._checkImage(reader.result) ? this.state.imageArray.concat({ file: file, imagePreviewUrl: reader.result }) : this.state.imageArray
                // file: file,
                // imagePreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
        } catch (e) {console.log (e)}
    }

    _handleAvartarImageChange = (e) => {
        e.preventDefault();
        try
        {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                avartarImage: { file: file, imagePreviewUrl: reader.result }
                // file: file,
                // imagePreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
        } catch (e) {console.log (e)}
    }

    _closeImage = (imagePreviewUrl) => {
        const { imageArray } = this.state
        this.setState({
            imageArray: imageArray.filter((item) => item.imagePreviewUrl !== imagePreviewUrl)
        })
    }

    _closeAvartarImage = (imagePreviewUrl) => {
        const { imageArray } = this.state
        this.setState({
            avartarImage: null
        })
    }

    _handleSubmit = (e) => {
        const {txtWard,txtNameOfShop, txtTypeOfShop, txtPhoneNumber, txtOpenTime, txtCloseTime, txtStreet,
            txtDistrict, txtMinPrice, txtMaxPrice, txtDescription, ckMon, ckTue, ckWed, ckThu, ckFri, ckSat, ckSun, imageArray, avartarImage, txtlat, txtlng
        } = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtOpenDate: ckMon === ckTue === ckWed === ckThu === ckFri === ckSat === ckSun === false && ckMon === false? 'Choose at least a date' : '',
                    txtNameOfShop: checkOnlyLength(txtNameOfShop, 1),
                    txtPhoneNumber: checkOnlyNumber(txtPhoneNumber, null, null),
                    txtOpenTime: checkTimeFormat(txtOpenTime, 1),
                    txtCloseTime: checkTimeFormat(txtCloseTime, 1),
                    txtStreet: txtStreet.trim().length ===0?'Position is not exist or you have not chosen a position yet':'',
                    txtWard : checkLengthInput (txtWard ,1),
                    txtDistrict: checkOnlyLength(txtDistrict, 1),
                    txtMinPrice: checkOnlyNumber(Number (txtMinPrice), 0, 1000000000),
                    txtMaxPrice: checkOnlyNumber(Number (txtMaxPrice), Number (this.state.txtMinPrice), 1000000000),
                    txtDescription: checkOnlyLength(txtDescription, 8),
                    avartarImage: avartarImage?'':'You need to choose a picture'
                }
        },
            async () => {
                var formError = Object.values(this.state.formError)
                let isOkay = false
                for (let i = 0; i < formError.length; i++) {
                    if (formError[i] === '')
                        isOkay = true
                    else {
                        isOkay = false
                        break
                    }
                }
                if (isOkay) {
                    var sendImage = imageArray
                    sendImage.unshift (avartarImage)
                    this.props.onSwitchWaitingModal();
                    await this.props.onCreateStore(txtNameOfShop,txtDescription,txtDistrict,txtWard,txtStreet,txtPhoneNumber,
                        Number(txtMinPrice),Number (txtMaxPrice),txtTypeOfShop, txtOpenTime,
                        txtCloseTime,Number (ckMon),Number (ckTue),Number (ckWed),Number (ckThu),Number (ckFri),Number (ckSat),Number(ckSun), sendImage,txtlat, txtlng, ()=>{

                        })
                        if (this.props.dataAfterCreateStore)
                        {   
                            if (this.props.dataAfterCreateStore.message.success)
                            {
                                this.props.history.push ('/s/StoreManagementPage')
                            }   
                    }
                        
                    this.props.onSwitchWaitingModal();
                }
            }
        )
    }

    _loadWard = (District) =>{
        var position= 0;
        switch (District) {
            case 'Hải Châu':
                position =0;
                break;
            case 'Thanh Khê':
                position =1;
                break;
            case 'Cẩm Lệ':
                position =2;
                break;
            case 'Liên Chiểu':
                position =3;
                break;
            case 'Ngũ Hành Sơn':
                position =4;
                break;
            case 'Sơn Trà':
                position =5;
                break;
        return this.state.listDistrict[position].map ((item,index)=>{
            alert (item)
            return <option selected={index===1?true:false} value={item}>{item}</option>
        })
        }
    } 

    render() {
        const { imageArray, avartarImage } = this.state;
        return (
            <Fragment>
                <form onSubmit={this._handleSubmit}>
                    <div class="row">
                        
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="">Name: </label>
                                <input
                                    onBlur ={()=> {this.setState ({
                                        formError: {
                                            ...this.state.formError,
                                            txtNameOfShop: checkOnlyLength(this.state.txtNameOfShop, 1)
                                        }
                                    })}}
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtNameOfShop'
                                    value={this.state.txtNameOfShop}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtNameOfShop}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Shop Type: </label>
                                <select onChange={this.handleChange} name={'txtTypeOfShop'} id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                    <option selected={true} value={1}>Food and Drink</option>
                                    <option value= {2}>Fashion</option>
                                    <option value={3}>Entertainment Place</option>
                                    <option value={4}>Other</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="">Phone Number: </label>
                                <input
                                    onBlur ={()=> {this.setState ({
                                        formError: {
                                            ...this.state.formError,
                                            txtPhoneNumber: checkOnlyNumber(this.state.txtPhoneNumber, null, null),
                                        }
                                    })}}
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtPhoneNumber'
                                    value={this.state.txtPhoneNumber}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtPhoneNumber}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Open Time: </label>
                                <input
                                    onBlur ={()=> {this.setState ({
                                        formError: {
                                            ...this.state.formError,
                                            txtOpenTime: checkTimeFormat(this.state.txtOpenTime, 1),
                                        }
                                    })}} 
                                    type="time"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtOpenTime'
                                    value={this.state.txtOpenTime}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtOpenTime}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Close Time: </label>
                                <input
                                    onBlur ={()=> {this.setState ({
                                        formError: {
                                            ...this.state.formError,
                                        txtCloseTime: checkTimeFormat(this.state.txtCloseTime, 1),
                                        }
                                    })}}
                                    type="time"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtCloseTime'
                                    value={this.state.txtCloseTime}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtCloseTime}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Open Day: </label>
                                <br></br>
                                <label class="form-check-label">Mon: </label>&nbsp;
                                <input name={'ckMon'} onChange={this.handleChange} checked={this.state.ckMon} type="checkbox" class="form-check-input" id="exampleCheck1" />|&nbsp;
                                <label class="form-check-label">Tue: </label>&nbsp;
                                <input name={'ckTue'} onChange={this.handleChange} checked={this.state.ckTue} type="checkbox" class="form-check-input" id="exampleCheck1" />|&nbsp;
                                <label class="form-check-label">Wed: </label>&nbsp;
                                <input name={'ckWed'} onChange={this.handleChange} checked={this.state.ckWed} type="checkbox" class="form-check-input" id="exampleCheck1" />|&nbsp;
                                <label class="form-check-label">Thu: </label>&nbsp;
                                <input name={'ckThu'} onChange={this.handleChange} checked={this.state.ckThu} type="checkbox" class="form-check-input" id="exampleCheck1" />|&nbsp;
                                <label class="for    position =0;
                                break;m-check-label">Fri: </label>&nbsp;
                                <input name={'ckFri'} onChange={this.handleChange} checked={this.state.ckFri} type="checkbox" class="form-check-input" id="exampleCheck1" />|&nbsp;
                                <label class="form-check-label">Sat: </label>&nbsp;
                                <input name={'ckSat'} onChange={this.handleChange} checked={this.state.ckSat} type="checkbox" class="form-check-input" id="exampleCheck1" />|&nbsp;
                                <label class="form-check-label">Sun: </label>&nbsp;
                                <input name={'ckSun'} onChange={this.handleChange} checked={this.state.ckSun} type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <p class={'text-danger'}>{this.state.formError.txtOpenDate}</p>
                            </div>
                            
                            <div class="form-group">
                                <label for="">Address: </label>
                                <InputLocation handleShopPosition = {this.handleShopPosition}/>
                                <p class={'text-danger'}>{this.state.formError.txtStreet}</p>
                            </div>

                            <div class="form-group" style = {{display:'none'}}>
                                <label for="">Street: </label>
                                <input
                                    onBlur ={()=> {this.setState ({
                                        formError: {
                                            ...this.state.formError,
                                        txtStreet: checkOnlyLength(this.state.txtStreet, 1),
                                        }
                                    })}}
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtStreet'
                                    value={this.state.txtStreet}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtStreet}</p>
                            </div>

                            <div class="form-group" style = {{display: 'none'}}>
                                <label for="">District: </label>
                                <select onChange={this.handleChange} name={'txtDistrict'} id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                    {this.state.listDistrict.map ((item, index)=>{
                                        return <option selected={index===0?true:false} value={item}>{item}</option>
                                    })}
                                </select>
                                
                                <p class={'text-danger'}>{this.state.formError.txtDistrict}</p>
                            </div>

                            <div class="form-group" style = {{display:'none'}}>
                                <label for="">Ward: </label>
                                {/* <select onChange={this.handleChange} name={'txtDistrict'} id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                {
                                   this._loadWard (this.state.txtDistrict)
                                }
                                </select> */}
                                 <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtWard'
                                    value={this.state.txtWard}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtWard}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Min Price (VND): </label>
                                <input
                                    onBlur ={()=> {this.setState ({
                                        formError: {
                                            ...this.state.formError,
                                        txtMinPrice: checkOnlyNumber(this.state.txtMinPrice, 0, 1000000000),
                                        txtMaxPrice: checkOnlyNumber(this.state.txtMaxPrice, this.state.txtMinPrice, 1000000000),
                                        }
                                    })}}
                                    type="number"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtMinPrice'
                                    value={this.state.txtMinPrice}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtMinPrice}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Max Price (VND): </label>
                                <input
                                    onBlur ={()=> {this.setState ({
                                        formError: {
                                            ...this.state.formError,
                                        txtMinPrice: checkOnlyNumber(this.state.txtMinPrice, 0, 1000000000),
                                        txtMaxPrice: checkOnlyNumber(this.state.txtMaxPrice, this.state.txtMinPrice, 1000000000),
                                        }
                                    })}}
                                    type="number"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtMaxPrice'
                                    value={this.state.txtMaxPrice}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtMaxPrice}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Description: </label>
                                <textarea
                                    maxLength= {499}
                                    onBlur ={()=> {this.setState ({
                                        formError: {
                                            ...this.state.formError,
                                        txtDescription: checkOnlyLength(this.state.txtDescription, 8),
                                        }
                                    })}}
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtDescription'
                                    value={this.state.txtDescription}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtDescription}</p>
                            </div>
                        </div>
                        
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for=""><strong>Avatar Picture: </strong></label>
                                <div class="row">

                                    <div
                                        class="col-xs-6 col-sm-2 col-ld-2"
                                        style={{
                                            textAlign: 'center',
                                            display: avartarImage? 'none' : ''
                                        }}
                                    >
                                        <div class="input-file-container">
                                            <input
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                onChange={(e) => this._handleAvartarImageChange(e)}
                                                class="input-file" id="avartar" type="file" />

                                            <label
                                                style={{
                                                    display: 'block',
                                                    background: 'red',
                                                    color: '#fff',
                                                    fontSize: 45,
                                                    cursor: 'pointer',
                                                    width: 60,
                                                    height: 60,

                                                }}
                                                tabindex="0"
                                                for="avartar"
                                                class="input-file-trigger">+</label>
                                        </div>
                                    </div>

                                    {
                                        avartarImage?(
                                                <LoadedImage
                                                    _closeImage={this._closeAvartarImage}
                                                    file={avartarImage.file}
                                                    imagePreviewUrl={avartarImage.imagePreviewUrl} />
                                            ):null

                                    }
                                    <p class={'text-danger'}>{this.state.formError.avartarImage}</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for=""><strong>Images: </strong></label>
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
                                        imageArray.map((item, index) => {
                                            return (
                                                <LoadedImage
                                                    _closeImage={this._closeImage}
                                                    file={item.file}
                                                    imagePreviewUrl={item.imagePreviewUrl} />
                                            )
                                        })
                                    }
                                    <p class={'text-danger'}>{this.state.formError.imageArray}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
                                
                <button onClick = {()=> this._handleSubmit ()} class="btn btn-primary">Create</button>
            </Fragment>
        )
    }
};

export default withRouter (FormInput)