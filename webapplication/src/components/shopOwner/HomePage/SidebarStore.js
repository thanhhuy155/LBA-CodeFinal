import React, { Component } from 'react';

export default class SidebarStore extends Component {
  render() {
    return (
      <div class="content-dir-item">
            <img
                style = {{float:'left',captionSide:'right'}} 
                src="http://trustworld.vn/uploads/images/xblue-exchange1.jpg.pagespeed.ic.meX5PegE4A.jpg"  alt="Image" style= {{width:'100%', height:150}}/>
            <p style={{wordWrap:'break-word'}}><strong>Cửa hàng áo quần blue</strong></p>
            <p style={{wordWrap:'break-word'}}>113 Thanh Khe, Da Nang</p>
      </div>
    )
  }
};
