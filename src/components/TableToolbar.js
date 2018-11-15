import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import ToolbarContainer from './ToolbarContainer';
import ToolbarButton from './ToolbarButton';
import { ExportIcon } from './icons';

class TableToolbar extends Component {
  onPageChange = step => event => {
    const pages = Math.ceil(this.props.items / this.props.size);
    const next = this.props.page + step;
    if (next > 0 && pages >= next) {
      this.props.onPageChange(next);
    }
  };

  render() {
    const pages = Math.ceil(this.props.items / this.props.size) || 1;
    return (
      <ToolbarContainer>
        {this.props.children}
        <Flex mx="auto" align="center">
          {this.props.onExport && (
            <ToolbarButton onClick={this.props.onExport()}>
              <ExportIcon color={'#fff'} /> Export
            </ToolbarButton>
          )}
          {this.props.showTotal &&
            this.props.items !== 0 && (
              <Box px={16}>{this.props.items} Items</Box>
            )}
          <Box px={16}>
            Página: {this.props.page} de {pages}
          </Box>
          <ToolbarButton
            onClick={this.onPageChange(-1)}
            mr={1}
            disable={pages === 1 || this.props.page === 1}
          >
            Ant
          </ToolbarButton>
          <ToolbarButton
            onClick={this.onPageChange(1)}
            disable={pages === 1 || this.props.page === pages}
          >
            Sig
          </ToolbarButton>
        </Flex>
      </ToolbarContainer>
    );
  }
}

export default TableToolbar;
