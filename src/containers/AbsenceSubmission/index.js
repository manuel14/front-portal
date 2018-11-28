import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Center, Label, TextArea, Title, InputText } from '../../components/index';
import * as moment from 'moment';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import '../AdminEvents/datepicker.css';
import {postAbsence} from './action';



class AbsenceSubmission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fechaInicio: moment(),
            fechaFin: moment(),
            motivo: ""
        }
        this.handleChangeInicio = this.handleChangeInicio.bind(this);
        this.handleChangeFin = this.handleChangeFin.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
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
        const absenceData = {
            empleado: localStorage.id,
            fecha_inicio: this.state.fechaInicio.format('YYYY-MM-DD'),
            fecha_fin: this.state.fechaFin.format('YYYY-MM-DD'),
            observaciones: this.state.motivo
        };
        this.props.onFormSubmit(absenceData);
    }
    

    render() {
        console.log(this.props.match);
        return (
            <Flex align="center">
                <Box 
                    css={{backgroundColor: '#f0f0f0'}}
                    mt={30} mx="auto" width={512}>
                    <form onSubmit={this.onSubmit} id="vacations">
                        <Title margin={'10px 0px'} center>Permiso de ausencia</Title>
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
                        <Label
                            margin={'0px 0px 0px 10px'}>
                            Motivo:
                        </Label>
                        <TextArea
                            margin={'10px 0px 0px 10px'}
                            cols={'50'}
                            rows={'6'}
                            name="motivo"
                            value={this.state.motivo}
                            onChange={this.handleChange}
                            >
                        </TextArea>
                        <Center>
                            <Button
                                margin={'10px 0px 10px 0px'} 
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
    ...state.absenceReducer
})

const mapDispatchToProps = dispatch => ({
    onFormSubmit: (data) => dispatch(postAbsence(data)),
    dispatch
})




export default connect(mapStateToProps, mapDispatchToProps)(AbsenceSubmission);