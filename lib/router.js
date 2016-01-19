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

Router.route('/xml/test.html',{
    where: 'server', //important to make sure that the function is synchronous
    action: function() {
        var xmlData = myfeedExport(true); //grabs your data

        this.response.writeHead(200, {'Content-Type': 'text/xml'}); //outputs data to visitor
        this.response.end(xmlData);
    }
});

Router.route('/xml/test.xml',{
    where: 'server', //important to make sure that the function is synchronous
    action: function() {
        var xmlData = myfeedExport(false); //grabs your data

        this.response.writeHead(200, {'Content-Type': 'text/xml'}); //outputs data to visitor
        this.response.end(xmlData);
    }
});

Router.route('/xslt/list.xslt',{
    where: 'server', //important to make sure that the function is synchronous
    name: 'list.xsl',
    action: function() {
        var xslData = Assets.getText('list.xslt'); //grabs your data

        this.response.writeHead(200, {'Content-Type': 'text/xml'}); //outputs data to visitor
        this.response.end(xslData);
    }
});

Router.route('/xslt/char.html'){
    where: 'server', //important to make sure that the function is synchronous
    action: function() {
        var xmlData = myfeedExport(false); //grabs your data

        this.response.writeHead(200, {'Content-Type': 'text/xml'}); //outputs data to visitor
        this.response.end(xmlData);
    }
}