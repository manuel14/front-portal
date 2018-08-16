import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Card, CardContainer, Center, NavLink, Text } from './index';
import { Link } from 'react-router-dom'
import FileIcon from './icons/FileIcon';

class AdminIndex extends Component {
    render() {
        const fileIcon = <FileIcon size={24} color="#ffffff" />;
        console.log(this.props);
        return (
            <div>
                <Flex align="center">
                    <Box width={1024} mx="auto">
                    <Text margin={"10px 0px"} block center>Bienvenido {this.props.username}</Text>
                        <CardContainer>
                            <Card width={"200px"} height={"200px"}>
                                <h1>Recibos</h1>
                                <Button onClick={(e) => {
                                    e.preventDefault()
                                    this.props.history.push("/admin/recibos")}
                            } primary>Ir</Button>
                            </Card>
                            <Card width={"200px"} height={"200px"}>
                                <h1>Notificaciones</h1>
                    <Button onClick={(e) => {
                                    e.preventDefault()
                                    this.props.history.push("/admin/notificaciones")}
                            } primary>Ir</Button>
                            </Card>
                            <Card width={"200px"} height={"200px"}>
                                <h1>Eventos</h1>
                    <Button onClick={(e) => {
                                    e.preventDefault()
                                    this.props.history.push("/admin/eventos")}
                            } primary>Ir</Button>
                            </Card>
                        </CardContainer>
                    </Box>
                </Flex>
            </div>
        )
    }
}

export default AdminIndex;