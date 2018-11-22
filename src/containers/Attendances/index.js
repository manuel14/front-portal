import React, { Component } from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { getAttendances} from './action';
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


class Attendances extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoad();
  }


  render() {
    const { loading, attendances } = this.props;
    return (
      <Box style={{ height: '100%' }}>
        {loading && (
          <Center>
            <LogoSpinner />
          </Center>
        )}
        {attendances.length !== 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Período</TableHeader>
                <TableHeader>Abierto</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendances.map(attendance => (
                <TableRow onClick={e => {
                  e.preventDefault()
                  this.props.history.push(`/fichada/${attendance.pk}`, {
                    abierto: attendance.abierto ? false : true
                  })
                }}
                  key={attendance.pk}>
                  <TableData>
                    <Text 
                      margin={'0px 5px 0px'}>{
                      moment(attendance.periodo).format('MM/YYYY')}
                    </Text>
                  </TableData>
                  <TableData>
                    {attendance.abierto ? moment(attendance.abierto, moment.ISO_8601).format('DD/MM/YYYY HH:MM:SS') : 'No'}
                  </TableData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )
          : (
            <Box>
              <Center>
                <h1>No hay fichadas cargadas</h1>
              </Center>
            </Box>
          )}
      </Box>
    )
  }
}

const mapStateToProps = state => ({
  ...state.attendancesReducer
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getAttendances()),
  //onConfirm: (receiptId) => dispatch(patchReceipt(receiptId)),
  dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Attendances));
