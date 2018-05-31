import React, { Component, Fragment } from 'react';
import ClientCommentItem from './ClientCommentItem'
export default class ClientCommentList extends Component {
    render() {
        const {messageItem , index} = this.props
        return (
            <Fragment>   
                <div class="row" style = {{
                        backgroundColor: index%2===0?'#E8F5E9':'#E0F2F1', 
                        marginBottom :10, 
                        padding:10}}>
                    <span class="label label-primary">{messageItem.date}</span>
                    {messageItem.comments.map ((item, index) =>{
                        return (
                            <ClientCommentItem item ={item}/>
                        )
                    })}
                </div>
                
            </Fragment>
        )
    }
};
