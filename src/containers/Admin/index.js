import React, { Component } from 'react';
import { AdminRecibo } from '../../components/index';
import { Box, Flex } from 'grid-styled';

class Admin extends Component {

    render() {
        return (
            <div className="admin">
                <Box mx="auto">
                    <AdminRecibo></AdminRecibo>
                </Box>
            </div>
        )
    }
}

export default Admin;