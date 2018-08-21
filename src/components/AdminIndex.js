import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Card, CardContainer, Image, Title } from './index';
import FileIcon from './icons/FileIcon';

class AdminIndex extends Component {
    render() {
        const fileIcon = <FileIcon size={24} color="#ffffff" />;
        console.log(this.props);
        return (
            <div>
                <Flex align="center">
                    <Box width={1024} mx="auto">
                    <Title margin={"10px 0px"} block center>Bienvenido {this.props.username}</Title>
                        <CardContainer>
                            <Card center width={"200px"} height={"200px"}>
                                <Title center>Recibos</Title>
                                <Image 
                                margin={'0px auto 0px auto'} 
                                width={'100px'} 
                                height={'100px'} 
                                source={require('../assets/recibo.png')}>
                                </Image>
                                <Button margin={'10px 0px 0px 0px'} 
                                    large onClick={(e) => {
                                        e.preventDefault()
                                        this.props.history.push("/admin/recibos")}
                                    } primary>Ir</Button>
                            </Card>
                            <Card center width={"200px"} height={"200px"}>
                                <Title>Notificaciones</Title>
                                <Image
                                margin={'0px auto 0px auto'}
                                width={'100px'}
                                height={'100px'} 
                                source={require('../assets/notification.png')}>
                                </Image>
                                <Button 
                                    margin={'10px 0px 0px 0px'} 
                                    large onClick={(e) => {
                                    e.preventDefault()
                                    this.props.history.push("/admin/notificaciones")}
                            } primary>Ir</Button>
                            </Card>
                            <Card center width={"200px"} height={"200px"}>
                                <Title center>Eventos</Title>
                                <Image
                                margin={'0px auto 0px auto'}
                                width={'100px'}
                                height={'100px'} 
                                source={require('../assets/event.png')}>
                                </Image>
                                <Button 
                                    margin={'10px 0px 0px 0px'} 
                                    large onClick={(e) => {
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