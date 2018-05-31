import React, { Component, Fragment } from 'react';
import ChartistGraph from 'react-chartist';

var simpleLineChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
    ]
}
export default class LikeStatistic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataChartLikes: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [15, 18, 20, 28, 35, 31, 20, 36, 20, 23, 23, 26],
                ]
            },

            dataChartViews: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [80, 108, 180, 190, 201, 203, 175, 201, 208, 220, 203, 204],
                ]
            },
        }
    }

    render() {
        return (
            <Fragment>

                <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-3" >
                        <div class="panel panel-default" style= {{backgroundColor:'#FFEBEE'}}>
                            <div class="panel-body">
                                <h3><center><span class="glyphicon glyphicon-eye-open" aria-hidden="true"><strong>1500 Views</strong></span></center></h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3" >
                        <div class="panel panel-default" style= {{backgroundColor:'#F3E5F5'}}>
                            <div class="panel-body">
                                
                                <h3><center><span class="glyphicon glyphicon-star" aria-hidden="true"><strong>3.9 Stars</strong></span></center></h3>
            
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3" >
                        <div class="panel panel-default" style= {{backgroundColor:'#EDE7F6'}}>
                            <div class="panel-body">
                                <h3><center><span class="glyphicon glyphicon-user" aria-hidden="true"><strong>6.8 Views/Day</strong></span></center></h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3" >
                        <div class="panel panel-default">
                            <div class="panel-body">
                                3 Users/Days
                            </div>
                        </div>
                    </div>

                        
                    </div>

                <div class="panel panel-warning">
                    <div class="panel-heading">
                        Likes Chart in 2018
                            <div class="pull-right">
                            <form class="form-inline" style={Styles.form_sort}>
                                <label style={{ marginRight: 10 }}>Sort for: </label>
                                <select name="" id="input${1/(\w+)/\u\1/g}" class="form-control clearfix" required="required">
                                    <option value="">2018</option>
                                    <option value="">2017</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div class="panel-body">
                        <ChartistGraph data={this.state.dataChartLikes} type={'Line'} />
                    </div>
                </div>




            </Fragment>
        )
    }
};
const Styles = {
    form_sort: {
        right: 0
    }
}