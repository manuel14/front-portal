import React, { Component } from 'react';
import { times } from 'lodash';
import { Flex } from 'grid-styled';
import PagerItem from './PagerItem';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

const arrowColor = {
  enabled: '#fff',
  disabled: 'rgba(255, 255, 255, 0.5)',
};
class Pager extends Component {
  onPageChange = page => () => {
    this.props.onPageChange && this.props.onPageChange(page);
  };

  render() {
    const {
      count,
      current,
      showPages,
      onPrev,
      onNext,
      customPagerText,
    } = this.props;

    return (
      <Flex align="center">
        <PagerItem onClick={current !== 0 && onPrev} clickeable={current !== 0}>
          <ArrowLeftIcon
            color={current > 0 ? arrowColor.enabled : arrowColor.disabled}
          />
        </PagerItem>
        {showPages &&
          times(count, index => (
            <PagerItem
              key={index}
              onClick={this.onPageChange(index)}
              selected={current === index}
            >
              {index + 1}
            </PagerItem>
          ))}
        {customPagerText && <div>{customPagerText}</div>}
        <PagerItem
          onClick={current !== count - 1 && onNext}
          clickeable={current !== count - 1}
        >
          <ArrowRightIcon
            color={
              current < count - 1 ? arrowColor.enabled : arrowColor.disabled
            }
          />
        </PagerItem>
      </Flex>
    );
  }
}

export default Pager;
