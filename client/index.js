Template.home.events({
	'submit form': function(e) {
		e.preventDefault();

		var task = {
			task: $(e.target).find('[name=task]').val(),
		}

		Meteor.call('postTask', task, function(error, id){
			if(error){
				alert(error);
			} else {
				console.log(id);
			}
		});

		$('#task').val('')
	}
});