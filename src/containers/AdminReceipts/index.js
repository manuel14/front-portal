import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Center, LogoSpinner, Right, Select, Table, TableBody, TableData, TableHead, TableHeader, TableRow, TableToolbar, Text, Title } from '../../components/index';
import { Box, Flex } from 'grid-styled';
import { getReceipts, pageChange } from './action';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class AdminReceipts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            receipts: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.onLoad(this.props.page);
    }



    componentWillReceiveProps(nextProps) {
        this.setState({
            receipts: nextProps.receipts
        })
    }

    handleChange(event) {
        let newReceipts = [];
        let selectedOption;
        if (!event) {
            newReceipts = this.props.receipts;
            selectedOption = null;
        }
        else if (event.value === 'abierto') {
            newReceipts = this.props.receipts.filter(
                receipt => receipt.abierto
            )
            selectedOption = event.value;

        }
        else {
            newReceipts = this.props.receipts.filter(
                receipt => !receipt.abierto
            )
            selectedOption = event.value;
        }
        this.setState({
            selectedOption,
            receipts: newReceipts
        })
    }

    onPageChange = page => {
        this.props.onPageChange(page);
        this.props.onLoad(page);
    };

    render() {
        const { loading } = this.props;
        const receipts = this.state.receipts;
        const opts = [
            { value: 'abierto', label: "Abierto" },
            { value: 'cerrado', label: "Cerrado" }
        ]
        return (
            <Box style={{ height: '100%' }}>
                {loading && (
                    <Center>
                        <LogoSpinner />
                    </Center>
                )}
                {receipts && (
                    <div>
                        <Title
                            margin={'10px 0px 0px 0px'}
                            color={'black'}
                            center
                        >
                            Archivos
                        </Title>
                        <Center>
                            <Box mt={'20px'} width={170}>
                                <Select
                                    name={"abierto"}
                                    label={"Filtre por estado"}
                                    labelMargin={'0px 10px'}
                                    name={"abierto"}
                                    margin={'0px 10px'}
                                    options={opts}
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    placeholder="Seleccione estado">
                                </Select>
                            </Box>
                        </Center>
                        <Right>
                            <Link to="/admin/recibos/nuevos">
                                <Button
                                    margin={'0px 10px 10px 0px'}
                                    large
                                    primary
                                >Subir recibos
                                </Button>
                            </Link>
                        </Right>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader>Empleado</TableHeader>
                                    <TableHeader>Período</TableHeader>
                                    <TableHeader>Tipo</TableHeader>
                                    <TableHeader>Abierto</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {receipts.map(receipt => (
                                    <TableRow
                                        key={receipt.pk}>
                                        <TableData>
                                            <Title>
                                                {receipt.empleado.nombre}
                                            </Title>
                                        </TableData>
                                        <TableData>
                                            <Text
                                                margin={'0px 5px 0px'}
                                            >{moment(receipt.periodo, moment.ISO_8601).format('MM/YYYY')}
                                            </Text>
                                        </TableData>
                                        <TableData>{receipt.tipo}</TableData>
                                        <TableData>{receipt.abierto ? moment(receipt.abierto, moment.ISO_8601).format('DD/MM/YYYY HH:MM') : 'No'}</TableData>
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
    ...state.adminReceiptsReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: page => dispatch(getReceipts(page)),
    onPageChange: page => dispatch(pageChange(page)),
    dispatch

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminReceipts));