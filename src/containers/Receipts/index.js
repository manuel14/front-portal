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

  closeModal() {
    console.log("entro a close modal");
    console.log(this.state.isModalOpen);
    this.setState(
      {isModalOpen: false}
    )
  }

  openModal() {
    console.log("entro a open modal");
    this.setState(
      {isModalOpen: true}
    )
  }
  showReceipt = receipt => event => {
    event.preventDefault();
    console.log(event);
    console.log("entro a show receipt");
    const id = receipt.pk;
    if (!receipt.abierto) {
      this.openModal();
    }
    else {
      this.props.history.push(`/recibo/${id}`);
    }
  }

  openReceipt = id => event => {
    event.preventDefault();
    this.props.onConfirm(id);
    
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
                      <Button className="open" id={receipt.pk} primary onClick={this.openReceipt(receipt.pk)}
                      >Abrir
                                        </Button>
                      <Button className="close" id={receipt.pk} danger onClick={this.closeModal}>Cerrar
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
