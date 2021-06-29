'use strict';

const events = require('./events.js');

module.exports = () => {
  console.log('beginning drive');
  events.emit('drive');
}