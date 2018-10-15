import React from "react";
import PropTypes from "prop-types";
import ApiRequestWrapper from "../ApiRequest/ApiRequestWrapper";

const BASE_URL = "https://api.spotify.com/v1/search";

const Search = props => {
  let url = BASE_URL;
  let options = { ...props.options };
  let type = [];
  if (props.album) type.push("album");
  if (props.artist) type.push("artist");
  if (props.playlist) type.push("playlist");
  if (props.track) type.push("track");
  options.type = type.join(",");
  options.q = props.query;

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  album: PropTypes.bool,
  artist: PropTypes.bool,
  playlist: PropTypes.bool,
  track: PropTypes.bool,
  options: PropTypes.object
};

export default Search;