import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Center, Label, Title, InputText } from '../../components/index';
import * as moment from 'moment';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import '../AdminEvents/datepicker.css';
import {postVacation} from './action';



class VacationsSubmission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fechaInicio: moment(),
            fechaFin: moment()
        }
        this.handleChangeInicio = this.handleChangeInicio.bind(this);
        this.handleChangeFin = this.handleChangeFin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    handleChangeInicio(date){
        this.setState({
            fechaInicio: date
        });
    }

    handleChangeFin(date){
        this.setState({
            fechaFin: date
        });
    }

    handleDateChangeRaw(e){
        e.preventDefault();
    }


    onSubmit(event){
        event.preventDefault();
        if(this.state.fechaInicio >= this.state.fechaFin){
            alert("La fecha de fin debe ser mayor a la de inicio");
            return;
        }
        const vacationsData = {
            empleado: localStorage.id,
            fecha_inicio: this.state.fechaInicio.format('YYYY-MM-DD'),
            fecha_fin: this.state.fechaFin.format('YYYY-MM-DD')
        };
        this.props.onFormSubmit(vacationsData);
    }
    

    render() {

        return (
            <Flex align="center">
                <Box css={{
                    backgroundColor: '#f0f0f0'
                }}
                    mt={30} mx="auto" width={512}>
                    <form onSubmit={this.onSubmit} id="vacations">
                        <Title center>Licencia por vacaciones</Title>
                        <Box ml={10} mt={10}>
                            <Label>
                                Fecha de inicio:
                            </Label>
                            <DatePicker
                                required={true}
                                customInput={<InputText/>}
                                onChangeRaw={this.handleDateChangeRaw}
                                selected={this.state.fechaInicio}
                                onChange={this.handleChangeInicio}
                                shouldCloseOnSelect={true}
                                name="fechaInicio"
                                dateFormat="DD/MM/YYYY"
                            />
                        </Box>
                        <Box mb={10} ml={10} mt={10}>
                            <Label>
                                Fecha de fin:
                            </Label>
                            <DatePicker
                                required={true}
                                customInput={<InputText/>}
                                onChangeRaw={this.handleDateChangeRaw}
                                selected={this.state.fechaFin}
                                onChange={this.handleChangeFin}
                                name="fechaFin"
                                dateFormat="DD/MM/YYYY"
                            />
                        </Box>
                        <Center>
                            <Button
                                margin={'10px 0px 10px 0px'} 
                                center 
                                display={'block'} 
                                large 
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
    ...state.vacationsReducer
})

const mapDispatchToProps = dispatch => ({
    onFormSubmit: (data) => dispatch(postVacation(data)),
    dispatch
})




export default connect(mapStateToProps, mapDispatchToProps)(VacationsSubmission);