import React, { Component } from 'react';
import { getReceipt } from './action';
import { Box, Flex } from 'grid-styled';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

class ReceiptDetail extends Component {

    componentDidMount() {
        console.log("llego a detail");
        console.log(this.props);
        this.props.onLoad(this.props.match.params.receiptId);
    }

    render() {
        const { receipt } = this.props;
        console.log(receipt);
        return (
            <div className="receipt">
                <Flex align="center">
                    <Box mt={'20px'} mx="auto">
                        <iframe height="512px" src={receipt.archivo}>

                        </iframe>
                    </Box>
                </Flex>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state.receiptDetailReducer,
});

const mapDispatchToProps = dispatch => ({
    onLoad: id => dispatch(getReceipt(id)),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptDetail);
