import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';

class Receipt extends Component {

    render() {
        console.log(this.props.params);
        const { receiptId } = this.props.params;

        const i = this.props.items.findIndex((receipt) => receipt.id === receiptId);
        const receipt = this.props.receipt[i];


        return (
            <div className="receipt">
                <Flex align="center">
                    <Box mx="auto">
                        <iframe src="http://www.pdf995.com/samples/pdf.pdf">

                        </iframe>
                    </Box>
                </Flex>
            </div>
        )
    }
}
export default Receipt;
