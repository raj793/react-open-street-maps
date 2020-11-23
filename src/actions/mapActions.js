import { changeRegionData, changeNightMode } from '../action-creators/mapActionCreators';
import mapConstants from '../constants/mapConstants';

/*
  Region change action
*/
export function changeRegionAction(region) {
  return function (dispatch) {
    dispatch(changeRegionData(mapConstants.REGIONS.find((x) => x.id === region)));
  };
}

/*
  Night mode change action
*/
export function changeNightModeAction() {
  return function (dispatch) {
    dispatch(changeNightMode());
  };
}
