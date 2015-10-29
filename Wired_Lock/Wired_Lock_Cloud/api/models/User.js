/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name:{
  		type: 'string',
  		required: true,
  		minLength: 3	
  	},
  	email:{
  		type:'email',
  		required: true,
  		unique: true
  	},
  	doors:{
  		collection: 'Door',
  		via: 'users',
  		dominant: true
  	}
  }
};