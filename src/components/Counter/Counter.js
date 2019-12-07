import React from 'react';
import T from 'prop-types';
import Controls from '../Controls/Controls';
import s from './Counter.module.css';

const Counter = ({ pageNumber, lastPage, onIncrement, onDecrement }) => (
  <>
    <p className={s.counter}>
      {pageNumber}/{lastPage}
    </p>
    <Controls
      pageNumber={pageNumber}
      lastPage={lastPage}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  </>
);
Counter.propTypes = {
  pageNumber: T.number.isRequired,
  lastPage: T.number.isRequired,
  onIncrement: T.func.isRequired,
  onDecrement: T.func.isRequired,
};
export default Counter;
