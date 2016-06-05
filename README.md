# GoRedis
**Caching layer for Mongoose using Redis**

This package wraps and extends Mongoose to intercept the queries going to
MongoDB. Mongoose pre-middleware do not support early returns to abort the
actual db-hit.


### Installation
`npm install goredis --save`

### Usage
Wrap your Mongoose instance with GoRedis:

```js
const redisconfig = {
  port: 6379,          // Redis port
  host: '127.0.0.1',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: 'auth',
  db: 0
}

const mongoose = require('goredis')(require('mongoose'), config);

// Normal use
mongoose.connect( ... );
```
