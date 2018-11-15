import { Component } from 'react';
import { slice, orderBy } from 'lodash';

class Paginate extends Component {
  getPage = (data, page, size) => {
    if (!page) return data;
    const start = (page - 1) * size;
    const end = start + size;
    return slice(data, start, end);
  };

  render() {
    const { data, page, size, sortBy, order, children } = this.props;
    const pageData = this.getPage(orderBy(data, sortBy, order), page, size);
    return children(pageData);
  }
}

export default Paginate;
