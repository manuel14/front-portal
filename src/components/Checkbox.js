import React from 'react';

class CheckBox extends React.Component {
    constructor(props) {
        super(props)
        this.onCheck = this.onCheck.bind(this);
        this.state = {
            checked: this.props.checked
        }
    }
    onCheck() {
        this.setState(prevState =>
            ({
                checked: !prevState.checked
            }))
    }
    render() {
        const { id, name,value } = this.props;
        return (
            <div>
                {value}
                <input
                    type="checkbox"
                    name={name}
                    id={id}
                    checked={this.state.checked}
                    onChange={this.onCheck}
                />
            </div>
        )
    }

}

export default CheckBox;