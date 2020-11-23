import mapReducerConstants from '../constants/mapReducerConstants';

/*
  Action creator helper to change region data
*/
export function changeRegionData(region) {
  return {
    type: mapReducerConstants.REGION_CHANGE,
    region,
  };
}

/*
  Action creator helper to change night mode data
*/
export function changeNightMode() {
  return { type: mapReducerConstants.NIGHT_MODE };
}
