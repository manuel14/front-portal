import React from 'react';
import { Label, RadioInput, RadioLabel, RadioSpan } from './index';



class Radios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            check: this.props.defaultChecked,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            check: event.target.value
        })
    }
    render() {
        const { name, values } = this.props;
        return (
            <div className="Radio">
                {values.map(result => (
                    <RadioLabel 
                        key={result}>
                        <RadioInput
                            className="radio"
                            type="radio"
                            value={result}
                            name={name}
                            checked={result === this.state.check}
                            onChange={this.handleChange}
                            display={result === this.state.check ? 'block' : ''}
                            bcolor={result === this.state.check ? '#2196F3' : '#b2b2b2'}
                        >
                        </RadioInput>
                        <RadioSpan 
                        bcolor={result === this.state.check ? '#2196F3' : '#b2b2b2'}
                        display={result === this.state.check ? 'block' : ''} >
                        </RadioSpan>
                        {result.substring(0,3)}
                    </RadioLabel>
                ))}
            </div>
        )
    }
}

export default Radios;
