import React, { Component } from 'react';
import { Button, Card, CardContainer, Label, Title } from '../index';
import {Box} from 'grid-styled';
import * as moment from 'moment';

class MoneySubmission extends Component {

    

    render() {
        return (
            <CardContainer>
                <Card color={'#f0f0f0'} center width={"500px"} height={"300px"}>
                    <Box mt={3} mb={3}>
                        <Title 
                            color={'black'} 
                            margin={'10px 0px 10px 0px'}>
                            Adelanto de sueldo
                        </Title>
                        <Label>Empleado:</Label>
                        <Title 
                            display={"inline-block"}
                            color={'black'} 
                            margin={'10px 0px 10px 0px'}>
                            {this.props.empleado}
                        </Title>
                        <br></br>
                        <Label>Importe:</Label>
                        <Title
                            display={'inline-block'} 
                            size={'24px'} 
                            color={' #3b3a30'}>${this.props.importe}</Title>
                        <br></br>
                        <Label>Motivo:</Label>
                        <Title display={'inline-block'}>{this.props.motivo}</Title>
                        <br></br>
                        <Label>
                            Fecha devolución:
                        </Label>
                        <Title display={'inline-block'}>{moment(this.props.fecha).format("DD-MM-YYYY")}</Title>
                    </Box>
                    <Button
                        name="aprobar"
                        onClick={this.props.onAccept}
                        margin={'0px 10px 0px 0px'}
                        primary
                    >Aprobar
                    </Button>
                    <Button
                        name="rechazar"
                        onClick={this.props.onAccept}
                        danger
                    >Rechazar
                    </Button>
                </Card>
            </CardContainer>
        )
    }

}

export default MoneySubmission;