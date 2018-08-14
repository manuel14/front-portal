import React, { Component } from 'react';
import { getReceipt } from './action';
import { Box, Flex } from 'grid-styled';
import { connect } from 'react-router-redux'

class ReceiptDetail extends Component {

    componentDidMount() {
        this.props.onLoad(this.props.params.receiptId);
    }

    render() {
        const { receipt } = this.props;
        return (
            <div className="receipt">
                <Flex align="center">
                    <Box mt={'20px'} mx="auto">
                        <iframe height="512px" src={receipt.url}>

                        </iframe>
                    </Box>
                </Flex>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state.receiptDetail,
});

const mapDispatchToProps = dispatch => ({
    onLoad: id => dispatch(getReceipt(id)),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptDetail);
