

// STEP 1: create the Table control
var oTable = new sap.ui.table.Table();

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
//oHTML.placeAt("content");

// STEP 2: create a JSONModel and bind the Table to this model
var oModel = new sap.ui.model.json.JSONModel();
oTable.setModel(oModel);
oTable.bindRows("/data/movies"); // bind the rows against the "data"

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



