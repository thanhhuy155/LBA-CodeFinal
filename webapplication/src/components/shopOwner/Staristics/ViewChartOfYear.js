import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

var options = {
    ticks: [1, 10, 20, 30]
  };

export default class ViewChartOfYear extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataChartViews: {
                labels: [],
                series: [
                    []
                ]
            },
            yearsArray: [2018,],
            txtSort: 2018,
        }
    }

    _setYearsArray = (createdDate) =>{
        var _createdDate = new Date (createdDate)
        var today = new Date ()
        var monthOfCreatedDate = _createdDate.getFullYear ()
        var MonthOfToday = today.getFullYear ()
        var arrayYear = []
        for (let i= monthOfCreatedDate; i <= MonthOfToday ; i++){
            arrayYear.unshift (i)
        }
        return arrayYear
    }

    componentWillMount (){
        const {dataFromGettingViewChartOfYear, createdDateOfShop} = this.props
        var monthArray = Object.keys(dataFromGettingViewChartOfYear)
        var resultArray = Object.values (dataFromGettingViewChartOfYear)
        this.setState ({
            dataChartViews : {
                labels : monthArray,
                series: [resultArray]
            },
            yearsArray: this._setYearsArray (createdDateOfShop)
        })
    }


    handleChange = async (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        await this.props.onGetViewChartOfYear (this.props.idShop, value)
        const {dataFromGettingViewChartOfYear, createdDateOfShop} = this.props
        var monthArray = Object.keys(dataFromGettingViewChartOfYear)
        var resultArray = Object.values (dataFromGettingViewChartOfYear)
        this.setState ({
            dataChartViews : {
                labels : monthArray,
                series: [resultArray],
                [name]:value
            },
            yearsArray: this._setYearsArray (createdDateOfShop)
        })
    }
    
    render() {
        const {dataFromGettingViewChartOfYear} = this.props
        return (
            <div class="panel panel-success">
                <div class="panel-heading clearfix">
                    <strong>{`Views Chart in ${this.state.txtSort}`} </strong>
                        <div class="pull-right">
                        <form action="" method="POST" role="form" class="form-inline" style={Styles.form_sort}>
                            <label style={{ marginRight: 10 }}>Sort for: </label>
                            <select 
                            onChange={this.handleChange}
                            name="txtSort" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                {this.state.yearsArray.map ((item, index) =>{
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })}
                            </select>
                        </form>
                    </div>
                </div>
                <div class="panel-body">
                    <ChartistGraph data={this.state.dataChartViews} options ={options} type={'Line'} />
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