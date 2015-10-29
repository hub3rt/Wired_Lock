var jwt = require('jsonwebtoken');
module.exports  ={
    generate: function(payload){
        var config  = sails.config
        return jwt.sign(
            payload,
            config.jwt.jwt_secret,
            {
                expiresIn: config.jwt.jwt_ttl
            }
        )
    },
    verify: function(token,callback){
        var config  = sails.config;
        return jwt.verify(
            token,
            config.jwt.jwt_secret,
            {},
            callback
        )
    },
    decode: function(token){
        return jwt.decode(token)
    }
}