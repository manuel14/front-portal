import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Flex } from 'grid-styled';
import { Link } from 'react-router-dom';
import {
  Button,
  Receipt,
  NiceModal,
  Text
} from "../../components";
import { getReceipts, patchReceipt } from '../Receipt/action';
import {
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
      modalIsOpen: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.showReceipt = this.showReceipt.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  // open modal (set isModalOpen, false)
  openModal() {
    this.setState({
      isModalOpen: true
    })
  }
  showReceipt(event) {
    const id = event.target.id;
    console.log(event.target)
    console.log("llego a show receipt")
    this.setState({
      isModalOpen: false
    })
    this.props.onConfirm(id);

  }

  render() {

    const modalStyle = {
      overlay: {
        backgroundColor: 'white'
      }
    };

    const mainStyle = {
      app: {
        margin: '120px 0',
        display: this.state.isModalOpen ? 'block' : 'none'

      }
    };
    return this.props.items ? (
      /*  <Flex align="center">
         <Box mt={20} mx='auto' width={512}>
           <Title center size={'24px'} color='#006aa3'>Recibos</Title>
           {this.props.items.map((receipt) => {
             return <Receipt
               opened={receipt.abierto}
               type={receipt.tipo}
               url={receipt.archivo}
               date={receipt.periodo}
             />
           })}
  
           
         </Box>
       </Flex> */

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Período</TableHeader>
            <TableHeader>Abierto</TableHeader>
            <TableHeader>Tipo</TableHeader>

          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.items.map(receipt => (
            <TableRow key={receipt.id}>
              <TableData>
                <Link to={`/recibo/${receipt.id}`}
                  component={Receipt}>
                  <div>
                    <Button primary onClick={this.openModal}>
                      {receipt.periodo}
                    </Button>

                    {receipt.opened && <div style={mainStyle.app}>
                      <NiceModal
                        isModalOpen={this.state.isModalOpen}
                        closeModal={this.closeModal}
                        style={modalStyle}>

                        <Text block>Si presiona en continuar dará su consentimiento de haber visto este recibo de sueldo</Text>
                        <Button id={receipt.id} primary onClick={this.showReceipt}>Continuar
                                        </Button>
                        <Button danger onClick={this.closeModal}>Cerrar
                                        </Button>

                      </NiceModal>
                    </div>
                    }
                  </div>
                </Link>
              </TableData>
              <TableData>{receipt.abierto ? receipt.abierto : 'No'}</TableData>
              <TableData>{receipt.tipo}</TableData>

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

export default connect(mapStateToProps, mapDispatchToProps)(Receipts);
