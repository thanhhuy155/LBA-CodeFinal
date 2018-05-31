import React, { Component, Fragment } from 'react'

export default class DeletedImage extends Component {
    render() {
        const {_closeDetetedImage, imageForDeleting} = this.props
        return (
            <div class="col-xs-6 col-sm-2 col-ld-2 ">
                <div
                    style={{
                        backgroundImage: `url('${imageForDeleting}')`,
                        width: 60,
                        height: 60,
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        backgroundSize: 'contain',
                        backgroundPosition: '50%',
                        borderRadius: 10,
                        borderColor: 'red',
                        borderWidth:1,
                        opacity: '50%'
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
                        onClick = {()=> _closeDetetedImage (imageForDeleting)}
                        >
                         <strong> &times; </strong>
                    </button></div>
            </div>


        )
    }
}


