import request from 'request'
import OAuth from 'oauth-1.0a'
import crypto from 'crypto'

// Token request function
const generateToken = async (): Promise<string> => {
  // Initialize OAuth with your HERE OAuth credentials from the credentials file that you downloaded above
  const oauth = new OAuth({
    consumer: {
      key: (process.env.REACT_APP_HERE_ACCESS_KEY as string), //Access key
      secret: (process.env.REACT_APP_HERE_ACCESS_KEY_SECRET as string), //Secret key
    },
    signature_method: 'HMAC-SHA256',
    hash_function(base_string: string, key: string) {
      return crypto
        .createHmac('sha256', key)
        .update(base_string)
        .digest('base64')
    },
  });
  // Building the request object.
  const request_data = {
    url: 'https://account.api.here.com/oauth2/token',
    method: 'POST',
    data: { grant_type: 'client_credentials' },
  };
  return new Promise((resolve, reject) => {
    // Sending the request to get the access token
    request({
        url: request_data.url,
        method: request_data.method,
        form: request_data.data,
        headers: oauth.toHeader(oauth.authorize(request_data)),
      },
      function (error: any, response: any, body: any) {
        if (response.statusCode === 200) {
          const result = JSON.parse(response.body);
          resolve(result.access_token)
          return
        }
        reject(error)
      }
    );
  })
}

export default generateToken;

