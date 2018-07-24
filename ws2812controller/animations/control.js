/*******************************
<<<<<<< HEAD
	animation control
*******************************/
	var common = require("./common.js");
	var name = "control.js";

	function control() {

		this.Stop = function(args, strip) {
			strip.SetStripColor(0);
			strip.Mode = "STOP";
			console.log("Stopped strip");
		};
	}
=======
animation control
*******************************/
var common = require("./common.js");
var name = "control.js";

function control() {

  this.Stop = function(args, strip) {
    strip.SetStripColor(0);
    strip.Mode = "STOP";
    console.log("Stopped strip");
  };
}
>>>>>>> e5ad7d12d7951be3d4432892f664ea090f0e65b7

module.exports = new control();
