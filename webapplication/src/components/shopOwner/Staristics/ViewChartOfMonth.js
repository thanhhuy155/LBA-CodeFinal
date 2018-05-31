import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import {Modal} from 'react-bootstrap'
export default class ViewChartOfMonth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataChartViews: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [80, 108, 180, 190, 201, 203, 175, 201, 208, 220, 203, 204],
                ]
            },
            textMonthDate : '2018-04',
            isLoading: false,
        }
    }

    componentWillMount (){
        const {dataFromGettingViewChartOfMonth} = this.props
        var dateArray = Object.keys(dataFromGettingViewChartOfMonth)
        var resultArray = Object.values (dataFromGettingViewChartOfMonth)
        this.setState ({
            dataChartViews : {
                labels : dateArray,
                series: [resultArray]
            }
        })
    }
    
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var arrayValue = value.split ('-')
        var year =  arrayValue[0]
        var month = arrayValue[1]
        this.setState ({
            isLoading:true
        }, async ()=>{
            await this.props.onGetViewChartOfMonth (this.props.idShop, year, month)
            const {dataFromGettingViewChartOfMonth} = this.props
            var dateArray = Object.keys(dataFromGettingViewChartOfMonth)
            var resultArray = Object.values (dataFromGettingViewChartOfMonth)
            this.setState ({
                dataChartViews : {
                    labels : dateArray,
                    series: [resultArray],
                },
                [name]: value,
                isLoading: false
            })
        })
        
    }

    render() {
        return (
            <div class="panel panel-warning">
                <div class="panel-heading clearfix">
                    <strong>Views Chart on April, 2018</strong>
                        <div class="pull-right">
                        <form action="" method="POST" role="form" class="form-inline" style={Styles.form_sort}>
                            <label style={{ marginRight: 10 }}>Sort for: </label>
                            <input
                            class="form-control"
                            onChange={this.handleChange}
                            name='textMonthDate'
                            value={this.state.textMonthDate}
                            id="month" type="month"/>
                        </form>
                    </div>
                </div>
                <div class="panel-body">
                    <p style = {{display:this.state.isLoading?'':'none'}}>Loading...</p> 
                    <ChartistGraph style = {{visibility:this.state.isLoading?'hidden':'visible'}} data={this.state.dataChartViews} type={'Line'} />
                </div>
            </div>
        )
    }
};

const Styles = {
    form_sort: {
        right: 0
    }
}