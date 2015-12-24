Router.configure({
  layoutTemplate:'main'
});

Router.route('/register');
Router.route('/login');
Router.route('/',{
  name: "home",
  template: "home" 
});
Router.route('/chars/:_id',{
  name: "name",
  template: "character",
  data: function(){
          currentChar = this.params._id;
          return Characters.findOne({_id: currentChar});
        }
});
