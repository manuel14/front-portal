import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from 'grid-styled';
import { getEmployee, updateEmployee, patchUser } from './action';
import { Center, Label, Button, InputText, Right, Text, Title } from '../../components/index';
import Modal from 'react-responsive-modal';
import {withRouter} from 'react-router';
import {logoutUser} from '../App/action';

class User extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      nombre: "",
      email: "",
      domicilio: "",
      telefono: "",
      open: false,
      old_password: "",
      password: "",
      second_password: ""
    }
  }

  componentDidMount() {
    this.props.onLoad();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nombre: nextProps.employee.nombre,
      email: nextProps.employee.user.email,
      domicilio: nextProps.employee.domicilio,
      telefono: nextProps.employee.telefono,
      password: nextProps.employee.user.password,
      second_password: nextProps.employee.user.password
    })
  }

  onSubmit(event) {
    event.preventDefault();
    const data = {
      id: localStorage.id,
      email: this.state.email,
      domicilio: this.state.domicilio,
      telefono: this.state.telefono

    }
    this.props.sendEmployee(data);
  }


  handleChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onAccept() {
    if(this.state.password !== this.state.second_password){
      alert("Las contraseñas no coinciden");
      return
    }
    this.setState({
      open: false
    })
    const data={new_password: this.state.password}
    this.props.onChangePassword(data);
    setTimeout(() => {this.props.onLogout()}, 3000);
    
  }

  render() {
    return (
      <Flex align="center">

        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          center
          closeOnOverlayClick={false}
          showCloseIcon={false}
          onOverlayClick={this.onOverlay}
        >
          <Title center>
            Cambio de contraseña
          </Title>
          <Label
            display={'block'}
            >
            Contraseña:
          </Label>
          <InputText 
            display={'block'}
            type={'password'}
            name={'password'}
            onChange={this.handleChange}
            value={this.state.password}
            >
          </InputText>
          <Label
            display={'block'}
            >
            Repita contraseña:
          </Label>
          <InputText 
            id={"second_password"}
            onChange={this.handleChange}
            display={'block'}
            type={'password'}
            name={'second_password'}
            value={this.state.second_password}
            >
          </InputText>
          <Button 
            margin={"10px 20px 0px 0px"} 
            className="open"  
            primary 
            onClick={e => {
              e.preventDefault()
              this.onAccept()
            }}
            >Guardar
          </Button>
          <Button 
            margin={"5px 5px 0px 0px"} 
            className="close" 
            danger 
            onClick={this.onCloseModal}
            >Cancelar
          </Button>
        </Modal>

        <Box css={{
          backgroundColor: '#f0f0f0'
        }}
          mt={30} mx="auto" width={768}>
          <Title color={'black'} center>Datos personales</Title>
          <Right>
            <Button onClick={this.onOpenModal} margin={'0px 10px 0px 0px'} primary large>
              Cambiar contraseña
          </Button>
          </Right>
          <form onSubmit={this.onSubmit} id="user">
            <Label margin={'10px 0px 0px 10px'}>
              Empleado:
            </Label>
            <Title display={'inline-block'} margin={'0px 10px'} >{this.state.nombre}</Title>
            <Label
              display={'block'}
              margin={'10px 0px 0px 10px'}
            >Domicilio:
            </Label>
            <InputText
              margin={'0px 10px'}
              id="domicilio"
              width={'360px'}
              value={this.state.domicilio}
              name="domicilio"
              onChange={this.handleChange}
            >
            </InputText>
            <Label
              margin={'10px 0px 0px 10px'}
              display={"block"}
            >Correo:
            </Label>
            <InputText
              margin={'0px 10px'}
              id="email"
              name="email"
              width={'260px'}
              onChange={this.handleChange}
              value={this.state.email}
            >
            </InputText>
            <Label
              margin={'10px 0px 0px 10px'}
              display={"block"}
            >Teléfono:
            </Label>
            <InputText
              type={'number'}
              margin={'0px 10px'}
              id="telefono"
              name="telefono"
              onChange={this.handleChange}
              value={this.state.telefono}
            >
            </InputText>
            <Box mb={10} ml={10} mt={10}>
              <Center>
                <Button
                  large
                  margin={'0 auto 0 auto'}
                  type={"submit"}
                  margin={"10px auto 0px auto"}
                  primary
                >Guardar
                </Button>
              </Center>
            </Box>
          </form>
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = state => ({
  ...state.userReducer
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutUser()),
  onLoad: () => dispatch(getEmployee(localStorage.id)),
  sendEmployee: (employee) => dispatch(updateEmployee(employee)),
  onChangePassword: (password) => dispatch(patchUser(password)),
  dispatch

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
