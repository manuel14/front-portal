import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Center, Label, Select, TextArea, Title, InputText } from '../../components/index';
import { postMoney } from './action';
import * as moment from 'moment';
import {connect} from 'react-redux';

class MoneySubmission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            devolucion: null,
            importe: null,
            motivo: null

        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    handleChange(event){
        if(!event.target){
            this.setState({
                devolucion: event.value
            })
        }
        else{
            const value = event.target.value;
            const name = event.target.name;
            this.setState({
                [name]: value
            });
        }
    }

    onSubmit(event){
        event.preventDefault();
        let date = moment();
        date.month(this.state.devolucion-1);
        date = date.format('YYYY-MM-DD');
        const moneyData = {
            motivo: this.state.motivo,
            importe: parseInt(this.state.importe),
            fecha_devolucion: date
        };
        this.props.sendMoney(moneyData);
    }
    

    render() {
        const opts = [1,2,3,4,5,6,7,8,9,10,11,12];
        return (
            <Flex align="center">
                <Box css={{
                    backgroundColor: '#f0f0f0'
                }}
                    mt={30} mx="auto" width={512}>
                    <form onSubmit={this.onSubmit} id="money">
                        <Title margin={'10px 0px'} center>Adelanto de sueldo</Title>
                        <Label margin={'20px 0px 0px 10px'}>Monto</Label>
                        <InputText
                            type={'number'}
                            margin={'0px 0px 0px 10px'}
                            value={this.state.amount}
                            display={'block'}
                            onChange={this.handleChange} 
                            name="importe">
                        </InputText>
                        <br></br>
                        <Label margin={'10px 0px 10px 10px'}>Motivo</Label>
                        <TextArea
                            margin={'0px 0px 0px 10px'}
                            name={"motivo"} 
                            required={"required"} 
                            rows="6" 
                            value={this.state.value}
                            onChange={this.handleChange}
                            cols="50">
                        </TextArea>
                        <Box ml={10} mt={10} mb={10}>
                            <Select 
                                required={"required"} 
                                name={"devolucion"} 
                                label={"Mes devolución"} 
                                name={"emp"}
                                margin = {'10px 10px 10px 0px'}
                                options={opts.map(opt => ({value:opt, label:opt}))}
                                value={this.state.devolucion} 
                                onChange={this.handleChange} 
                                placeholder="Seleccione Mes de devolución">
                            </Select>
                        </Box>
                        <Center>
                            <Button 
                                center 
                                display={'block'} 
                                large
                                margin={'10px 0px 10px 0px'} 
                                primary 
                                center
                                >Crear
                            </Button>
                        </Center>
                    </form>
                </Box>
            </Flex>
        )
    }

}

const mapStateToProps = state => ({
    ...state.moneySubmissionReducer
})

const mapDispatchToProps = dispatch => ({
    sendMoney: (moneyData) => dispatch(postMoney(moneyData)),
    dispatch
})



export default connect(mapStateToProps, mapDispatchToProps)(MoneySubmission);