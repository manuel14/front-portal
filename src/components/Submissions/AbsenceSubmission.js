import React, { Component } from 'react';
import { Button, Card, CardContainer, Label, Text,  Title } from '../index';
import { Box } from 'grid-styled';
import * as moment from 'moment';

class AbsenceSubmission extends Component {



    render() {
        return (
            <CardContainer>
                <Card color={'#f0f0f0'} center width={"500px"} height={"300px"}>
                    <Box mt={3} mb={3}>
                        <Title color={'black'} margin={'10px 0px 10px 0px'}>Permiso de ausencia</Title>
                        <Label>Empleado:</Label>
                        <Title
                            display={"inline-block"}
                            color={'black'}
                            margin={'10px 0px 10px 0px'}>
                            {this.props.empleado}
                        </Title>
                        <br></br>
                        <Label>Motivo:</Label>
                        <Text
                            display={"inline-block"}
                            color={'black'}
                            margin={'10px 0px 10px 0px'}>
                            {this.props.motivo}
                        </Text>
                        <br></br>
                        <Label>Fecha de inicio:</Label>
                        <Title
                            display={'inline-block'}
                            size={'24px'}
                            color={' #3b3a30'}>{moment(this.props.fecha_inicio).format("DD-MM-YYYY")}</Title>
                        <br></br>
                        <Label>Fecha de fin:</Label>
                        <Title display={'inline-block'}>{moment(this.props.fecha_fin).format("DD-MM-YYYY")}</Title>
                        <br></br>
                    </Box>
                    {this.props.estado === "Pendiente" &&
                        <Button
                            name="aprobar"
                            onClick={this.props.onAccept}
                            margin={'0px 10px 0px 0px'}
                            primary
                        >Aprobar
                        </Button>
                    }
                    {this.props.estado === "Pendiente" &&
                        <Button
                            name="rechazar"
                            onClick={this.props.onAccept}
                            danger
                        >Rechazar
                        </Button>
                    }
                </Card>
            </CardContainer>
        )
    }

}

export default AbsenceSubmission;