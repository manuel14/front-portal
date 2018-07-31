import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import TableData from './TableData';
import { SortIcon, SortUpIcon, SortDownIcon } from './icons';

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }


  render() {
    const {
      children,
      sortable,
      selected,
      order,
      columnKey,
      onClick,
      ...rest
    } = this.props;
    return (
      <TableData
        {...rest}
      >
        <Flex align="center">
          {sortable && (
            <Box>
              {selected ? (
                <Flex align="flex-start">
                  {order === 'asc' && <SortUpIcon size={16} color={'#fff'} />}
                  {order === 'desc' && (
                    <SortDownIcon size={16} color={'#fff'} />
                  )}
                </Flex>
              ) : (
                <Flex align="flex-start">
                  <SortIcon
                    size={16}
                    color={this.state.hover ? '#fff' : '#99bacd'}
                  />
                </Flex>
              )}
            </Box>
          )}
          <Box>{children}</Box>
        </Flex>
      </TableData>
    );
  }
}

export default TableHeader;
