import {combineReducers} from 'redux';
import {
  FILTERS,
  MODELS,
  HEATMAPS,
  SCORES,
  PR,
  TRANSACTIONS,
  CF
} from '../constants/constants.jsx';

const initialState = {
  filters: []
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS:
      return {
        ...state, filtersValues: action.payload, error: action.error
      };
    case MODELS:
      return {
        ...state, models: action.payload, error: action.error
      };
    default:
      return state;
  }
};

const initialHeatmapsState = {
  data: {}
};

const heatmaps = (state = initialHeatmapsState, action) => {
  switch (action.type) {
    case HEATMAPS:
      return {
        ...state, data: action.payload, error: action.error
      };
    default:
      return state;
  }
};

const initialScoresState = {
  data: {}
};

const scores = (state = initialScoresState, action) => {
  switch (action.type) {
    case SCORES:
      return {
        ...state, data: action.payload, error: action.error
      };
    default:
      return state;
  }
};

const initialPrState = {
  data: {}
};

const pr = (state = initialPrState, action) => {
  switch (action.type) {
    case PR:
      return {
        ...state, data: action.payload, error: action.error
      };
    default:
      return state;
  }
};

const initialTransactionsState = {
  data: {}
};

const transactions = (state = initialTransactionsState, action) => {
  switch (action.type) {
    case TRANSACTIONS:
      return {
        ...state, data: action.payload, error: action.error
      };
    default:
      return state;
  }
};

const initialCustomfactsState = {
  data: {}
};

const customfacts = (state = initialCustomfactsState, action) => {
  switch (action.type) {
    case CF:
      return {
        ...state, data: action.payload, error: action.error
      };
    default:
      return state;
  }
};

export default combineReducers({
  app,
  heatmaps,
  scores,
  pr,
  transactions,
  customfacts
});
