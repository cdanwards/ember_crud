import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
        "X-Parse-Application-Id": "RGDdHM2RBZDulBnPIBZq3HjHz5tsf4zedtUlXJMl",
        "X-Parse-REST-API-Key": "thVA9TN375rm5dr6ROcC0U3Y1Rt4tZNHyQgDP2Qj"
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};
