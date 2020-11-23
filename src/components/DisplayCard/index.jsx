/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  PoundCircleOutlined,
  DollarCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

/*
  DisplayCard component displays all the location related information in Antd.Card
*/
const DisplayCard = ({ region, nightMode }) => {
  const quarterGrid = '25%';
  const fullGrid = '100%';
  const themeColor = nightMode ? '#131629' : '#ffffff';
  const themeText = nightMode ? '#ffffff' : '#000000';

  const gridStyle = (width) => ({
    width: `${width}`,
    textAlign: 'center',
    justifyContent: 'center',
    color: themeText,
  });

  const cardStyle = () => ({ width: 430, marginTop: 16, backgroundColor: themeColor });

  const getCurrencyIcon = (currency) => {
    switch (currency) {
      case 'INR': {
        return <i className="fas fa-rupee-sign" style={{ fontSize: 18, color: themeText }} />;
      }
      case 'GBP': {
        return <PoundCircleOutlined style={{ fontSize: 20, color: themeText }} />;
      }
      case 'USD': {
        return <DollarCircleOutlined style={{ fontSize: 20, color: themeText }} />;
      }
      default: return <div>N/A</div>;
    }
  };

  return (
    <Card
      style={cardStyle()}
      loading={false}
      title={<div style={{ color: themeText }}>{region.label}</div>}
    >
      <Card.Grid style={gridStyle(quarterGrid)}>{ getCurrencyIcon(region.currency) }</Card.Grid>
      <Card.Grid style={gridStyle(quarterGrid)}>{ region.speed }</Card.Grid>
      <Card.Grid style={gridStyle(quarterGrid)}>{ region.distance }</Card.Grid>
      <Card.Grid style={gridStyle(quarterGrid)}>{ region.volume }</Card.Grid>
      <Card.Grid style={gridStyle(fullGrid)}>
        <ClockCircleOutlined />
        {' '}
        {region.timezone}
      </Card.Grid>
    </Card>
  );
};

function mapStateToProps(store) {
  return {
    region: store.app.region,
    nightMode: store.app.nightMode,
  };
}

DisplayCard.propTypes = {
  region: PropTypes.object.isRequired,
  nightMode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(DisplayCard);
