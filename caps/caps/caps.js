'use strict';

const events = require('./events/events.js');
const handleDrivers = require('./models/drivers.js');
const handleVendors = require('./models/vendors.js');

events.on('sweat', handleDrivers);
events.on('sunglasses', handleVendors);

