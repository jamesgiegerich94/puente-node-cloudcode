const { Parse } = require('parse/node');
const { PARSE_ENV, PARSE_APP_ID, PARSE_JAVASCRIPT_KEY, PARSE_SERVER_URL } = require('./env.config')

if (PARSE_ENV == 'staging')  {
  Parse.initialize(PARSE_APP_ID, PARSE_JAVASCRIPT_KEY); // PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = PARSE_SERVER_URL;
}

else {
  Parse.initialize(PARSE_APP_ID);
  Parse.serverURL = PARSE_SERVER_URL;
}

const cloudFunctions = {
  hello: (request) => Parse.Cloud
    .run('hello')
    .then((res) => res.data)
    .catch((err) => 'error'),
  postObjectsToClass: (post_params) => Parse.Cloud
    .run('postObjectsToClass', post_params)
    .then((response) => response)
    .catch((err) => err),
  postObjectsToClassWithRelation: (post_params) => Parse.Cloud
    .run('postObjectsToClassWithRelation', post_params)
    .then((response) => response)
    .catch((err) => err),
  postObjectsToAnyClassWithRelation: (post_params) => Parse.Cloud
    .run('postObjectsToAnyClassWithRelation', post_params)
    .then((response) => response)
    .catch((err) => err),
  updateObject: (update_params) => Parse.Cloud
    .run('updateObject', update_params)
    .then((response) => response)
    .catch((err) => err),
  removeObjectsinClass: (remove_params) => Parse.Cloud
    .run('removeObjectsinClass', remove_params)
    .then((response) => response)
    .catch((err) => err),
  genericQuery: (queryParams) => Parse.Cloud
    .run('genericQuery', queryParams)
    .then(res => {
      return res
    })
    .catch((err) => 'error'),
  basicQuery: (queryParams) => Parse.Cloud
    .run('basicQuery', queryParams)
    .then((response) => response)
    .catch((err) => 'error'),
  geoQuery: (queryParams) => Parse.Cloud
    .run('geoQuery', queryParams)
    .then((response) => response.data)
    .catch((err) => 'error'),
  signup: (params) => Parse.Cloud
    .run('singup', params)
    .then((response) => response)
    .catch((error) => 'error'),
  signin: (params) => Parse.Cloud
    .run('signin', params)
    .then((response) => response)
    .catch((error) => 'error'),
  signout: (params) => Parse.Cloud
    .run('signout', params)
    .then((response) => response)
    .catch((error) => 'error'),
  forgotPassword: (params) => Parse.Cloud
    .run('forgotPassword', params)
    .then((response) => response)
    .catch((error) => 'error'),
  currentUser: (params) => Parse.Cloud
    .run('currentUser', params)
    .then((response) => response)
    .catch((error) => 'error'),
  roleQuery: () => Parse.Cloud
    .run('queryRoles')
    .then((res) => res.data)
    .catch((err) => 'error'),
};

module.exports = { cloudFunctions };