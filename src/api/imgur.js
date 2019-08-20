import qs from 'qs';

const CLIENT_ID = '1abfe59e8f9d415';
const ROOT_URL = 'https://api.imgur.com';


export default {
  login() {
      const querystring = {
          client_id: CLIENT_ID,
          repsonse_type: 'token'
      };
    
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
  }
};

https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE