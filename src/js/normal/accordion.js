function Test() {
	this.initialize();
}

Test.prototype = {
	initialize: function() {
		console.log('a');
	}
};

module.exports = Test;