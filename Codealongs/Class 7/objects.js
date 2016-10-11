// alert("connected");

var flight= {
	origin: "SFO",
	destination: "DEN",
	departureTime: "07:00 AM",
	arrivalTime: "11:30 AM",
	airline: "FML",
	wifi: false,
	distace: 800,
	status: "delayed"
	
	};

var car= {
	make: "Honda",
	model: "Accord",
	year: 2016,
	color: "green",
	insurance: {
		provider: "Geico",
		policy: 3432
	},
	miles: 12,
	status: 12,
	on: "false", 
	addMile: function(){
		this.miles++;
	},
	// flight.distace = 10;
	start: function(){
		this.on = true;
	}
};	

var numbers = [1,2,3,4,5,6,7];
var colors = ["red","green","yellow"];
// To calculate the number of key value pairs in a object: Object.keys(car).length

// A user searches for her reservation on a hotel website, 
// and changes the arrival date and room type.



var changeReservation ={
	nameOnReservation: "dummyName",
	dateOfArrival: new Date('December 20, 2016'), 
	dateOfDeparature: new Date('December 20, 2016'), 
	numberOfGuests: 2,
	amountListed:100,
	// amountPaid: coupon.couponValue(),
	roomType: "KingSuite",
	numberOfBeds: 1,
	coupon: {
		couponUsed: true,
		couponType: "Groupon-20%Off",
		couponValue: function(){
			return changeReservation.amountListed*0.2;
		},
	smoking:false,
	}
};


// this is a constructor
var Zipcar = function(){
	this.status = "not available";
}


// prototype
Zipcar.prototype = {
    pickup: function(){
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain";
        }
        if (this.status == "available") {
            this.status = "in use";
            return "Off you go!";
        }
    },
    return: function(){
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
    }
};

var zipcar1 = new Zipcar("not available");
var zipcar2 = new Zipcar("available");

