import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Center, LogoSpinner, Right, Table, TableBody, TableData, TableHead, TableHeader, TableRow, Text, Title } from '../../components/index';
import { Box, Flex } from 'grid-styled';
import { getMoneySubmissions, getSubmissions} from './action';
import * as moment from 'moment';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class AdminSubmissions extends Component {


    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        const { moneySubmissions, vacationsSubmissions, loading } = this.props;
        let money = moneySubmissions.map( m => ({
            tipo:"Adelanto", pk:m.pk,
            empleado: m.empleado,
            estado: m.estado, fecha:m.fecha_creacion
        }))
        console.log(moneySubmissions);
        console.log(vacationsSubmissions);
        let vacations = vacationsSubmissions.map( v => ({
            tipo:"Vacaciones", pk:v.pk,
            empleado: v.empleado,
            estado: v.estado, fecha:v.fecha_creacion
        }))
        console.log(money);
        console.log(vacations);
        const submissions = money.concat(vacations);
        return (
            <Box style={{ height: '100%' }}>
                {loading && (
                    <Center>
                        <LogoSpinner />
                    </Center>
                )}
                {submissions && (
                    <div>
                        <Title
                            margin={'10px 0px 20px 0px'}
                            center
                            color={'black'}
                            >
                            Solicitudes
                        </Title>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    
                                    <TableHeader>Solicitante</TableHeader>
                                    <TableHeader>Tipo</TableHeader>
                                    <TableHeader>Fecha</TableHeader>
                                    <TableHeader>Estado</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {submissions.map(sub => (
                                    <TableRow id={sub.pk} onClick={e => {
                                        e.preventDefault()
                                        this.props.history.push(`/admin/solicitudes/${sub.pk}/${sub.tipo}`)
                                      }}
                                        key={money.pk}>
                                        <TableData>{sub.empleado.nombre}</TableData>
                                        <TableData>{sub.tipo}</TableData>
                                        <TableData>
                                            <Text
                                                margin={'0px 5px 0px'}
                                            >{moment(sub.fecha, moment.ISO_8601).format('DD/MM/YYYY')}
                                            </Text>
                                        </TableData>
                                        <TableData>{sub.estado}</TableData>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    ...state.adminSubmissionsReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getSubmissions()),
    dispatch

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminSubmissions));