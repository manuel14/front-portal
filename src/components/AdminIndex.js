import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Card, CardContainer, Image, Title } from './index';
import { Link } from 'react-router-dom'

class AdminIndex extends Component {
    render() {
        return (
            <div>
                <Flex align="center">
                    <Box width={1024} mx="auto">
                    <Title color={'black'} margin={"10px 0px"} block center>Bienvenido {this.props.username}</Title>
                        <CardContainer>
                            <Card color={'#f0f0f0'} center width={"200px"} height={"200px"}>
                                <Title color={'black'} center>Archivos</Title>
                                <Image 
                                margin={'0px auto 0px auto'} 
                                width={'100px'} 
                                height={'100px'} 
                                source={require('../assets/recibo.png')}>
                                </Image>
                                <Link to="/admin/recibos">
                                    <Button margin={'10px 0px 0px 0px'} 
                                        large
                                        primary>Ir
                                    </Button>
                                </Link>
                            </Card>
                            <Card color={'#f0f0f0'} center width={"200px"} height={"200px"}>
                                <Title color={'black'}>Notificaciones</Title>
                                <Image
                                margin={'0px auto 0px auto'}
                                width={'100px'}
                                height={'100px'} 
                                source={require('../assets/notification.png')}>
                                </Image>
                                <Link to="/admin/notificaciones">
                                    <Button 
                                        margin={'10px 0px 0px 0px'} 
                                        large 
                                        primary>Ir
                                    </Button>
                                </Link>
                            </Card>
                            <Card color={'#f0f0f0'} center width={"200px"} height={"200px"}>
                                <Title color={'black'} center>Eventos</Title>
                                <Image
                                margin={'0px auto 0px auto'}
                                width={'100px'}
                                height={'100px'} 
                                source={require('../assets/event.png')}>
                                </Image>
                                <Link to ="/admin/eventos">
                                    <Button 
                                        large
                                        margin={'10px 10px 0px 0px'} 
                                        primary>Ir
                                    </Button>
                                </Link>
                            </Card>
                        </CardContainer>
                    </Box>
                </Flex>
            </div>
        )
    }
}

export default AdminIndex;