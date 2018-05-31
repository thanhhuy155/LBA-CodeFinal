import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import wating from '../../images/wating.svg'
import background from '../../images/background.png'
export default class WaitingModal extends Component {
    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.isOpenWattingModal}>
                    <Modal.Body style = {{background:'#ffdfb0'}}>
                        <center>
                            <strong style={{ textAlign: 'center', fontSize: 20 }}>Loading.... </strong>
                        </center>
                        
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
