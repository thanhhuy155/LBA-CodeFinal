import React, { Component, Fragment } from 'react'

export default class LoadedImage extends Component {
    render() {
        const {_closeImage, file ,imagePreviewUrl} = this.props
        return (
            <div class="col-xs-6 col-sm-2 col-ld-2 ">
                <div
                    style={{
                        backgroundImage: `url('${imagePreviewUrl}')`,
                        width: 60,
                        height: 60,
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        backgroundSize: 'contain',
                        backgroundPosition: '50%',
                        borderRadius: 10
                    }}

                >
                    <button
                        style = {{
                            position: 'absolute',
                            right: -10,
                            borderRadius: '50%',
                            borderColor: 'white',
                            backgroundColor: 'black',
                            top: -10,
                            color: 'white'
                        }}
                        type="button"
                        class="btn btn-close btn-xs"
                        onClick = {()=> _closeImage (imagePreviewUrl)}
                        >
                         <strong> &times; </strong>
                    </button></div>
            </div>


        )
    }
}

