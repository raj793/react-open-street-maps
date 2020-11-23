import mapReducerConstants from '../constants/mapReducerConstants';
import mapConstants from '../constants/mapConstants';

const initialState = {
  region: mapConstants.REGIONS[0],
  nightMode: false,
};

/*
 Reducer state operations for Redux event dispatches
*/
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case mapReducerConstants.RESET: {
      const stateObj = { ...initialState };
      return stateObj;
    }
    case mapReducerConstants.REGION_CHANGE: {
      const stateObj = { ...state };
      stateObj.region = action.region;
      return stateObj;
    }
    case mapReducerConstants.NIGHT_MODE: {
      const stateObj = { ...state };
      stateObj.nightMode = !stateObj.nightMode;
      return stateObj;
    }
    default: return state;
  }
}
