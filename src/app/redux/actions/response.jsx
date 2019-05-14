import {
  FILTERS,
  MODELS,
  HEATMAPS,
  SCORES,
  PR,
  TRANSACTIONS,
  CF
} from '../constants/constants.jsx';

export const filters = (msg, error) => {
  return {
    type: FILTERS,
    payload: msg,
    error: error
  };
};

export const models = (msg, error) => {
  return {
    type: MODELS,
    payload: msg,
    error: error
  };
};

export const heatmaps = (msg, error) => {
  return {
    type: HEATMAPS,
    payload: msg,
    error: error
  };
};

export const scores = (msg, error) => {
  return {
    type: SCORES,
    payload: msg,
    error: error
  };
};

export const pr = (msg, error) => {
  return {
    type: PR,
    payload: msg,
    error: error
  };
};

export const transactions = (msg, error) => {
  return {
    type: TRANSACTIONS,
    payload: msg,
    error: error
  };
};

export const cf = (msg, error) => {
  return {
    type: CF,
    payload: msg,
    error: error
  };
};