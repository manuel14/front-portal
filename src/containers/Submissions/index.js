import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Center, LogoSpinner, Table, TableBody, TableData, TableHead, TableHeader, TableRow, TableToolbar,Text, Title } from '../../components/index';
import { Box} from 'grid-styled';
import { getSubmissions, pageChange} from './action';
import * as moment from 'moment';

class Submissions extends Component {


    componentDidMount() {
        this.props.onLoad(this.props.page);
    }

    onPageChange = page => {
        this.props.onPageChange(page);
        this.props.onLoad(page);
    };

    render() {
        const { absenceSubmissions, moneySubmissions, vacationsSubmissions, loading } = this.props;
        let absences = absenceSubmissions.map( a => ({
            tipo:"Licencia", pk:a.pk,
            empleado: a.empleado,
            estado: a.estado, fecha:a.fecha_creacion,
            autoriza: a.autoriza
        }))
        
        let money = moneySubmissions.map( m => ({
            tipo:"Adelanto", pk:m.pk,
            empleado: m.empleado,
            estado: m.estado, fecha:m.fecha_creacion,
            autoriza: m.autoriza
        }))
        let vacations = vacationsSubmissions.map( v => ({
            tipo:"Vacaciones", pk:v.pk,
            empleado: v.empleado,
            estado: v.estado, fecha:v.fecha_creacion,
            autoriza: v.autoriza
        }))
        const submissions = absences.concat(money.concat(vacations));
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
                                    <TableHeader>Tipo</TableHeader>
                                    <TableHeader>Fecha de Solicitud</TableHeader>
                                    <TableHeader>Estado</TableHeader>
                                    <TableHeader>Autorizado por</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {submissions.map(sub => (
                                    <TableRow id={sub.pk} 
                                        key={money.pk}>
                                        <TableData>{sub.tipo}</TableData>
                                        <TableData>
                                            <Text
                                                margin={'0px 5px 0px'}
                                            >{moment(sub.fecha, moment.ISO_8601).format('DD/MM/YYYY')}
                                            </Text>
                                        </TableData>
                                        <TableData>{sub.estado}</TableData>
                                        <TableData>
                                            <Title>
                                                {sub.autoriza ? sub.autoriza.nombre : ""}
                                            </Title>
                                        </TableData>
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
    ...state.submissionsReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: (page) => dispatch(getSubmissions(page)),
    onPageChange: page => dispatch(pageChange(page)),
    dispatch

})

export default connect(mapStateToProps, mapDispatchToProps)(Submissions);