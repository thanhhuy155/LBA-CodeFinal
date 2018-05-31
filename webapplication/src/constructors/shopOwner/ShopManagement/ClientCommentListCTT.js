import React, { Component, Fragment } from 'react';
import ClientCommentItem from '../../../components/shopOwner/ShopManagement/ClientCommentItem'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller';
import {actHandleGetClientComment} from '../../../actions/ClientCommentAction'
import {actResetReduxForRaitingCustomer} from '../../../actions/ResetReduxAction'
import Waiting from '../../../components/Waiting'
class ClientCommentListCTT extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoadmore: true,
            page: 1
        }
    }

    componentWillMount () {
        this.props.onGetClientCommentList (this.props.dataShop.data.store_Details.Store_ID, 1)
    }

    componentWillReceiveProps (nextProps) {
        const {dataMessage, isStopLoadMore} = nextProps
        this.setState ({
            data: dataMessage,
            isLoadmore : isStopLoadMore
        })

    }

    loadItems  (page) {
        this.props.onGetClientCommentList (this.props.dataShop.data.store_Details.Store_ID, page)
    }
    
    render() {
        const {data} = this.state
        if (this.props.dataMessage)
        {
            if (data.length !==0)
            return (
                <Fragment>
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.loadItems.bind (this)}
                        hasMore={this.state.isLoadmore}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        {data.map((item, index) => {
                            return (
                                <ClientCommentItem messageItem={item} index={index} />
                            )
                        })}
                    </InfiniteScroll>
                </Fragment>
            )
             else return (
            
                <div class="alert alert-danger">
                    <strong>You have no any message from clients</strong>
                </div>
            )
        }
        else{
            return (<Waiting/>)
        }
        
    }

    componentWillUnmount () {
        this.props.onResetRatingCustomer()
    }
};

const mapStyleToProps = (state) => {
    return {
        dataMessage: state.handleGetClientComment,
        dataShop : state.handleGetShopDetail,
        isStopLoadMore: state.handleStopLoadMore
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetClientCommentList: async (Store_ID, PageNumber) =>{
            await dispatch (actHandleGetClientComment (Store_ID, PageNumber))
        },
        onResetRatingCustomer : () =>{
            dispatch (actResetReduxForRaitingCustomer ())
        }
    }
}

export default connect(mapStyleToProps, mapDispatchToProps) (ClientCommentListCTT)
