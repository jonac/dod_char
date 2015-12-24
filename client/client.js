
Meteor.subscribe("chars");


Template.addChar.events({
  'submit form': function(event){
    event.preventDefault();
    var listName = $('[name=listName]').val();

    Meteor.call("addNewChar", listName);
    $('[name=listName]').val('');
  }
});

Template.characters.helpers({
  'char': function(){
    return Characters.find({}, {sort: {name: 1}});
  }
 });

// This code only runs on the client
// Template.body.helpers({
//   tasks: function () {
//            if(Session.get("hideCompleted")){
//              return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}}); 
//            }else{
//              return Tasks.find({}, {sort: {createdAt: -1}});
//            }
//          },
//   hideCompleted: function(){
//                    return Session.get("hideCompleted");
//                  },
//   incompleteCount: function(){
//                      return Tasks.find({checked: {$ne:true}}).count();
//                    }
//                      
// });
//  
//  Template.body.events({
//    "submit .new-task": function (event) {
//      // Prevent default browser form submit
//      event.preventDefault();
//      // Get value from form element
//      var text = event.target.text.value;
//      
//      // Insert a task into the collection
//      Meteor.call("addTask", text);
//      // Clear form
//      event.target.text.value = "";
//    },
//    "change .hide-completed input": function (event) {
//      Session.set("hideCompleted", event.target.checked);
//    }
//  });
// 
// Template.task.helpers({
//   isOwner: function(){
//              return this.owner == Meteor.userId();
//            }
// });
// 
// Template.task.events({
//   "click .toggle-checked": function () {
//     // Set the checked property to the opposite of its current value
//      Meteor.call("setChecked", this._id, ! this.checked);
//  },
//  "click .delete": function () {
//    Meteor.call("deleteTask", this._id);
//  },
//   "click .toggle-private":function () {
//     Meteor.call("setPrivate", this._id, ! this.private);
//   }
//  });
// 
// Accounts.ui.config({
//   passwordSignupFields: "USERNAME_ONLY"
// });
// 
