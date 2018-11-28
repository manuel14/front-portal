import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Center, Label, Select, TextArea, Title } from '../../components';
import { getEmployees, postMensaje } from './action';
import { connect } from 'react-redux';


class AdminNotifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            contenido: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        this.props.onLoad();
    }

    handleChange(event) {
        if(event.target){
            this.setState({
                contenido: event.target.value
            })
        }
        else{
            this.setState({
                selectedOption: event.value
            })
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const contenido = this.state.contenido;
        const remitente = this.props.employees.find(emp =>
            emp.id === parseInt(localStorage.id)).id;
        console.log(remitente);
        const empleado = this.props.employees.find(emp =>
            emp.id === this.state.selectedOption).id;
        const msg = {
            asunto: `Mensaje de ${localStorage.username}`,
            contenido,
            empleado,
            remitente
        };
        this.props.msgSend(msg);
        this.setState({
            selectedOption: "",
            contenido: ""
        })
    }

    render() {
        return (
            <div>
                <Flex align="center">
                    <Box 
                        css={{backgroundColor:'#f0f0f0'}}
                        mx="auto" mt={'20px'} width={512}>
                        <Title margin={'10px 0px 10px 0px'} 
                            color={'black'} 
                            center>Notificaciones
                        </Title>
                        <form onSubmit={this.onSubmit} id="notifs">
                            <Select 
                                required={"required"} 
                                name={"emp"} 
                                clearable={false}
                                label={"Destinatario"} 
                                labelMargin={'0px 0px 5px 10px'}
                                name={"emp"}
                                margin = {'0px 10px'}
                                options={this.props.employees.map(
                                    emp => ({ value: emp.id, label: emp.nombre })
                                )} 
                                value={this.state.selectedOption} 
                                onChange={this.handleChange} 
                                placeholder="Seleccione destinatario">
                            </Select>
                            <Box mt={10}>
                                <Label margin={'0px 10px 0px 10px'}>Mensaje</Label>
                                <TextArea 
                                    margin={'0px 0px 0px 10px'} 
                                    name={"contenido"} 
                                    required={"required"} 
                                    rows="6" 
                                    value={this.state.contenido}
                                    onChange={this.handleChange}
                                    cols="50">
                                </TextArea>
                                <Center>
                                    <Button 
                                        large 
                                        type={"submit"} 
                                        margin={"10px auto 10px auto"} 
                                        primary
                                        >Enviar
                                    </Button>
                                </Center>
                            </Box>
                        </form>
                    </Box>
                </Flex>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.adminNotificationsReducer
})

const matchDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getEmployees()),
    msgSend: (msg) => dispatch(postMensaje(msg)),
    dispatch
})

export default connect(mapStateToProps, matchDispatchToProps)(AdminNotifications);