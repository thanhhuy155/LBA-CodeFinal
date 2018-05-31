import React, { Component } from 'react';

export default class ProcessBar extends Component {

    _showProgress = (positionProgressBar) => {
        if (positionProgressBar === -1 || positionProgressBar === 0)
            return (
                <div class="progress">
                    <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                        <strong>Verification</strong>
                    </div>
                </div>
            )
        else if (positionProgressBar === 1) {
            return (
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                        <strong>Information</strong>
                    </div>
                </div>
            )
        }
        return (
            <div class="progress">
                <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%' }}>
                    <strong>Success</strong>
                </div>
            </div>
        )
    }
    render() {
        const { positionProgressBar } = this.props
        return (
            <div>
                {this._showProgress(positionProgressBar)}
            </div>
        )
    }
};
