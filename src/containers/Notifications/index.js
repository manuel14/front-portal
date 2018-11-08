import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Center, Label, LogoSpinner, Table, TableHead, TableHeader, TableData, TableRow, TableBody, Text, Title, CardContainer } from '../../components';
import { Box, Flex } from 'grid-styled';
import { getNotifications, patchNotification } from './action';
import * as moment from 'moment';
import { withRouter } from 'react-router';

class Notifications extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        this.props.onLoad();
    }

    handleClick(notif) {
        if (!notif.leido) {
            this.props.onRead(notif.pk);
        }
        this.props.history.push(`/notificacion/${notif.pk}`)
    }

    render() {
        const { loading, notifications } = this.props;
        return (
            <Box style={{ height: '100%' }}>
                {loading && (
                    <Center>
                        <LogoSpinner />
                    </Center>
                )}
                {notifications.length !== 0 ? (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Fecha</TableHeader>
                                <TableHeader>Remitente</TableHeader>
                                <TableHeader>Asunto</TableHeader>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {notifications.map(notif => (
                                <TableRow id={notif.pk} onClick={e => {
                                    e.preventDefault();
                                    this.handleClick(notif)
                                }}
                                    key={notif.pk}>
                                    <TableData>
                                        <Text margin={'0px 5px 0px'}>{moment(notif.fecha_creacion, moment.ISO_8601).format('DD/MM/YYYY')}</Text>
                                    </TableData>
                                    <TableData>{notif.remitente.nombre}</TableData>
                                    <TableData>{notif.asunto}</TableData>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                        <Box>
                            <Center>
                                <h1>No tiene notificaciones</h1>
                            </Center>
                        </Box>
                    )
                }
            </Box>
        );
    }
}

const mapStateToProps = state => ({
    ...state.notificationReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getNotifications()),
    onRead: id => dispatch(patchNotification(id)),
    dispatch
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notifications));