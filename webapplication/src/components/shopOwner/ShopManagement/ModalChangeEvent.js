import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
export default class componentName extends Component {
    constructor (props){
        super (props)
        this.state = {

        }
    }
    render() {
        return (
            <Modal.Body>
                <form onSubmit={this._handleSubmit}>

                    <div class="form-group">
                        <label for="">Event Title:</label>
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

                    <div class="form-group">
                        <label for="exampleFormControlFile1">Choose Images</label>
                        <input
                            accept="image/*"
                            onChange={(e) => this._handleImageChange(e)}
                            type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </form>

                <div class="row">

                    {
                        this.state.imageArray.map((item, index) => {
                            return <LoadedImage
                                _closeImage={this._closeImage}
                                file={item.file}
                                imagePreviewUrl={item.imagePreviewUrl} />
                        })
                    }
                </div>
            </Modal.Body>
        )
    }
}
