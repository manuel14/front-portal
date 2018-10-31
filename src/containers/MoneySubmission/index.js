import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Button, Center, Label, Select, TextArea, Title, InputText } from '../../components/index';


class MoneySubmission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            devolucion: null,
            importe: null,
            motivo: null

        }
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.value
        })
    }
    onSubmit(){
        const amount = document.querySelector('#amount')
        const motive = document.querySelector('#motive');

        let moneyData = {
            motivo: motive,
            import: amount
        };

        
    }
    

    render() {
        const opts = [1,2,3,4,5,6,7,8,9,10,11,12];
        console.log(opts);
        
        return (
            <Flex align="center">
                <Box css={{
                    backgroundColor: '#f0f0f0'
                }}
                    mt={30} mx="auto" width={512}>
                    <form onSubmit={this.onSubmit} id="money">
                        <Title center>Adelanto de sueldo</Title>
                        <Label margin={'20px 0px 0px 10px'}>Monto</Label>
                        <InputText display={'block'} name="amount"></InputText>
                        <br></br>
                        <Label margin={'10px 0px 10px 10px'}>Motivo</Label>
                        <TextArea
                            margin={'0px 0px 0px 10px'}
                            name={"motive"} 
                            required={"required"} 
                            rows="6" 
                            cols="50">
                        </TextArea>
                        <Box ml={10} mt={10} mb={10}>
                            <Select 
                                required={"required"} 
                                name={"devolucion"} 
                                label={"Mes devolución"} 
                                name={"emp"}
                                margin = {'10px 10px 10px 0px'}
                                options={opts.map(opt => ({value:opt, label:opt}))}
                                value={this.state.devolucion} 
                                onChange={this.handleChange} 
                                placeholder="Seleccione Mes de devolución">
                            </Select>
                        </Box>
                        <Center>
                            <Button 
                                center 
                                display={'block'} 
                                large 
                                primary 
                                center
                                >Enviar
                            </Button>
                        </Center>
                    </form>
                </Box>
            </Flex>
        )
    }

}



export default MoneySubmission;