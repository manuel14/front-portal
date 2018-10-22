import React, { Component } from 'react';
import { Button, Center, Checkbox,InputText, Label, LogoSpinner, Table, TableBody, TableData, TableHead, TableHeader, TableRow, Text, TextArea } from '../../components/index';
import { Box, Flex } from 'grid-styled';
import { connect } from 'react-redux';
import { getEvents, postEvent } from './action';
import * as moment from 'moment';
import DatePicker from 'react-datepicker';
import './datepicker.css';

class AdminEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moment: moment(),
            open: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onLoad();
    }

    handleChange(moment) {
        this.setState({
            moment,
            open: false
        });
    }

    onSubmit(event){
        event.preventDefault();
        const nombre = document.querySelector("#nombre");
        const descripcion = document.querySelector("#descripcion");
        const all_day = document.querySelector("input[name='allday']");
        const ev ={
            nombre: nombre.value,
            descripcion: descripcion.value,
            fecha:this.state.moment,
            all_day: all_day.checked
        }
        this.props.send(ev);
        nombre.value = "";
        descripcion.value = "";
        all_day.value = false;
    }

    render() {
        const { events, loading } = this.props;
        const shortcuts = {
            'Today': moment(),
            'Yesterday': moment().subtract(1, 'days'),
            'Clear': ''
        };

        return (
            <Box style={{ height: '100%' }}>
                {loading && (
                    <Center>
                        <LogoSpinner />
                    </Center>
                )}
                {events ? (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Evento</TableHeader>
                                <TableHeader>Fecha</TableHeader>
                                <TableHeader>Descripcion</TableHeader>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {events.map(event => (
                                <TableRow id={event.pk} onClick={e => {
                                    e.preventDefault();
                                    this.handleClick(event)
                                }}
                                    key={event.pk}>
                                    <TableData>
                                        <Text margin={'0px 5px 0px'}>{moment(event.fecha, moment.ISO_8601).format('DD/MM/YYYY')}</Text>
                                    </TableData>
                                    <TableData>{event.nombre}</TableData>
                                    <TableData>{event.descripcion}</TableData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                        <Flex align="center">
                            <Box css={{
                                backgroundColor:'#f0f0f0'
                            }} 
                            mt={30} mx="auto" width={512}>
                                <form onSubmit={this.onSubmit} id="events">
                                    <Label>Nombre:</Label>
                                    <InputText id="nombre"></InputText>
                                    <Label display={"block"}>Descripción:</Label>
                                    <TextArea id="descripcion" cols={"50"} rows={"6"}></TextArea>
                                    <Label>
                                        Escoja una fecha y hora para el evento
                                    </Label>
                                    <Box>
                                        <DatePicker
                                            customInput={<InputText/>}
                                            selected={this.state.moment}
                                            onChange={this.handleChange}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            injectTimes={[
                                                moment().hours(0).minutes(1),
                                                moment().hours(12).minutes(5),
                                                moment().hours(23).minutes(59)
                                            ]}
                                            dateFormat="LLL"
                                        />
                                    </Box>
                                    <Box mt={10}>
                                        <Checkbox name="allday" value="Todo el día?" checked={false}>Todo el día?</Checkbox>
                                    </Box>
                                    <Box mt={10}>
                                        <Center>
                                            <Button large margin={'0 auto 0 auto'} type={"submit"} margin={"10px auto 0px auto"} primary>Crear</Button>
                                        </Center>
                                    </Box>
                                </form>
                            </Box>
                        </Flex>
                    )}
            </Box>
        );
    }
}

const mapStateToProps = state => ({
    ...state.AdminEventsReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getEvents()),
    send: (ev) => dispatch(postEvent(ev)),
    dispatch

})

export default connect(mapStateToProps, mapDispatchToProps)(AdminEvents);