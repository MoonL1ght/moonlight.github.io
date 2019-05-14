// @flow

import axios from 'axios';
// import uuid from 'uuid/v4';


class Adapter {
  constructor() {
    this.instance = axios.create({
      timeout: 180000,
      headers: {'Content-Type': 'application/json'},
      responseType: 'json'
    });
  }

  get_filters(callback) {
    // this.post('get_filters', [], callback);
  }

  get_models(callback) {
    // this.post('get_models', [], callback);
  }

  get_heatmaps(msg, callback) {
    // this.post('get_heatmaps', msg, callback);
  }

  get_scores(msg, callback) {
    // this.post('get_scores', msg, callback);
  }

  get_pr(msg, callback) {
    // this.post('get_precisions', msg, callback);
  }

  get_transactions(msg, callback) {
    // this.post('get_transactions', msg, callback);
  }

  get_cf(msg, callback) {
    // this.post('get_customfacts', msg, callback);
  }

  post(method, msg, callback) {
    // msg = this.makeRPCMsg(method, msg);
    // (this: any).instance.request({
    //   url: '/api',
    //   method: 'post',
    //   data: msg,
    // }).then((res) => {
    //   this.checkResponse(res, msg.id, callback);
    // }).catch((error) => {
    //   let err = {
    //     name: '',
    //     type: 'network error',
    //     descr: 'Ошибка соеденения с сервером',
    //     sugest: 'Перезагрузить страницу, перезагрузить сервер, проверить соединение с сервером',
    //     object: error
    //   }
    //   if (error.response) {
    //     console.log(error.response);
    //     if (error.response.status == 401) {
    //       localStorage.clear();
    //       window.location.href = '/';
    //     }
    //   }
    //   callback(err, null);
    // });
  }

  // makeRPCMsg(method: string, msg: any) {
  //   let id = uuid();
  //   return {'method': method,'jsonrpc': '2.0','params': msg,'id': id};
  // }

  // checkResponse(res: Object, id: string, callback: (error: ?Object,
  //   msg: ?any) => void) {
  //   if (res.status == 200) {
  //     if (res.data) {
  //       if (res.data.result && res.data.id == id) {
  //         callback(null, res.data.result);
  //       } else {
  //         let err = {
  //           name: '',
  //           type: 'data error / server error / db error',
  //           descr: 'Ошибка работы сервера или обработки данных (неверный формат данных) или работы бд',
  //           sugest: 'Проверить работу сервера, подключение к бд',
  //           object: res.data,
  //           full_json_rpc_error: res
  //         }
  //         callback(err, null);
  //       }
  //     } else {
  //       let err = {
  //       name: '',
  //       type: 'server error',
  //       descr: 'Получен неверный ответ',
  //       sugest: 'Проверить работу сервера',
  //       object: res
  //     }
  //     callback(err, null);
  //     }
  //   } else {
  //     let err = {
  //       name: '',
  //       type: 'network error',
  //       descr: 'Ошибка получение ответа',
  //       sugest: 'Перезагрузить страницу, перезагрузить сервер, проверить соединение с сервером',
  //       object: res
  //     }
  //     callback(err, null);
  //   }
  // }
}

export default Adapter;
