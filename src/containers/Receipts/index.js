import React, { Component } from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { getReceipts, patchReceipt } from './action';
import {
  Text,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow
} from "../../components";
import * as moment from 'moment';
import {Box} from 'grid-styled';
import {Center, LogoSpinner} from '../../components/index';


class Receipts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoad();
  }


  render() {
    const { loading, receipts } = this.props;
    return (
      <Box style={{ height: '100%' }}>
        {loading && (
          <Center>
            <LogoSpinner />
          </Center>
        )}
        {receipts.length !== 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Período</TableHeader>
                <TableHeader>Abierto</TableHeader>
                <TableHeader>Tipo</TableHeader>

              </TableRow>
            </TableHead>
            <TableBody>
              {receipts.map(receipt => (
                <TableRow onClick={e => {
                  e.preventDefault()
                  this.props.history.push(`/recibo/${receipt.pk}`, {
                    abierto: receipt.abierto ? false : true
                  })
                }}
                  key={receipt.pk}>
                  <TableData>
                    <Text margin={'0px 5px 0px'}>{moment(receipt.periodo).format('MM/YYYY')}</Text>
                  </TableData>
                  <TableData>{receipt.abierto ? moment(receipt.abierto, moment.ISO_8601).format('DD/MM/YYYY HH:MM:SS') : 'No'}</TableData>
                  <TableData>{receipt.tipo}</TableData>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        )
          : (
            <Box>
              <Center>
                <h1>No hay recibos cargadas</h1>
              </Center>
            </Box>
          )}
      </Box>
    )
  }
}

const mapStateToProps = state => ({
  ...state.receiptReducer
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getReceipts()),
  onConfirm: (receiptId) => dispatch(patchReceipt(receiptId)),
  dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Receipts));
