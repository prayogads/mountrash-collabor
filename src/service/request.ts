import Axios from 'axios';

const BASE_URL = 'http://m-trashcollabor.com/api/';

let config = {
  headers: {
    contentType: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

const post = async (url: string, data: object) => {
  Axios.post(BASE_URL + url, data, config)
    .then((response: any) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

const get = (url: string, data: object) => {
  Axios.get(`${BASE_URL}${url}`, data)
    .then(async (response: any) => {
      let res = await response;
      return res;
    })
    .catch((err) => console.warn(err));
};

export {post, get};
