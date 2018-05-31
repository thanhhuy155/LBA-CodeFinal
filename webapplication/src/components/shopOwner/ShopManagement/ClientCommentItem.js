import React, { Component } from 'react';

export default class ClientCommentItem extends Component {
    loadStar = (Rating_Store) => {
        var arrayStar =[]
        for (let i=0; i< Rating_Store; i++)
            arrayStar.push (<i class="fa fa-star" style = {{color:'orange'}}></i>)
        for (let i=0; i< 5-Rating_Store ;i++)
            arrayStar.push (<i class="fa fa-star"></i>)
        return arrayStar.map ((item,index) =>{
            return item
        })
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
    render() {
        const {messageItem , index} = this.props
        const {Customer_FirstName, Customer_LastName, Rating_Store, Comment, Time} = messageItem
        return (
            <li style = {{
                backgroundColor: index%2===0?'#E8F5E9':'#E0F2F1', 
                marginBottom :10, 
                padding:10,
                listStyleType: 'none'}}>
                <div>
                    <span><strong>{`${Customer_FirstName} ${Customer_LastName}`}</strong></span>
                </div>

                <div>
                    <p>
                        <span>
                            {this.loadStar (Rating_Store)}
                        </span> &nbsp;
                        <i>{Comment}</i>
                    </p>
                </div>
                <div>
                    <p style = {{color:'gray'}}>On: {this.formatDateTime (Time)}</p>
                </div>
            </li>
        )
    }
};
