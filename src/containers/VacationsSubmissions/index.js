import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Center, Label, Select, TextArea, Title, InputText } from '../../components/index';
import * as moment from 'moment';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import '../AdminEvents/datepicker.css';
import {postVacation} from './action';
import * as Holidays from 'date-holidays';



class VacationsSubmission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fecha_inicio: moment(),
            fecha_fin: moment()
        }
        this.handleChangeInicio = this.handleChangeInicio.bind(this);
        this.handleChangeFin = this.handleChangeFin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    handleChangeInicio(date){
        this.setState({
            fecha_inicio: date
        });
    }

    handleChangeFin(date){
        this.setState({
            fecha_fin: date
        });
    }

    handleDateChangeRaw(e){
        e.preventDefault();
    }


    onSubmit(event){
        event.preventDefault();
        if(this.state.fecha_inicio >= this.state.fecha_fin){
            alert("La fecha de fin debe ser mayor a la de inicio");
            return;
        }
        const vacationsData = {
            empleado: localStorage.id,
            fecha_inicio: this.state.fecha_inicio.format('YYYY-MM-DD'),
            fecha_fin: this.state.fecha_fin.format('YYYY-MM-DD')
        };
        this.props.onFormSubmit(vacationsData);
    }
    

    render() {
        let hd  = new Holidays('AR');
        console.log(hd.getHolidays(2018));

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
                                //excludeDates={forbiddenDates}
                                required={true}
                                customInput={<InputText/>}
                                onChangeRaw={this.handleDateChangeRaw}
                                selected={this.state.fecha_inicio}
                                onChange={this.handleChangeInicio}
                                shouldCloseOnSelect={true}
                                name="fecha_inicio"
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
                                selected={this.state.fecha_fin}
                                onChange={this.handleChangeFin}
                                name="fecha_fin"
                                dateFormat="DD/MM/YYYY"
                            />
                        </Box>
                        <Center>
                            <Button
                                width={'120px'}
                                margin={'10px 0px 10px 0px'} 
                                center 
                                display={'block'} 
                                large 
                                primary 
                                center
                                >Enviar
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