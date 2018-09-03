import React, {Component} from 'react';
import {Button, CustomModalContainer, CustomModalMain, Text} from '.';

class CustomModal extends Component {
    constructor(props){
        super(props)
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            open: this.props.open
        }
    }

    openModal(){
        this.setState({
            open: true
        })
    }

    closeModal(){
        this.setState({
            open:false
        })
    }
    render(){
        const {message} = this.props;
        return(
            <CustomModalContainer>
                <CustomModalMain>
                    <Text block>{message}</Text>
                    <Button danger onClick={this.closeModal}>
                        Cerrar
                    </Button>
                </CustomModalMain>
            </CustomModalContainer>
        )
    }
}

export default CustomModal;