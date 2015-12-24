if (Meteor.isServer) {
  Meteor.publish("tasks", function (){ 
      return Tasks.find({
        $or: [
             {private: {$ne: true}},
             {owner: this.userId}
          ]
      });
  });
    Meteor.methods({
      addTask: function(text){
                 // Make sure user is logged in
                 if (! Meteor.userId()){
                    throw new Meteor.error("not-authorized");
                 }
                 Tasks.insert({
                   text:text,
                   createdAt:new Date(),
                   owner: Meteor.userId(),
                   username: Meteor.user().username
                 });
               },
      deleteTask: function(taskId){
                     Tasks.remove(taskId)
                   },
      setChecked: function (taskId, setChecked){
                    Tasks.update(taskId, { $set: { checked: setChecked} });
                  },
      setPrivate: function (taskId, setToPrivate){
                    var task = Tasks.findOne(taskId);
                     if (task.owner !== Meteor.userId()) {
                       throw new Meteor.Error("not-authorized");
                     }

                     Tasks.update(taskId, { $set: { private: setToPrivate } });
                  }
    });
}
