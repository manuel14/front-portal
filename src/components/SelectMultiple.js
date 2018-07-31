import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import { Flex, Box } from 'grid-styled';

import SelectArrow from './SelectArrow';
import SelectContainer from './SelectContainer';
import SelectDialog from './SelectDialog';
import SelectLabel from './SelectLabel';
import SelectOption from './SelectOption';
import SelectOptionGroup from './SelectOptionGroup';
import SelectPlaceholder from './SelectPlaceholder';
import SelectSelector from './SelectSelector';
import SelectText from './SelectText';
import SelectAction from './SelectAction';
import SelectActionGroup from './SelectActionGroup';

const toggleItem = (collection, item) => {
  const ix = collection.indexOf(item);
  return ix !== -1
    ? collection.filter(cur => cur !== item)
    : [...collection, item];
};

class SelectMultiple extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, value: props.value };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (prevProps.value && prevProps.value.length !== value.length) {
      this.setState({ value });
    }
  }

  toggle = () => {
    const { value } = this.props;
    this.setState(prevState => {
      return !prevState.open ? { open: true } : { open: false, value };
    });
  };

  onSelect = option => () => {
    const { value } = this.state;
    const newValue = toggleItem(value, option);
    this.setState({ value: newValue });
  };

  onSelectAll = () => {
    const { value } = this.state;
    const { options } = this.props;
    const newValue = value.length === options.length ? [] : options;
    this.setState({ value: newValue });
  };

  onCancel = () => this.setState({ open: false, value: this.props.value });

  onAccept = () => {
    this.setState({ open: false });
    this.props.onChange(this.state.value);
  };

  renderText = () => {
    const {
      placeholder,
      selectAllLabel,
      options,
      value,
      renderText,
    } = this.props;
    if (!value || value.length === 0) {
      return <SelectPlaceholder>{placeholder}</SelectPlaceholder>;
    } else if (options.length === value.length) {
      return selectAllLabel;
    } else {
      return renderText(value);
    }
  };

  renderDialog() {
    const { options, right, selectAll, selectAllLabel } = this.props;
    const { value } = this.state;

    return (
      <SelectDialog right={right}>
        <SelectOptionGroup>
          {selectAll && (
            <SelectOption onClick={this.onSelectAll} selected>
              <Flex align="baseline">
                <input
                  type="checkbox"
                  checked={options.length === value.length}
                  readOnly
                />
                <Box ml="8px">{selectAllLabel}</Box>
              </Flex>
            </SelectOption>
          )}
          {options.map(item => (
            <SelectOption key={item.label} onClick={this.onSelect(item)}>
              <Flex align="baseline">
                <input
                  type="checkbox"
                  checked={value.indexOf(item) !== -1}
                  readOnly
                />
                <Box ml="8px">{item.label}</Box>
              </Flex>
            </SelectOption>
          ))}
        </SelectOptionGroup>
        <SelectActionGroup>
          <SelectAction onClick={this.onCancel}>Cancel</SelectAction>
          <SelectAction
            disabled={value.length === 0}
            onClick={this.onAccept}
            default
          >
            Apply
          </SelectAction>
        </SelectActionGroup>
      </SelectDialog>
    );
  }

  renderContent() {
    const { open } = this.state;
    const { label } = this.props;

    return (
      <SelectContainer>
        {label && <SelectLabel>{label}</SelectLabel>}
        <SelectSelector onClick={this.toggle} selected={open}>
          <SelectText>{this.renderText()}</SelectText>
          <SelectArrow up={open} />
        </SelectSelector>
        {open && this.renderDialog()}
      </SelectContainer>
    );
  }

  render() {
    const { open } = this.state;
    return (
      <ClickOutside onClickOutside={open ? this.onCancel : () => {}}>
        {this.renderContent()}
      </ClickOutside>
    );
  }
}

SelectMultiple.defaultProps = {
  selectAllLabel: 'All',
  defaultValue: [],
  renderText: value => value.map(v => v.label).join(', '),
};

export default SelectMultiple;
