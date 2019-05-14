// @flow

import * as resActions from '../actions/response.jsx';
import Adapter from './adapter.jsx'
import {
  GET_FILTERS,
  GET_MODELS,
  GET_HEATMAPS,
  GET_SCORES,
  GET_PR,
  GET_TRANSACTIONS,
  GET_CF
} from '../constants/constants.jsx';

let adapter = new Adapter();

export default (store) => (next) => (action) => {
  const result = next(action);

  if (adapter) {
    switch (action.type) {
      case GET_FILTERS:
        adapter.get_filters((error, msg) => {
          if (error) {
            error.name = 'Получение фильтров'
            store.dispatch(resActions.filters(null, error));
            return;
          }
          if (msg) {
            store.dispatch(resActions.filters(msg, null));
          }
        });
        break;
      case GET_MODELS:
        adapter.get_models((error, msg) => {
          if (error) {
            error.name = 'Получение моделей'
            store.dispatch(resActions.models(null, error));
            return;
          }
          if (msg) {
            store.dispatch(resActions.models(msg, null));
          }
        });
        break;
      case GET_HEATMAPS:
        adapter.get_heatmaps(action.payload, (error, msg) => {
          if (error) {
            error.name = 'Получение heatmaps'
            store.dispatch(resActions.heatmaps(null, error));
            return;
          }
          if (msg) {
            store.dispatch(resActions.heatmaps(msg, null));
          }
        });
        break;
      case GET_SCORES:
        adapter.get_scores(action.payload, (error, msg) => {
          if (error) {
            error.name = 'Получение scores'
            store.dispatch(resActions.scores(null, error));
            return;
          }
          if (msg) {
            store.dispatch(resActions.scores(msg, null));
          }
        });
        break;
      case GET_PR:
        adapter.get_pr(action.payload, (error, msg) => {
          if (error) {
            error.name = 'Получение pr'
            store.dispatch(resActions.pr(null, error));
            return;
          }
          if (msg) {
            store.dispatch(resActions.pr(msg, null));
          }
        });
        break;
      case GET_TRANSACTIONS:
        adapter.get_transactions(action.payload, (error, msg) => {
          if (error) {
            error.name = 'Получение transactions'
            store.dispatch(resActions.transactions(null, error));
            return;
          }
          if (msg) {
            store.dispatch(resActions.transactions(msg, null));
          }
        });
        break;
      case GET_CF:
        adapter.get_cf(action.payload, (error, msg) => {
          if (error) {
            error.name = 'Получение cf'
            store.dispatch(resActions.cf(null, error));
            return;
          }
          if (msg) {
            store.dispatch(resActions.cf(msg, null));
          }
        });
        break;
    }
  }

  return result;
};