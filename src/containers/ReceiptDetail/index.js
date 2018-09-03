import React, { Component } from 'react';
import { getReceipt, patchReceipt } from './action';
import { Box, Flex } from 'grid-styled';
import { connect } from 'react-redux'
import {Button, Text} from '../../components/index';
import Modal from 'react-responsive-modal';

class ReceiptDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: this.props.history.location.state.abierto
        }
    }

    componentDidMount() {
        this.props.onLoad(this.props.match.params.receiptId);
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
        this.props.history.push('/recibos');
    };

    onAccept(id){
        this.setState({
            open: false
        })
        this.props.onConfirm(id);
    }

    render() {
        const { receipt } = this.props;
        return (
            <div className="receipt">
                  <Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center
                    closeOnOverlayClick={false}
                    showCloseIcon={false}
                    onOverlayClick={this.onOverlay}
                  >
                    <Text block>Si presiona en abrir dará su consentimiento de haber visto este recibo de sueldo</Text>
                    <Button margin={"5px 5px 0px 20px"} className="open" id={receipt.pk} primary onClick={e => {
                        e.preventDefault()
                        this.onAccept(receipt.pk)}}
                    >Abrir
                                        </Button>
                    <Button margin={"5px 5px 0px 0px"} className="close" danger onClick={this.onCloseModal}>Cerrar
                                        </Button>
                  </Modal>
                <Flex align="center">
                    <Box mt={'20px'} mx="auto">
                        <iframe height="512px" src={receipt.archivo}>

                        </iframe>
                    </Box>
                </Flex>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state.receiptDetailReducer,
});

const mapDispatchToProps = dispatch => ({
    onLoad: id => dispatch(getReceipt(id)),
    onConfirm: (receiptId) => dispatch(patchReceipt(receiptId)),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptDetail);
