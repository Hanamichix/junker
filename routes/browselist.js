var data = require("../data.json");
exports.getItemData = function(req, res){
	var userid = req.params.userid;
	console.log(userid);
	var itemid = data.accounts[userid - 1].posts;
	console.log(itemid);
	var itemlist = [];
	console.log(data.items[itemid[0] - 1]);
	
	for (var i = 0; i < itemid.length; i ++) {
		var iteminfo = data.items[itemid[i] - 1]; //Use the item id to search for item information
		itemlist.push(iteminfo);
	}
	console.log(itemlist);
	res.json(itemlist);
};