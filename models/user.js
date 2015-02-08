var mongoose = require('mongoose');
var crypto   = require('crypto'); // leaving this commented until everything else is working.
var Schema   = mongoose.Schema;

// User Schema
var UserSchema = new Schema({
	name: String,
	email: {
		type: String,
		trim: true,
		unique: true
	},
	// username: {
	// 	type: String,
	// 	trim: true,
	// 	unique: true // guarantee no duplicate values
	// },
	password: {
		type: String,
		min: 8
	}
});

// User Class Setup
var User = mongoose.model('User', UserSchema);




// CREATE PRE-SAVE MIDDLEWARE TO HANDLE THE USERS' PASSWORD HASHING. REPLACES CURRENT PASSWORD WITH A HASHED ONE. SALTS SHOULD BE ADDED IN FUTURE, AND MD5 IS NOT A GREAT CHOICE.
UserSchema.pre('save', function (next) {
		if (this.password) {
			var sha = crypto.createHash('sha256');
			this.password = sha.update(this.password).digest('hex');
		}
		next();
	}
);


// WE'VE ADDED AN AUTHENTICATION METHOD WHICH ACCEPTS A STRING PASSWORD ARGUMENT, WHICH IT THEN HASHES AND COMPARES TO THE CURRENT USERS HASHED PASSWORD.
UserSchema.methods.authenticate = function (password) {
	var sha = crypto.createHash('sha256');
	sha = sha.update(password).digest('hex');
	return this.password === sha;
}


// USED TO FIND AN AVAILABLE UNIQUE USERNAME FOR NEW USERS (FOR OAUTH)
// UserSchema.statics.findUniqueUsername = function (username, suffix, callback) {
// 	var _this = this;
// 	var possibleUsername = username + (suffix || '');

// 	_this.findOne(
// 		{username: possibleUsername},
// 		function(err, user) {
// 			if (!err) {
// 				if (!user) {
// 					callback(possibleUsername);
// 				}
// 				else {
// 					return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
// 				}
// 			}
// 			else {
// 				callback(null);
// 			}
// 		}
// 	);
// };



// SAVE CREATED USER
function saveUser (newUser) {

	newUser.save(function(error){
		if (error) { return console.error(error); }
	});

};
    


// UPDATE USER DATA
function updateUser (oldDataObj, newDataObj) {

	User.update(oldDataObj, newDataObj, function(err){
		if (err) { return console.error(err); }
	}); 

};



// DELETE USER FROM DATABASE
function deleteUser (dataObj) {

	User.remove(dataObj, function(err){
		if (err) { return console.error(err); }
	});

};


function findUser (username) {

	User.find(username, function(err){
		if (err) { return console.error(err); }
	});

};



module.exports = {
	User: User,
	saveUser: saveUser,
	updateUser: updateUser,
	deleteUser: deleteUser,
	findUser: findUser
};