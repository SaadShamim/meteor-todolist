Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
	//add waitOn notification
});

Router.map(function (){
	this.route('home', {
		path: '/',
		data: function() {
			return {
				tasks: Tasks.find({})
			}
		}
	});
});