import React, { Component } from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { getReceipts, patchReceipt } from './action';
import {
  Button,
  NiceModal,
  Text,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow
} from "../../components";

class Receipts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.showReceipt = this.showReceipt.bind(this);
    this.openReceipt = this.openReceipt.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  closeModal(event) {
    console.log("entro a close modal");
    this.setState({
      isModalOpen: false
    })
  }

  openModal() {
    this.setState({
      isModalOpen: true
    })
  }
  showReceipt = receipt => event => {
    event.preventDefault();
    console.log("llego a show receipt");
    console.log(receipt.opened);
    if (!receipt.opened) {
      this.openModal();
    }
    else {
      this.openReceipt(receipt);
      
    }
  }

  openReceipt = receipt => event => {
    event.preventDefault();
    console.log(receipt);
    const id = receipt.pk;
    console.log(id);
    if (receipt.opened) {
      this.props.history.push(`/recibo/${id}`);
    }
    this.props.onConfirm(id);
    this.props.history.push(`/recibo/${id}`);
  }


  render() {
    const modalStyle = {
      overlay: {
        backgroundColor: '#292b2c'
      }
    };

    const mainStyle = {
      app: {
        margin: '120px 0',
        display: this.state.isModalOpen ? 'block' : 'none'
        
      }
    };
    return this.props.receipts ? (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Período</TableHeader>
            <TableHeader>Abierto</TableHeader>
            <TableHeader>Tipo</TableHeader>

          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.receipts.map(receipt => (
            <TableRow onClick={this.showReceipt(receipt)}
              key={receipt.pk}>
              <TableData>
                <Text margin={'0px 5px 0px'}>{receipt.periodo}</Text>
                <div>
                  <div style={mainStyle.app}>
                    <NiceModal
                      isModalOpen={this.state.isModalOpen}
                      closeModal={this.closeModal}
                      style={modalStyle}>
                      <Text block>Si presiona en abrir dará su consentimiento de haber visto este recibo de sueldo</Text>
                      <Button id={receipt.pk} primary onClick={this.openReceipt(receipt)}>Abrir
                                        </Button>
                      <Button danger onClick={this.closeModal}>Cerrar
                                        </Button>
                    </NiceModal>
                  </div>

                </div>
              </TableData>
              <TableData>{receipt.abierto ? receipt.abierto : 'No'}</TableData>
              <TableData>{receipt.tipo === "R" ? "Recibo" : "Aguinaldo"}</TableData>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
        <h1>ladero</h1>
      );
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
