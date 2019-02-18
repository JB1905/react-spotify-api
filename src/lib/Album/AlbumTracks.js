import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/albums';

/**
 * Get Spotify catalog information about an album’s tracks.<br/>
 * Optional parameters can be used to limit the number of tracks returned.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/albums/get-albums-tracks/#response-format)
 * @example ../../docs/Album/AlbumTracks.md
 */
const AlbumTracks = props => {
    let url = BASE_URL + `/${props.id}/tracks`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

AlbumTracks.propTypes = {
    /** The Spotify ID for the album */
    id: PropTypes.string.isRequired,
    /** Options object */
    options: PropTypes.shape({
        limit: PropTypes.string,
        offset: PropTypes.string,
        market: PropTypes.string
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

AlbumTracks.defaultProps = {
    options: {}
};

export default AlbumTracks;
