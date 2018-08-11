import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';

class Receipt extends Component {

    render() {
        console.log(this.props.items);
        const match = this.props.match
        console.log(match.params);
        const receiptId = match.params.receiptId;
        const url = this.props.url

        //const i = this.props.items.findIndex((receipt) => receipt.id === receiptId);
        //const receipt = this.props.receipt[i];


        return (
            <div className="receipt">
                <Flex align="center">
                    <Box mt={'20px'} mx="auto">
                        <iframe height="512px" src={url}>

                        </iframe>
                    </Box>
                </Flex>
            </div>
        )
    }
}
export default Receipt;
