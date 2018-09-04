import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Label, Text, Title, CardContainer } from '../../components';
import { Box, Flex } from 'grid-styled';
import { getNotifications } from './action';

class Notifications extends Component {
    componentDidMount() {
        this.props.onLoad();
    }
    render() {
        return (
            <Flex align="center">
                {this.props.notifications.map(notif => (
                    <CardContainer>
                        <Card>
                            <Title>{notif.remitente}</Title>
                            <Label>{"Asunto: "}</Label>
                            <Text>{notif.asunto}</Text>
                        </Card>
                    </CardContainer>

                ))}
            </Flex>
        )
    }
}

const mapStateToProps = state => ({
    ...state.notificationReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getNotifications()),
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);