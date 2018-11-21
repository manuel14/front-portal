import React, { Component } from 'react';
import { getReceipt, patchReceipt } from './action';
import { Box, Flex } from 'grid-styled';
import { connect } from 'react-redux'
import { Button, Image, Text, Title } from '../../components/index';
import Modal from 'react-responsive-modal';
import * as moment from 'moment';
import { withRouter } from 'react-router';

class ReceiptDetail extends Component {
    constructor(props) {
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

    onAccept(id) {
        this.setState({
            open: false
        })
        this.props.onConfirm(id);
    }

    onPrint() {
        window.print();
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
                    <Text
                        size={'18px'} 
                        block
                    >Si hace click en abrir dará su consentimiento de haber visto este recibo de sueldo</Text>
                    <Button margin={"5px 5px 0px 20px"} className="open" id={receipt.pk} primary onClick={e => {
                        e.preventDefault()
                        this.onAccept(receipt.pk)
                    }}
                    >Abrir
                                        </Button>
                    <Button margin={"5px 5px 0px 20px"} className="close" danger onClick={this.onCloseModal}>Cerrar
                                        </Button>
                </Modal>
                <Flex align="center">
                    <Box mt={'20px'} mx="auto">
                        <Title center>
                            Periodo: {moment(receipt.periodo, moment.ISO_8601).format('MM/YYYY')}
                        </Title>
                        <Box mt={'5px'}>
                           {/*  <a href={receipt.archivo}>
                                <Image 
                                    width={'48px'}
                                    onClick={this.onPrint} 
                                    src={require('../../assets/printer.png')}>
                                </Image>
                            </a> */}
                            {/* <a href={receipt.archivo} download>
                                <Image src={require('../../assets/download.png')}>
                                </Image>
                            </a> */}
                        </Box>
                        <iframe 
                            name="file" 
                            id="file" 
                            width="396px" 
                            height="426px" 
                            src={receipt.archivo}>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReceiptDetail));
