import React, { Component } from 'react';
class AdminContainDashBoardList extends Component {
    render() {
        return (
            <div>
              {/*    */}
                 <div className="panel panel-default" style= {{border:'none'}}>
                    <div className="panel-body">
                {this.props.children}
                    </div>
                 </div> 
                 </div>
        );
    }
}

export default AdminContainDashBoardList;