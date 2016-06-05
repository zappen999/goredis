const Redis = require('ioredis');

/**
 * Hold the redis instance object
 * @type {Redis}
 */
let redis = null;


/**
 * Connects to the redis cache
 * @author Johan Kanefur <johan.canefur@gmail.com>
 * @param  {Object} rc Redis config object
 * @return {Promise}
 */
const connect = (rc) => {
  redis = new Redis({
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: 'auth',
    db: 0
  })
};



/**
 * Init function for wrapping Mongoose and initialising Redis
 * @author Johan Kanefur <johan.canefur@gmail.com>
 * @param  {Mongoose} mg       Instance of Mongoose
 * @param  {Object}   rc       Redis config object
 * @return {Promise}           Rejects the promise if redis connection failed.
 *                             Resolves the promise on successful wrap
 */
const wrap = (mg, rc) => {

};

module.exports = wrap;
