Meteor.publish("chars", function(){
  return Characters.find({}, {sort: {name: 1}});
});
// Meteor.publish("tasks", function (){
//     return Tasks.find({
//       $or: [
//            {private: {$ne: true}},
//            {owner: this.userId}
//         ]
//     });
// });
