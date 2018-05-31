import React, { Component } from 'react';
import LoadedImage from './LoadedImage'
export default class PictureShop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { imageArray , avatar} = this.props;
        return (
            <div>
                <div className="imgPreview">
                    <img src={avatar} class="img-responsive" alt="Image" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <div class="row">

                        {
                            imageArray.length ===0?null:imageArray.map((item, index) => {
                                return( 
                                    <img src={item} class="img-responsive" alt="Image" style = {{width: 40, height: 40, float:'left',marginRight:3}}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
};

