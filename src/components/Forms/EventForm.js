import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { InputText, Center, Checkbox, Label, TextArea } from '../index';
import * as moment from 'moment';
import DatePicker from 'react-datepicker';
import './datepicker.css';

class EventForm extends Component {

    constructor(props){
        this.state = {
            moment: moment(),
            open: false
        }
    }

    render() {
        return (
            <Flex align="center">
                <Box css={{
                    backgroundColor: '#f0f0f0'
                }}
                    mt={30} mx="auto" width={512}>
                    <form onSubmit={this.onSubmit} id="events">
                        <Label margin={'10px 0px 0px 10px'}>Nombre:</Label>
                        <InputText margin={'0px 10px'} id="nombre"></InputText>
                        <Label margin={'10px 0px 0px 10px'} display={"block"}>Descripción:</Label>
                        <TextArea margin={'0px 10px'} id="descripcion" cols={"50"} rows={"6"}></TextArea>
                        <Label margin={'10px 0px 0px 10px'}>
                            Escoja una fecha y hora para el evento
                        </Label>
                        <Box ml={10} mt={10}>
                            <DatePicker
                                customInput={<InputText />}
                                selected={this.state.moment}
                                onChange={this.handleChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                injectTimes={[
                                    moment().hours(0).minutes(1),
                                    moment().hours(12).minutes(5),
                                    moment().hours(23).minutes(59)
                                ]}
                                dateFormat="LLL"
                            />
                        </Box>
                        <Box ml={10} mt={10}>
                            <Checkbox name="allday" value="Todo el día?" checked={false}>Todo el día?</Checkbox>
                        </Box>
                        <Box ml={10} mt={10}>
                            <Center>
                                <Button large margin={'0 auto 0 auto'} type={"submit"} margin={"10px auto 0px auto"} primary>Crear</Button>
                            </Center>
                        </Box>
                    </form>
                </Box>
            </Flex>
        )
    }
}
