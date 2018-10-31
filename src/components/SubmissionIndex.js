import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Card, CardContainer, Image, Title } from './index';
import { Link } from 'react-router-dom'

class SubmissionIndex extends Component {
    render() {
        return (
            <div>
                <Flex align="center">
                    <Box width={1024} mx="auto">
                    <Title color={'black'} margin={"10px 0px"} block center>
                        Solicitudes
                    </Title>
                        <CardContainer>
                            <Card center width={"200px"} height={"200px"}>
                                <Title small color={'black'} center>Adelanto de sueldo</Title>
                                <Image 
                                margin={'0px auto 0px auto'} 
                                width={'100px'} 
                                height={'100px'} 
                                source={require('../assets/money.png')}>
                                </Image>
                                <Link to="/solicitudes/adelanto">
                                    <Button margin={'10px 0px 0px 0px'} 
                                        large
                                        primary>Ir
                                    </Button>
                                </Link>
                            </Card>
                            <Card center width={"200px"} height={"200px"}>
                                <Title small color={'black'} center>Ausencia</Title>
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
                            <Card center width={"200px"} height={"200px"}>
                                <Title small color={'black'} center>Vacaciones</Title>
                                <Image
                                margin={'0px auto 0px auto'}
                                width={'100px'}
                                height={'100px'} 
                                source={require('../assets/traveler.png')}>
                                </Image>
                                <Link to ="/admin/eventos">
                                    <Button 
                                        margin={'10px 0px 0px 0px'} 
                                        large  
                                        primary>Ir
                                    </Button>
                                </Link>
                            </Card>
                            <Card center width={"200px"} height={"200px"}>
                                <Title small color={'black'} center>Salida</Title>
                                <Image
                                margin={'0px auto 0px auto'}
                                width={'100px'}
                                height={'100px'} 
                                source={require('../assets/traveler.png')}>
                                </Image>
                                <Link to ="/admin/eventos">
                                    <Button 
                                        margin={'10px 0px 0px 0px'} 
                                        large  
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

export default SubmissionIndex;