/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Map, TileLayer,
} from 'react-leaflet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/*
  Osm component implements OpenStreetMaps using React-Leaflet in Dark and Light modes
*/
const Osm = ({ region, nightMode }) => (
  <Map center={region.coordinates} zoom={5} style={{ height: '86.2vh' }}>
    {nightMode
      ? (
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
      )
      : (
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      )}
  </Map>
);

function mapStateToProps(store) {
  return {
    region: store.app.region,
    nightMode: store.app.nightMode,
  };
}

Osm.propTypes = {
  region: PropTypes.object.isRequired,
  nightMode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Osm);
