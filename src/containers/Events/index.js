import React, { Component } from 'react';
import * as moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Box } from 'grid-styled';
import {connect} from 'react-redux';
import {getEvents} from './action';
import {Button, Center, Label, LogoSpinner, Title} from '../../components/index';
import Modal from 'react-responsive-modal';

moment.locale('es', {
    months: ['Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
        'Diciembre']
    , weekdays: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
})

BigCalendar.momentLocalizer(moment);

class Events extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: "",
            descripcion: "",
            inicio: "",
            open: false
        }
    }
    
    componentDidMount(){
        this.props.onLoad();
    }
   

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onAccept(id) {
        this.setState({
            open: false
        })
    }

    handleSelect(event) {
        this.setState({
            open: true,
            nombre: event.title,
            inicio: event.start,
            descripcion: event.descripcion
        })
    }

    render() {
        const {events, loading} = this.props;
        const evs_fmt = events.map(event => ({
            id: event.id,
            title: event.nombre,
            start: event.fecha,
            end: event.fecha,
            allDay: event.allday,
            descripcion: event.descripcion

        }))
        return (
            <Box style={{ height: '100%' }}>
                {loading && (
                    <Center>
                        <LogoSpinner />
                    </Center>
                )}
                <Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center
                    closeOnOverlayClick={false}
                    showCloseIcon={false}
                    onOverlayClick={this.onOverlay}
                >
                    <Title
                        margin={'0px 0px 10px 0px'}
                        size={'18px'}
                        name={'nombre'} 
                        block
                        center
                    >{this.state.nombre}
                    </Title>
                    <Label>Descripción:</Label>
                    <Title
                        margin={'0px 0px 10px 0px'}
                        size={'18px'}
                        name={'descripcion'} 
                        display={'inline-block'}
                    >{this.state.descripcion}
                    </Title>
                    <br></br>
                    <Label>Fecha de inicio:</Label>
                    <Title
                        margin={'0px 0px 10px 0px'}
                        size={'18px'}
                        name={'inicio'} 
                        display={'inline-block'}
                    >{moment(this.state.inicio).format('DD/MM/YYYY HH:MM')}
                    </Title>
                    <Button 
                        display={'block'}
                        margin={"5px auto 0px auto"} 
                        className="close" 
                        danger 
                        onClick={this.onCloseModal}
                        >Cerrar
                    </Button>
                </Modal>
                <BigCalendar
                    selectable
                    events={evs_fmt}
                    views={['month', 'day']}
                    onSelectEvent={this.handleSelect.bind(this)}
                    messages={
                        {
                            next: "Siguiente",
                            previous: "Anterior",
                            today: "Hoy",
                            month: "Mes",
                            day: "Día"
                        }
                    }
                />
            </Box>
        )
    }
}

const mapStateToProps = state =>({
    ...state.eventsReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getEvents()),
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Events);