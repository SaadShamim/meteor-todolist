Tasks = new Meteor.Collection('tasks');

Meteor.methods({
	postTask: function(taskAttributes){
		//var user = Meteor.user();

	   // if (!user)
	      //throw new Meteor.Error(401, "You need to login");

	    if (!taskAttributes.task)
	      throw new Meteor.Error(422, 'Please add job title');

	  	var task = _.extend(_.pick(taskAttributes, 'task'), {
	      submitted: new Date().getTime(),
	      completed: false
	    });

	    var taskId = Tasks.insert(task);
    
    	return taskId;
	}
});