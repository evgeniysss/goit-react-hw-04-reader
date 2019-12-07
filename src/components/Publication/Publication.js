import React from 'react';
import T from 'prop-types';
import s from './Publication.module.css';

const Publication = ({ currentPublicTitle, currentPublic }) => (
  <article className={s.publication}>
    <h2>{currentPublicTitle}</h2>
    <p>{currentPublic}</p>
  </article>
);
Publication.propTypes = {
  currentPublicTitle: T.string.isRequired,
  currentPublic: T.string.isRequired,
};
export default Publication;
