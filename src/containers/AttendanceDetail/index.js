import React, { Component } from 'react';
import { getAttendance, patchAttendance } from './action';
import { Box, Flex } from 'grid-styled';
import { connect } from 'react-redux'
import { Button, Image, Text, Title } from '../../components/index';
import Modal from 'react-responsive-modal';
import * as moment from 'moment';
import { withRouter } from 'react-router';

class AttendanceDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.history.location.state.abierto
        }
    }

    componentDidMount() {
        this.props.onLoad(this.props.match.params.attendanceId);
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
        this.props.history.push('/fichadas');
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
        const { attendance } = this.props;
        console.log(attendance);
        return (
            <div className="attendance">
                <Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center
                    closeOnOverlayClick={false}
                    showCloseIcon={false}
                    onOverlayClick={this.onOverlay}
                >
                    <Text block>
                        Si presiona en abrir dará su consentimiento de haber visto esta fichada
                    </Text>
                    <Button 
                        margin={"5px 5px 0px 20px"} 
                        className="open" 
                        id={attendance.pk} 
                        primary onClick={e => {
                            e.preventDefault()
                            this.onAccept(attendance.pk)
                            }}
                        >Abrir
                    </Button>
                    <Button 
                        margin={"5px 5px 0px 0px"} 
                        className="close" 
                        danger 
                        onClick={this.onCloseModal}
                        >Cerrar
                    </Button>
                </Modal>
                <Flex align="center">
                    <Box 
                        mt={'20px'} 
                        mx="auto">
                        <Title center>
                            Periodo: {moment(attendance.periodo, moment.ISO_8601).format('MM/YYYY')}
                        </Title>
                        <Box mt={'5px'}>
                            <a href="#">
                                <Image
                                    width={'48px'} 
                                    onClick={this.onPrint} 
                                    src={require('../../assets/printer.png')}>
                                </Image>
                            </a>
                            {/* <a href={attendance.archivo} download>
                                <Image src={require('../../assets/download.png')}>
                                </Image>
                            </a> */}
                        </Box>
                        <iframe width="396px" height="426px" src={attendance.archivo}>
                        </iframe>

                    </Box>
                </Flex>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state.attendanceDetailReducer,
});

const mapDispatchToProps = dispatch => ({
    onLoad: id => dispatch(getAttendance(id)),
    onConfirm: (attendanceId) => dispatch(patchAttendance(attendanceId)),
    dispatch,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AttendanceDetail));
