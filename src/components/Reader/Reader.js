import React, { Component } from 'react';
import T from 'prop-types';
import qS from 'query-string';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import s from './Reader.module.css';

const pageNumberString = (location, items) => {
  const pageNumber = +qS.parse(location.search).item;
  return pageNumber > 0 && pageNumber <= items.length ? pageNumber : 1;
};

export default class Reader extends Component {
  static propTypes = {
    history: T.shape({
      replace: T.func.isRequired,
      push: T.func.isRequired,
    }).isRequired,
    location: T.shape({
      search: T.string.isRequired,
      pathname: T.string.isRequired,
    }).isRequired,
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { history, location, items } = this.props;
    const pageNumber = pageNumberString(location, items);

    history.replace({
      pathname: location.pathname,
      search: `item=${pageNumber}`,
    });
  }

  onIncrement = () => {
    const { history, location, items } = this.props;
    history.push({
      ...location,
      search: `item=${pageNumberString(location, items) + 1}`,
    });
  };

  onDecrement = () => {
    const { history, location, items } = this.props;
    history.push({
      ...location,
      search: `item=${pageNumberString(location, items) - 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const pageNumber = pageNumberString(location, items);

    return (
      <div className={s.reader}>
        <Counter
          pageNumber={pageNumber}
          lastPage={items.length}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        <Publication
          currentPublicTitle={items[pageNumber - 1].title}
          currentPublic={items[pageNumber - 1].text}
        />
      </div>
    );
  }
}
