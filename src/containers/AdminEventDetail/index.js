import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Box, Flex } from 'grid-styled';
import {Button, InputText, Center, Checkbox, Label, TextArea } from '../../components/index';
import * as moment from 'moment';
import DatePicker from 'react-datepicker';
import '../AdminEvents/datepicker.css';
import {getEvent, deleteEvent, postEvent, putEvent} from './action';
import {withRouter} from 'react-router';

class AdminEventDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            fecha: moment(),
            allday: false,
            nombre: "",
            descripcion: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        const eventId = this.props.match.params.eventId;
        if((eventId) && (eventId !== "0")){
            this.props.onLoad(eventId);
        }
    }

    componentWillReceiveProps(nextProps){
        const fechaMoment = moment(nextProps.event.fecha);
        this.setState({
            nombre: nextProps.event.nombre,
            descripcion: nextProps.event.descripcion,
            fecha: fechaMoment,
            allday: nextProps.event.all_day
        })
    }

    handleChange(event){
        if(!event.target){
            this.setState({
                fecha: event
            })
        }
        else{
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({
                [name]: value
            });
        }
    }

    handleDelete(event){
        event.preventDefault();
        const eventId = this.props.match.params.eventId;
        this.props.onDelete(eventId);
        this.props.history.push('/admin/eventos');
    }

    handleDateChangeRaw(e){
        e.preventDefault();
    }

    onSubmit(event) {
        event.preventDefault();
        const ev = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            fecha: this.state.fecha,
            all_day: this.state.allday
        }
        const eventId = this.props.match.params.eventId;
        if (eventId !== "0"){
            this.props.update(ev, eventId);
        }else{
            this.props.new(ev);
        }
        this.props.history.push('/admin/eventos');
    }

    render() {
        return (
            <Flex align="center">
                <Box css={{
                    backgroundColor: '#f0f0f0'
                }}
                    mt={30} mx="auto" width={512}>
                    <form onSubmit={this.onSubmit} id="events">
                        <Label 
                            margin={'10px 0px 0px 10px'}
                            >Nombre:
                        </Label>
                        <InputText 
                            margin={'0px 10px'} 
                            id="nombre"
                            value={this.state.nombre}
                            name="nombre"
                            onChange={this.handleChange}
                            required={'required'}
                            >
                        </InputText>
                        <Label 
                            margin={'10px 0px 0px 10px'} 
                            display={"block"}
                            >Descripción:
                        </Label>
                        <TextArea 
                            margin={'0px 10px'}
                            required={'required'} 
                            id="descripcion" 
                            cols={"50"} 
                            rows={"6"}
                            name="descripcion"
                            onChange={this.handleChange}
                            value={this.state.descripcion}
                            >{this.state.descripcion}
                        </TextArea>
                        <Label margin={'10px 0px 0px 10px'}>
                            Escoja una fecha y hora para el evento
                        </Label>
                        <Box ml={10} mt={10}>
                            <DatePicker
                                customInput={<InputText/>}
                                onChangeRaw={this.handleDateChangeRaw}
                                selected={this.state.fecha}
                                onChange={this.handleChange}
                                showTimeSelect
                                name="fecha"
                                timeFormat="HH:mm"
                                injectTimes={[
                                    moment().hours(0).minutes(1),
                                    moment().hours(12).minutes(5),
                                    moment().hours(23).minutes(59)
                                ]}
                                dateFormat="LLL"
                            />
                        </Box>
                        <Box ml={10} mt={10}>
                            <input
                                name="allday" 
                                value="Todo el día?"
                                onChange={this.handleChange}
                                checked={this.state.allday}
                                type="checkbox"
                               />Todo el día?
                            
                        </Box>
                        <Box mb={10} ml={10} mt={10}>
                            <Center>
                                <Button 
                                    large 
                                    margin={'0 auto 0 auto'} 
                                    type={"submit"} 
                                    margin={"10px auto 0px auto"} 
                                    primary
                                    >Guardar
                                </Button>
                                <Button onClick={this.handleDelete} danger>
                                    Eliminar
                                </Button>
                            </Center>
                        </Box>
                    </form>
                </Box>
            </Flex>
        )
    }
}

const mapStateToProps = state => ({
    ...state.adminEventDetailReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: (id) => dispatch(getEvent(id)),
    //onSubmit: (event) => dispatch(postEvent(event)),
    update: (ev, eventId) => dispatch(putEvent(ev, eventId)),
    new: (ev) => dispatch(postEvent(ev)),
    onDelete: (eventId) => dispatch(deleteEvent(eventId)),
    dispatch
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminEventDetail));