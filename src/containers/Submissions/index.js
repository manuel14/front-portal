import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Center, LogoSpinner, Select, Table, TableBody, TableData, TableHead, TableHeader, TableRow, Text, Title } from '../../components/index';
import { Box } from 'grid-styled';
import { getSubmissions, pageChange } from './action';
import * as moment from 'moment';


class Submissions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            submissions: [],
            opts :  [
                {label:"Estado", options:
                [{ value: "pendiente", label: "Pendiente", tipo:"estado" },
                { value: "autorizada", label: "Aprobado", tipo:"estado" },
                { value: "rechazada", label: "Rechazado", tipo:"estado" }]},
                {label: "Tipo", options: [
                { value: "vacaciones", label: "Vacaciones", tipo:"tipo" },
                { value: "licencia", label: "Licencia", tipo:"tipo" },
                { value: "adelanto", label: "Adelanto", tipo:"tipo" }]}
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        this.props.onLoad();
    }

    componentWillReceiveProps(nextProps) {
        let absences = nextProps.absenceSubmissions.map(a => ({ ...a, tipo: "Licencia" }))
        let money = nextProps.moneySubmissions.map(m => ({ ...m, tipo: "Adelanto" }))
        let vacations = nextProps.vacationsSubmissions.map(v => ({ ...v, tipo: "Vacaciones" }))
        this.setState({
            submissions: absences.concat(money.concat(vacations))
        })
    }

    handleChange(event) {
        let newSubs = [];
        let absences = this.props.absenceSubmissions.map(a => ({ ...a, tipo: "Licencia" }))
        let money = this.props.moneySubmissions.map(m => ({ ...m, tipo: "Adelanto" }))
        let vacations = this.props.vacationsSubmissions.map(v => ({ ...v, tipo: "Vacaciones" }))
        let subs = absences.concat(vacations.concat(money));
        let selectedOption;
        let newOpts = this.state.opts;
        if (event == false) {
            newSubs = subs;
            selectedOption = null;
            newOpts = [
                {label:"Estado", options:
                [{ value: "pendiente", label: "Pendiente", tipo:"estado" },
                { value: "autorizada", label: "Aprobado", tipo:"estado" },
                { value: "rechazada", label: "Rechazado", tipo:"estado" }]},
                {label: "Tipo", options: [
                { value: "vacaciones", label: "Vacaciones", tipo:"tipo" },
                { value: "licencia", label: "Licencia", tipo:"tipo" },
                { value: "adelanto", label: "Adelanto", tipo:"tipo" }]}
            ]
        }
        else {
            newSubs = subs.filter(sub => event.some( e => e.label === sub[e.tipo]));
            selectedOption = event;
            console.log(event);
            newOpts = newOpts.filter(opt => 
                opt.label === (event[0].tipo[0].toUpperCase() + event[0].tipo.slice(1))
            );
            console.log(newOpts);
        }
        this.setState({
            selected: selectedOption,
            submissions: newSubs,
            opts : newOpts
        })
    }

    render() {
        const { loading } = this.props;
        return (
            <Box style={{ height: '100%' }}>
                {loading && (
                    <Center>
                        <LogoSpinner />
                    </Center>
                )}
                {this.state.submissions.length !== 0 && (
                    <div>
                        <Title
                            margin={'10px 0px 20px 0px'}
                            center
                            color={'black'}
                        >
                            Solicitudes
                        </Title>
                        <Center>
                            <Box mt={'20px'} width={170}>
                                <Select
                                    name={"estado"}
                                    label={"Filtre"}
                                    isMulti
                                    labelMargin={'0px 10px'}
                                    name={"estado"}
                                    margin={'0px 10px 10px 0px'}
                                    options={this.state.opts}
                                    value={this.state.selected}
                                    onChange={this.handleChange}
                                    placeholder="Seleccione estado o tipo">
                                </Select>
                            </Box>
                        </Center>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader>Tipo</TableHeader>
                                    <TableHeader>Fecha de Solicitud</TableHeader>
                                    <TableHeader>Estado</TableHeader>
                                    <TableHeader>Encargado</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.submissions.map(sub => (
                                    <TableRow id={sub.pk}
                                        key={sub.pk}>
                                        <TableData>{sub.tipo}</TableData>
                                        <TableData>
                                            <Text
                                                margin={'0px 5px 0px'}
                                            >{moment(sub.fecha_creacion, moment.ISO_8601).format('DD/MM/YYYY')}
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
                    </div>
                )}
                {this.state.submissions.length === 0 && (
                    <div>
                        <Title
                            margin={'10px 0px 20px 0px'}
                            center
                            color={'black'}
                        >
                            Solicitudes
                    </Title>
                        <Center>
                            <Box mt={'20px'} width={170}>
                                <Select
                                    name={"estado"}
                                    label={"Filtre"}
                                    labelMargin={'0px 10px'}
                                    name={"estado"}
                                    margin={'0px 10px 20px 0px'}
                                    options={this.state.opts}
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    placeholder="Seleccione estado">
                                </Select>
                                <Text 
                                    color={'black'} 
                                    size={'16px'} 
                                    >
                                    No hay datos para el criterio seleccionado, escoja otro filtro
                                </Text>
                            </Box>
                        </Center>
                        
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
    onLoad: () => dispatch(getSubmissions()),
    dispatch

})

export default connect(mapStateToProps, mapDispatchToProps)(Submissions);