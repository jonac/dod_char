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

myfeedExport = function (send_xslt) {
	var xmlBuilder = Meteor.npmRequire('xmlbuilder'); //needed to use xmlbuilder
	// var feed = xmlBuilder.create('feed'); //sets up the "parent" xml object
	var xml = xmlBuilder.create('root')
	if(send_xslt){
		xml.ins('xml-stylesheet', 'type="text/xsl" href="/xslt/list.xslt"')
	} 


	chars = xml.ele('Characters')
	list_of_chars = Characters.find().fetch()
	for(var elem in list_of_chars){
		chars.ele('char',{'id': list_of_chars[elem]._id},list_of_chars[elem].name )

	};
	
	// var xml = xmlBuilder.create({
	// 	root:{
	// 		xmlbuilder: {
	// 			repo: {
	// 				'@type': 'git',
	// 				'#text': 'git://github.com/oozcitak/xmlbuilder-js.git'
	// 			}
	// 		}
	// 	}
	// });
	return xml.end({pretty: true})
}
