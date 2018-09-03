import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import {Button, Form, InputText, Select} from '.';

class AdminNotifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(selected){
        this.setState({
            selectedOption: selected
        })
    }

    render() {
        return (
            <div>
                <Flex align="center">
                    <Box mx="auto" width={512}>
                        <h1>Notificaciones</h1>
                        <Form id="notifs">
                            <Select options={this.props.empleados} value={this.state.selectedOption} onChange={this.handleChange} placeholder="Seleccione destinatario">

                            </Select>
                            <textarea></textarea>
                        </Form>
                    </Box>
                </Flex>


            </div>
        )
    }
}

export default AdminNotifications;