var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var showingSchema = new Schema({
	id:{
		type:String,
	},
	cinemaID:{
		type:String,
	},
	movieID:{
		type:String,
	},
	showingTime:{
		type:String
	},
	showingDate : {
		type:String
	},
    screenType :{
		type:String
	},
    seatsRemaining :  {
		type:String
	}
	
});

const showingModel = mongoose.model("showing", showingSchema);
module.exports = showingModel;
