import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { Avatar, Radios, Text } from '.'

class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            team1: this.props.team1,
            team2: this.props.team2,
            result: this.props.result
        }
    }
    render() {
        const {
            id,
            team1,
            team2,
            result
        } = this.props;
        const img_team1 = team1.toLowerCase();
        const img_team2 = team2.toLowerCase();
        return (
            <div className="match">
                <Box mx='auto' >
                    <Avatar margin={'0px 40px 0px 40px'} width={48} height={48} src={window.location.origin + `/countries_images/${img_team1}.svg`}>
                    </Avatar>
                    <Text margin={'0px 0px 00px 0px'} color='#006aa3' size={'16px'}>{team1}</Text>
                    <Avatar margin={'0px 0px 0px 60px'} width={48} height={48} src={window.location.origin + `/countries_images/${img_team2}.svg`}>
                    </Avatar>
                    <Text color='#006aa3' size={'16px'}>{team2}</Text>
                    <Flex justifyContent="center">
                        <Radios
                            values={[team1, team2, "TIE"]}
                            name={id} defaultChecked="tie" />
                    </Flex>
                </Box>
            </div>
        )
    }
}
export default Match;