import React, {Component} from 'react';
import {Button,Center, InputText, Label, Title, Text, TextArea} from '../../components/index';
import {Box, Flex} from 'grid-styled';
import {getNotification, patchNotification, postNotification} from './action';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import * as moment from 'moment';
import Modal from 'react-responsive-modal';


class NotificationDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.onClick = this.onClick.bind(this);
        this.onSend = this.onSend.bind(this);
    }

    componentDidMount() {
        this.props.onLoad(this.props.match.params.notificationId);
    }

    onClick(event){
        event.preventDefault();
        this.setState({
            open: true
        })
    }

    onSend = id => event =>{
        const msg = document.querySelector("#msg").value;
        const asunto = document.querySelector("#asunto").value;
        const current = new Date().toISOString();
        const notification = {
            asunto,
            contenido: msg,
            remitente: this.props.notification.empleado,
            empleado: this.props.notification.remitente
        }
        this.props.onUpdate(id);
        this.props.send(notification);
        this.setState({
            open: false
        })
    }

    closeModal(){
        this.setState({
            open: false
        })
    }
    
    render() {
        const {notification} = this.props;
        return (
            <div>
                <Flex mt={'40px'} align="center">
                    <Box css={{backgroundColor:'#f0f0f0'}} mx="auto" width={512}>
                        <Label 
                            margin={'0px 0px 10px 10px'} 
                            display={"block"}>
                            Remitente: {notification.remitente ? notification.remitente.nombre : null}
                        </Label>
                        <Text 
                            margin={'10px 0px 0px 10px'}>
                            Hora: {moment(notification.fecha_creacion, moment.ISO_8601).format('DD/MM/YYYY HH:MM:SS')}
                            </Text>
                        <Label 
                            margin={'10px 0px 0px 10px'} 
                            display={"block"}>Asunto: {notification.asunto}</Label>
                        <Text margin={'10px 0px 0px 10px'} block>{notification.contenido}</Text>
                        {!notification.contestado &&
                        <Center>
                            <Button onClick={this.onClick} margin={"10px 0px 0px 0px"} primary>Responder</Button>
                        </Center>
                        }
                    </Box>
                </Flex>
                <Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center
                    closeOnOverlayClick={false}
                    showCloseIcon={false}
                    onOverlayClick={this.onOverlay}
                  > 
                    <Label>Asunto: </Label>
                    <InputText id="asunto"></InputText>
                    <Label display={"block"}>{notification.remitente ? `Mensaje para ${notification.remitente.nombre}`: `Mensaje`}</Label>
                    <TextArea id="msg" required={"required"} rows="6" cols="50"></TextArea>
                    <Button margin={"5px 5px 0px 20px"} primary onClick={this.onSend(notification.pk)}
                    >Responder
                    </Button>
                    <Button onClick={this.closeModal.bind(this)} danger>Cancelar</Button>
                  </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.notificationDetailReducer,
});

const mapDispatchToProps = dispatch => ({
    onLoad: id => dispatch(getNotification(id)),
    send: notification => dispatch(postNotification(notification)),
    onUpdate: id => dispatch(patchNotification(id)),
    dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationDetail));