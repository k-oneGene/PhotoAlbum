import React from 'react';
import PropTypes from 'prop-types';
import AlbumCollectionContainer from './AlbumCollectionContainer'

const AlbumsPage = () => {
  return (
    <div>
      <h1 className="text-center">Albums Page</h1>
      <AlbumCollectionContainer />
    </div>
  );
};


AlbumsPage.propTypes = {};

export default AlbumsPage;
