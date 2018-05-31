import React, { Component, Fragment } from 'react';
import { checkLengthInput } from '../../../constraints/InputValidation'
import FormInputCTT from '../../../constructors/shopOwner/CreateStore/FormInputCTT'
import UploadImageCTT from '../../../constructors/shopOwner/CreateStore/UploadImageCTT'
export default class CreateStorePage extends Component {
    
    render() {
        return (
            <Fragment>
                <div class="container-fluid">
                    <legend class="text-center"
                        style={{ fontSize: 35 }}><strong>Create Your Shop</strong></legend>
                    <FormInputCTT />
                </div>
            </Fragment>
        )
    }
};
