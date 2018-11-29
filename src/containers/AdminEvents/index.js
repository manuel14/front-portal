import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Center, LogoSpinner, Right, Table, TableBody, TableData, TableHead, TableHeader, TableRow, TableToolbar,Text, Title } from '../../components/index';
import { Box, Flex } from 'grid-styled';
import { getEvents, pageChange, postEvent } from './action';
import * as moment from 'moment';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

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
        this.props.onLoad(this.props.page);
    }


    handleChange(moment) {
        this.setState({
            moment,
            open: false
        });
    }

    onPageChange = page => {
        this.props.onPageChange(page);
        this.props.onLoad(page);
    };

    onSubmit(event) {
        event.preventDefault();
        const nombre = document.querySelector("#nombre");
        const descripcion = document.querySelector("#descripcion");
        const all_day = document.querySelector("input[name='allday']");
        const ev = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            fecha: this.state.moment,
            all_day: all_day.checked
        }
        this.props.send(ev);
        nombre.value = "";
        descripcion.value = "";
        all_day.value = false;
    }

    render() {
        const { events, loading } = this.props;
        return (
            <Box style={{ height: '100%' }}>
                {loading && (
                    <Center>
                        <LogoSpinner />
                    </Center>
                )}
                {events && (
                    <div>
                        <Title
                            margin={'10px 0px 0px 0px'}
                            center
                            color={'black'}
                            >
                            Eventos
                        </Title>
                        <Right>
                            <Link to="/admin/eventos/0">
                                <Button
                                    margin={'10px 10px 10px 0px'}
                                    large
                                    primary
                                    >Nuevo Evento
                                </Button>
                            </Link>
                        </Right>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader>Evento</TableHeader>
                                    <TableHeader>Fecha</TableHeader>
                                    <TableHeader>Descripción</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {events.map(event => (
                                    <TableRow id={event.pk} onClick={e => {
                                        e.preventDefault()
                                        this.props.history.push(`/admin/eventos/${event.id}`)
                                      }}
                                        key={event.pk}>
                                        <TableData>{event.nombre}</TableData>
                                        <TableData>
                                            <Text
                                                margin={'0px 5px 0px'}
                                            >{moment(event.fecha, moment.ISO_8601).format('DD/MM/YYYY')}
                                            </Text>
                                        </TableData>
                                        <TableData>{event.descripcion}</TableData>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Box m={16}>
                            <TableToolbar
                                items={this.props.items}
                                size={this.props.size}
                                page={this.props.page}
                                showTotal
                                onPageChange={this.onPageChange}
                            >
                            </TableToolbar>
                        </Box>
                    </div>
                )}
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    ...state.adminEventsReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: page => dispatch(getEvents(page)),
    onPageChange: page => dispatch(pageChange(page)),
    send: (ev) => dispatch(postEvent(ev)),
    dispatch

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminEvents));