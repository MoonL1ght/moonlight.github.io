// @flow

import {
  GET_FILTERS,
  GET_MODELS,
  GET_HEATMAPS,
  GET_SCORES,
  GET_PR,
  GET_TRANSACTIONS,
  GET_CF
} from '../constants/constants.jsx';

export const getFilters = () => {
  return {
    type: GET_FILTERS
  };
};

export const getModels = () => {
  return {
    type: GET_MODELS
  };
};

export const getHeatmaps = (msg) => {
  return {
    type: GET_HEATMAPS,
    payload: msg
  };
};

export const getScores = (msg) => {
  return {
    type: GET_SCORES,
    payload: msg
  };
};

export const getPR = (msg) => {
  return {
    type: GET_PR,
    payload: msg
  };
};

export const getTransactions = (msg) => {
  return {
    type: GET_TRANSACTIONS,
    payload: msg
  };
};

export const getCF = (msg) => {
  return {
    type: GET_CF,
    payload: msg
  };
};