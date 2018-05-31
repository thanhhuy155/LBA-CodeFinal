import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
export default class ChartView extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
            <div class="panel panel-success">
                <div class="panel-heading">
                    Views Chart in 2018
                        <div class="pull-right">
                        <form action="" method="POST" role="form" class="form-inline" style={Styles.form_sort}>
                            <label style={{ marginRight: 10 }}>Sort for: </label>
                            <select name="" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                <option value="">This Year</option>
                                <option value="">Week</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div class="panel-body">
                    <ChartistGraph data={this.state.dataChartViews} type={'Line'} />
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