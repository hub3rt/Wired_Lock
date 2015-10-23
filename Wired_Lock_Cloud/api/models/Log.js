/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	date:'date',
  	userName:{
  		collection:'User',
  		via: 'name'
  	},
  	doorName:{
  		collection: 'Door',
  		via: 'name'
  	},
  	info: 'String',
  	photo: 'String'
  }
};

