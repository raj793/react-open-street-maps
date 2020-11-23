/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeRegionAction } from '../../actions/mapActions';
import mapConstants from '../../constants/mapConstants';

const { Option } = Select;

/*
  Input component implments the Antd.Select component dropdown and load logic
*/
const Input = ({ region, nightMode }) => {
  // Selector keeps dropdown selector based on Redux state
  const [selectedRegion, setSelectedRegion] = useState(region.id);

  const dispatch = useDispatch();

  // Handler to dispatch Redux action to load changed region on 'Load' button click
  const changeRegion = (regionObj) => {
    dispatch(changeRegionAction(regionObj));
  };

  return (
    <>
      <Select
        defaultValue={mapConstants.REGIONS[0].id}
        style={{ width: 300 }}
        onChange={(value) => { setSelectedRegion(value); }}
      >
        {
          mapConstants.REGIONS.map((dat) => <Option value={dat.id}>{dat.label}</Option>)
        }
      </Select>
      <Button
        type="primary"
        style={{ width: 130, backgroundColor: nightMode ? '#131629' : null, border: 0 }}
        onClick={() => { changeRegion(selectedRegion); }}
      >
        Load
      </Button>
    </>
  );
};

function mapStateToProps(store) {
  return {
    region: store.app.region,
    nightMode: store.app.nightMode,
  };
}

Input.propTypes = {
  region: PropTypes.object.isRequired,
  nightMode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Input);
