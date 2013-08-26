sap.ui.core.Control.extend("myHTML", { // call the new Control type "my.Hello"
	// and let it inherit from sap.ui.core.Control
	metadata: { // the Control API
		properties: {
			// setter and getter are created behind the scenes,
			// including data binding and type validation
			id: "string",
			title: "string",
			// year: "int",
			// mpaa_rating: "string",
			// runtime: "int",
			// critics_consensus: "string",
			// release_dates: {
			// theater: "string"
			// },

			critics_rating: "string",
			critics_score: "int",
			audience_rating: "string",
			audience_score: "int",
		// posters: {
		// thumbnail: "string",
		// profile: "string",
		// detailed: "string",
		// original: "string"
		// },
		// abridged_cast: [ {
		// name: "string",
		// id: "string",
		// characters: [ "string" ]
		// } ],
		// synopsis: "string",

		// links: {
		// self: "http://api.rottentomatoes.com/api/public/v1.0/movies/771193517.json",
		// alternate: "http://www.rottentomatoes.com/m/the_wolverine_2012/",
		// cast: "http://api.rottentomatoes.com/api/public/v1.0/movies/771193517/cast.json",
		// clips: "http://api.rottentomatoes.com/api/public/v1.0/movies/771193517/clips.json",
		// reviews: "http://api.rottentomatoes.com/api/public/v1.0/movies/771193517/reviews.json",
		// similar: "http://api.rottentomatoes.com/api/public/v1.0/movies/771193517/similar.json"
		// }

		}
	},

	renderer: function(oRm, oControl) { // the part creating the HTML
		oRm.write("<div><h1>");
		oRm.writeEscaped(oControl.getTitle()); // write the Control property 'name', with XSS protection
		oRm.write("</h1><div>");
		oRm.writeEscaped(oControl.getCritics_score());
		oRm.write("</div></div>");
	}
});

var oModel = new sap.ui.model.json.JSONModel();

var oHTML = new myHTML();
oHTML.setModel(oModel);
oHTML.bindProperty("title", "data/movies/1/title");
oHTML.bindProperty("critics_score", "data/movies/1/ratings/critics_score");

// STEP 1: create the Table control
var oTable = new sap.ui.table.Table();
oTable.setModel(oModel);
oTable.bindRows("/data/movies"); // bind the rows against the "data"

// define the two Table columns
oTable.addColumn(new sap.ui.table.Column("name", {
	label: new sap.ui.commons.Label({
		text: "Film"
	}),
	template: new sap.ui.commons.TextView({
		text: "{title}"
	}),
	sortProperty: "name"
// filterProperty: "date"
}));
oTable.addColumn(new sap.ui.table.Column("id", {
	label: new sap.ui.commons.Label({
		text: "rottenID"
	}),
	template: new sap.ui.commons.TextView({
		text: "{id}"
	})
// sortProperty: "name"
// filterProperty: "date"
}));

// finally place the Table into the UI
oTable.placeAt("content");
oHTML.placeAt("content");

// STEP 2: create a JSONModel and bind the Table to this model

// STEP 3: load the data
jQuery.ajax({
	url: "/rtmovies", // for URLs on different servers cross-domain restrictions need to be handled
	dataType: "json",
	success: function(data, textStatus, jqXHR) { // callback called when data is received
		oModel.setData({
			data: data
		}); // fill the received data into the JSONModel
	},
	error: function(jqXHR, textStatus, errorThrown) {
		alert("error occurred");
	}
});