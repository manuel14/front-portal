import React, { Component } from 'react';
import * as moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Box } from 'grid-styled';
import {connect} from 'react-redux';
import {getEvents} from './action';
import {Center, LogoSpinner} from '../../components/index';

moment.locale('es', {
    months: ['Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
        'Diciembre']
    , weekdays: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
})

BigCalendar.momentLocalizer(moment);

class Events extends Component {

    componentDidMount(){
        this.props.onLoad();
    }

    handleSelect(event) {
        alert(event.title);
    }

    render() {
        const {events, loading} = this.props;
        const evs_fmt = events.map(event => ({
            id: event.id,
            title: event.nombre,
            start: event.fecha,
            end: event.fecha,
            allDay: event.allday

        }))
        return (
            <Box style={{ height: '100%' }}>
                {loading && (
                    <Center>
                        <LogoSpinner />
                    </Center>
                )}
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