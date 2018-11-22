import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Card, CardContainer, Center,Image, Right, Title } from './index';
import { Link } from 'react-router-dom'

class SubmissionIndex extends Component {
    render() {
        return (
            <div>
                <Flex align="center">
                    <Box width={1024} mx="auto">
                        <Box mb={5} mt={3}>
                        <Center>
                            <Title 
                                display={'inline-block'} 
                                color={'black'} 
                                center
                                >Solicitudes
                            </Title>
                        </Center>
                        <Right>
                            <Link to="/solicitudes/mis">
                                <Button 
                                    primary>
                                    Mis solicitudes
                                </Button>
                            </Link>
                        </Right>
                        </Box>
                        <CardContainer>
                            <Card color={'#f0f0f0'} center width={"200px"} height={"200px"}>
                                <Title margin={'0px 0px 10px 0px'} 
                                    small 
                                    color={'black'} 
                                    center
                                    >Adelanto
                                </Title>
                                <Image 
                                    margin={'0px auto 0px auto'} 
                                    width={'100px'} 
                                    height={'100px'} 
                                    source={require('../assets/money.png')}>
                                </Image>
                                <Link to="/solicitudes/adelanto">
                                    <Button 
                                        margin={'10px 0px 0px 0px'} 
                                        large
                                        primary>Nueva
                                    </Button>
                                </Link>
                            </Card>
                            <Card color={'#f0f0f0'} center width={"200px"} height={"200px"}>
                                <Title 
                                    margin={'0px 0px 10px 0px'} 
                                    small 
                                    color={'black'} 
                                    center>
                                    Vacaciones
                                </Title>
                                <Image
                                    margin={'0px auto 0px auto'}
                                    width={'100px'}
                                    height={'100px'} 
                                    source={require('../assets/traveler.png')}>
                                </Image>
                                <Link to="/solicitudes/vacaciones">
                                    <Button 
                                        margin={'10px 0px 0px 0px'} 
                                        large 
                                        primary>Nueva
                                    </Button>
                                </Link>
                            </Card>
                            <Card color={'#f0f0f0'} center width={"200px"} height={"200px"}>
                                <Title 
                                    margin={'0px 0px 10px 0px'} 
                                    small 
                                    color={'black'} 
                                    center
                                    >Ausencia
                                </Title>
                                <Image
                                    margin={'0px auto 0px auto'}
                                    width={'100px'}
                                    height={'100px'} 
                                    source={require('../assets/ausencia.png')}>
                                </Image>
                                <Link to ="/solicitudes/ausencia">
                                    <Button 
                                        margin={'10px 0px 0px 0px'} 
                                        large  
                                        primary>Nueva
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