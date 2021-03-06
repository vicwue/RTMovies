/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ListBox.
jQuery.sap.declare("sap.ui.commons.ListBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ListBox.
 * 
 * It accepts one JSON-like object (object literal) as parameter <code>mSettings</code> that can define values for any property, 
 * aggregation, association or event.<br/> 
 * If for a control a specific name is ambiguous (a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order.<br/> 
 * To resolve ambiguities, add an "aggregation:", "association:" or "event:" prefix to the key in the JSON object.<br/>
 * Allowed values are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>editable : boolean</li>
 * <li>enabled : boolean</li>
 * <li>allowMultiSelect : boolean</li>
 * <li>visible : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>scrollTop : int</li>
 * <li>displayIcons : boolean</li>
 * <li>displaySecondaryValues : boolean</li>
 * <li>valueTextAlign : sap.ui.core.TextAlign</li>
 * <li>secondaryValueTextAlign : sap.ui.core.TextAlign</li>
 * <li>minWidth : sap.ui.core.CSSSize</li>
 * <li>maxWidth : sap.ui.core.CSSSize</li>
 * <li>visibleItems : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>items : sap.ui.core.Item</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>select : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Provides a list of items from which users can choose an item.
 * For the design of the listbox, features such as defining the listbox height, fixing the number of visible items, choosing one item to be the item that is marked by default when the listbox is shown, or a scrollbar for large listboxes are available.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.1
 *
 * @constructor   
 * @public
 */
sap.ui.commons.ListBox = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.ListBox.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.ListBox. 
 * Resulting metadata can be obtained via sap.ui.commons.ListBox.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.ListBox", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getEditable", "setEditable", "getEnabled", "setEnabled", "getAllowMultiSelect", "setAllowMultiSelect", "getVisible", "setVisible", "getWidth", "setWidth", "getHeight", "setHeight", "getScrollTop", "setScrollTop", "getDisplayIcons", "setDisplayIcons", "getDisplaySecondaryValues", "setDisplaySecondaryValues", "getValueTextAlign", "setValueTextAlign", "getSecondaryValueTextAlign", "setSecondaryValueTextAlign", "getMinWidth", "setMinWidth", "getMaxWidth", "setMaxWidth", "getVisibleItems", "setVisibleItems", 
    // aggregations
    "getItems", "insertItem", "addItem", "removeItem", "removeAllItems", "indexOfItem", "destroyItems", 
    // associations
    
    // events
    "attachSelect", "detachSelect", 
    // methods
    "getSelectedIndex", "setSelectedIndex", "addSelectedIndex", "removeSelectedIndex", "getSelectedIndices", "setSelectedIndices", "addSelectedIndices", "isIndexSelected", "getSelectedItem", "getSelectedItems", "clearSelection", "scrollToIndex", "setItems", "setSelectedKeys", "getSelectedKeys"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "editable" : {name : "editable", type : "boolean", group : "Behavior", defaultValue : true},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "allowMultiSelect" : {name : "allowMultiSelect", type : "boolean", group : "Behavior", defaultValue : false},
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "scrollTop" : {name : "scrollTop", type : "int", group : "Behavior", defaultValue : -1},
    "displayIcons" : {name : "displayIcons", type : "boolean", group : "Behavior", defaultValue : false},
    "displaySecondaryValues" : {name : "displaySecondaryValues", type : "boolean", group : "Misc", defaultValue : false},
    "valueTextAlign" : {name : "valueTextAlign", type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
    "secondaryValueTextAlign" : {name : "secondaryValueTextAlign", type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
    "minWidth" : {name : "minWidth", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "maxWidth" : {name : "maxWidth", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "visibleItems" : {name : "visibleItems", type : "int", group : "Dimension", defaultValue : null}
  },
  defaultAggregation : "items",
  aggregations : {
    "items" : {name : "items", type : "sap.ui.core.Item", multiple : true, singularName : "item"}
  },
  associations : {},
  events : {
    "select" : "select"
  }

});	

sap.ui.commons.ListBox.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>editable</code>.
 * Value "true" makes the listbox interactive.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getEditable = function() {
	return this.getProperty("editable");
};

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setEditable = function(bEditable) {
	this.setProperty("editable", bEditable);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * Disabled controls have another color display depending on custom settings.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>allowMultiSelect</code>.
 * Specifies whether multiple selection is allowed.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>allowMultiSelect</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getAllowMultiSelect = function() {
	return this.getProperty("allowMultiSelect");
};

/**
 * Setter for property <code>allowMultiSelect</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAllowMultiSelect  new value for property <code>allowMultiSelect</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setAllowMultiSelect = function(bAllowMultiSelect) {
	this.setProperty("allowMultiSelect", bAllowMultiSelect);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Control width as common CSS-size (px or % as unit, for example).
 * The setting overrides any definitions made for the setVisibleItems() method.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * Control height as common CSS-size (px or % as unit, for example).
 * The setting overrides any definitions made for the setVisibleItems() method.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>scrollTop</code>.
 * Scrollbar position from the top. Setting the scrollTop property and calling scrollToIndex are two operations influencing the same "physical" property, so the last call "wins".
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>scrollTop</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getScrollTop = function() {
	return this.getProperty("scrollTop");
};

/**
 * Setter for property <code>scrollTop</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iScrollTop  new value for property <code>scrollTop</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setScrollTop = function(iScrollTop) {
	this.setProperty("scrollTop", iScrollTop);
	return this;
};


/**
 * Getter for property <code>displayIcons</code>.
 * Defines whether the icons of the list items should also be displayed. Enabling icons causes some space to be reserved for them, regardless of how many of the items actually have icons assigned. Displaying icons can also influence the width and height of a single item, which affects the height of the ListBox when it is defined in number of items. In particular with differently-sized icons the total ListBox height will not accomodte exactly the given number of items, then.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>displayIcons</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getDisplayIcons = function() {
	return this.getProperty("displayIcons");
};

/**
 * Setter for property <code>displayIcons</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisplayIcons  new value for property <code>displayIcons</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setDisplayIcons = function(bDisplayIcons) {
	this.setProperty("displayIcons", bDisplayIcons);
	return this;
};


/**
 * Getter for property <code>displaySecondaryValues</code>.
 * Indicates whether the additionalText property that can be set on {@link sap.ui.core.ListItems} shall be displayed, or not.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>displaySecondaryValues</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getDisplaySecondaryValues = function() {
	return this.getProperty("displaySecondaryValues");
};

/**
 * Setter for property <code>displaySecondaryValues</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisplaySecondaryValues  new value for property <code>displaySecondaryValues</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setDisplaySecondaryValues = function(bDisplaySecondaryValues) {
	this.setProperty("displaySecondaryValues", bDisplaySecondaryValues);
	return this;
};


/**
 * Getter for property <code>valueTextAlign</code>.
 * The text alignment in the primary column of the ListBox.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>valueTextAlign</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getValueTextAlign = function() {
	return this.getProperty("valueTextAlign");
};

/**
 * Setter for property <code>valueTextAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oValueTextAlign  new value for property <code>valueTextAlign</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setValueTextAlign = function(oValueTextAlign) {
	this.setProperty("valueTextAlign", oValueTextAlign);
	return this;
};


/**
 * Getter for property <code>secondaryValueTextAlign</code>.
 * The text alignment in the secondary (optional) text column of the ListBox.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>secondaryValueTextAlign</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getSecondaryValueTextAlign = function() {
	return this.getProperty("secondaryValueTextAlign");
};

/**
 * Setter for property <code>secondaryValueTextAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oSecondaryValueTextAlign  new value for property <code>secondaryValueTextAlign</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setSecondaryValueTextAlign = function(oSecondaryValueTextAlign) {
	this.setProperty("secondaryValueTextAlign", oSecondaryValueTextAlign);
	return this;
};


/**
 * Getter for property <code>minWidth</code>.
 * The minimum width of the ListBox. If not set, there is no minimum width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getMinWidth = function() {
	return this.getProperty("minWidth");
};

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setMinWidth = function(sMinWidth) {
	this.setProperty("minWidth", sMinWidth);
	return this;
};


/**
 * Getter for property <code>maxWidth</code>.
 * The maximum width of the ListBox. If not set, there is no maximum width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getMaxWidth = function() {
	return this.getProperty("maxWidth");
};

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setMaxWidth = function(sMaxWidth) {
	this.setProperty("maxWidth", sMaxWidth);
	return this;
};


/**
 * Getter for property <code>visibleItems</code>.
 * The control height in number of items to be completely displayed without scrolling. Setting this overwrites any height in terms of CSS size previously set. When items have different heights, the height of the first item is used for all calculations.
 * If between the visible ListBox items there are one or more separators, the specified number of items will not exactly fit.
 * If the value is retrieved it will equal the previously set value if it was set, otherwise it will be the number of items completely fitting into the ListBox without scrolling if the control was already rendered. If the control was not rendered, the behavior is undefined, it may return -1 or any other number.
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>visibleItems</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getVisibleItems = function() {
	return this.getProperty("visibleItems");
};

/**
 * Setter for property <code>visibleItems</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iVisibleItems  new value for property <code>visibleItems</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setVisibleItems = function(iVisibleItems) {
	this.setProperty("visibleItems", iVisibleItems);
	return this;
};

	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of items to be displayed. Must be either of type sap.ui.core.ListItem or sap.ui.core.SeparatorItem.
 * 
 * @return {sap.ui.core.Item[]}
 * @public
 */
sap.ui.commons.ListBox.prototype.getItems = function() {
	return this.getAggregation("items", []);
};


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	return this;
};

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.ListBox.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	return this;
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 */
sap.ui.commons.ListBox.prototype.removeItem = function(vItem) {
	return this.removeAggregation("items", vItem);
};

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.ListBox.prototype.removeAllItems = function() {
	return this.removeAllAggregation("items");
};

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.ListBox.prototype.indexOfItem = function(oItem) {
	return this.indexOfAggregation("items", oItem);
};
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.destroyItems = function() {
	this.destroyAggregation("items");
	return this;
};


/**
 * Event is fired when selection is changed by user interaction. 
 *
 * @name sap.ui.commons.ListBox#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id ID of the ListBox which triggered the event.
 * @param {int} oControlEvent.getParameters.selectedIndex The currently selected index of the ListBox. In case of multiselect this is ONE of the selected indices (the one whose selection has triggered the selection change); use "selectedIndices" to get all currently selected indices.
 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The currently selected item of the ListBox. In case of multiselect this is ONE of the selected items (the one whose selection has triggered the selection change).
 * @param {int[]} oControlEvent.getParameters.selectedIndices Array containing the indices which are selected.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.ListBox</code>.<br/>
 * Event is fired when selection is changed by user interaction. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.attachSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("select", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.ListBox</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.detachSelect = function(fnFunction, oListener) {
	this.detachEvent("select", fnFunction, oListener);
	return this;	
};

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> ID of the ListBox which triggered the event.</li>
 * <li>'selectedIndex' of type <code>int</code> The currently selected index of the ListBox. In case of multiselect this is ONE of the selected indices (the one whose selection has triggered the selection change); use "selectedIndices" to get all currently selected indices.</li>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code> The currently selected item of the ListBox. In case of multiselect this is ONE of the selected items (the one whose selection has triggered the selection change).</li>
 * <li>'selectedIndices' of type <code>int[]</code> Array containing the indices which are selected.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.ListBox.prototype.fireSelect = function(mArguments) {
	this.fireEvent("select", mArguments);
	return this;
};


/**
 * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the first selected item.
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedIndex
 * @function

 * @type int
 * @public
 */


/**
 * Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 *
 * @name sap.ui.commons.ListBox.prototype.setSelectedIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index to be selected.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Adds the given index to current selection. When multi-selection is disabled, this replaces the current selection. When the given index is invalid, the call is ignored.
 *
 * @name sap.ui.commons.ListBox.prototype.addSelectedIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index to add to selection.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Removes the given index from this selection. When the index is invalid or not selected, the call is ignored.
 *
 * @name sap.ui.commons.ListBox.prototype.removeSelectedIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index that shall be removed from selection.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedIndices
 * @function

 * @type int[]
 * @public
 */


/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 * When multi-selection is disabled and multiple items are given, the selection is set to the index of the first valid index in the given array.
 * Any invalid indices are ignored.
 * The previous selection is in any case replaced.
 *
 * @name sap.ui.commons.ListBox.prototype.setSelectedIndices
 * @function
 * @param {int[]} 
 *         aIndices
 *         Indices of the items to be selected.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Adds the given indices to selection. Any invalid indices are ignored.
 *
 * @name sap.ui.commons.ListBox.prototype.addSelectedIndices
 * @function
 * @param {int[]} 
 *         aIndices
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Returns whether the given index is selected.
 *
 * @name sap.ui.commons.ListBox.prototype.isIndexSelected
 * @function
 * @param {int} 
 *         iIndex
 *         Index which is checked for selection state.

 * @type boolean
 * @public
 */


/**
 * Returns selected item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned.
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedItem
 * @function

 * @type sap.ui.core.Item
 * @public
 */


/**
 * Returns an array containing the selected items. In the case of no selection, an empty array is returned.
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedItems
 * @function

 * @type sap.ui.core.Item[]
 * @public
 */


/**
 * Removes complete selection.
 *
 * @name sap.ui.commons.ListBox.prototype.clearSelection
 * @function

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * If the ListBox has a scrollbar because the number of items is larger than the number of visible items, this method scrolls to the item with the given index. If there are enough items, this item will then appear at the topmost visible position in the ListBox. If bLazy is true, it only scrolls as far as required to make the item visible.
 * Setting the scrollTop property and calling scrollToIndex are two operations influencing the same "physical" property, so the last call "wins".
 *
 * @name sap.ui.commons.ListBox.prototype.scrollToIndex
 * @function
 * @param {int} 
 *         iIndex
 *         The index to which the ListBox should scroll.
 * @param {boolean} 
 *         bLazy
 *         If set to true, the ListBox only scrolls if the item is not completely visible, and it scrolls just enough to make it fully visible. If set to false (and by default), the item is scrolled to the top position if possible.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Allows setting the list items for this instance of ListBox as array.
 *
 * @name sap.ui.commons.ListBox.prototype.setItems
 * @function
 * @param {sap.ui.core.ListItem[]} 
 *         aItems
 *         The items to set for this ListBox.
 * @param {boolean} 
 *         bDestroyItems
 *         Optional boolean parameter to indicate that the formerly set items should be destroyed instead of just removed.
 * If omitted defaults to false, i.e. no not destroy.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Keys of the items to be selected, wrapped in an array. An empty array means "no selection".
 * When multi-selection is disabled and multiple keys are given, the selection is set to the item with the first valid key in the given array.
 * Any invalid keys are ignored.
 * The previous selection is in any case replaced.
 *
 * @name sap.ui.commons.ListBox.prototype.setSelectedKeys
 * @function
 * @param {string[]} 
 *         aKeys
 *         The keys of the items to be selected.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Returns the keys of the selected items in an array. If a selected item does not have a key, the respective array entry will be undefined.
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedKeys
 * @function

 * @type string[]
 * @public
 */


// Start of sap\ui\commons\ListBox.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("jquery.sap.strings");

/**
 * Initializes the ListBox control
 * @private
 */
sap.ui.commons.ListBox.prototype.init = function () {
	this.allowTextSelection(false);
	if (!this._bHeightInItems) { // otherwise setVisibleItems was already called by the JSON constructor
		this._bHeightInItems = false; // decides whether the height is set as CSS size (height is in height property then) or in multiples of an item height (height is in this._iVisibleItems then)
		this._iVisibleItems = -1;     // initially -1, this subsequently must be the number of items that are visible without scrolling; the value is either set directly if the height is given in items, or calculated in onAfterRendering
	}
	this._sTotalHeight = null;    // if height is set in items, this contains the
	if (sap.ui.commons.ListBox._fItemHeight === undefined) {
		sap.ui.commons.ListBox._fItemHeight = -1;
	}
	if (sap.ui.commons.ListBox._iBordersAndStuff === undefined) {
		sap.ui.commons.ListBox._iBordersAndStuff = -1;
	}

	this._aSelectionMap = [];
	this._iLastDirectlySelectedIndex = -1;

	//FIXME Mapping from activeItems index to the id of it for item navigation purposes
	this._aActiveItems = null;
};


/**
 * Re-initializes the ListBox, so all sizes are fine after a theme switch
 * @private
 */
sap.ui.commons.ListBox.prototype.onThemeChanged = function () {
	sap.ui.commons.ListBox._fItemHeight = -1;
	sap.ui.commons.ListBox._iBordersAndStuff = -1;
	this._sTotalHeight = null;
	if (!this._bHeightInItems) {
		this._iVisibleItems = -1; // re-calculation only required for ItemNavigation - shouldn't change when explicitly set
	}
	this.invalidate();
	this.rerender();
};


/**
 * Called before rendering. Required storing the scroll position.
 * @private
 */
sap.ui.commons.ListBox.prototype.onBeforeRendering = function () {
	this.getScrollTop(); // store current ScrollTop
	// TODO: store focus??
};


/**
 * Called after rendering. Required for calculating and setting the correct heights.
 * @private
 */
sap.ui.commons.ListBox.prototype.onAfterRendering = function () {
	var oDomRef = this.getDomRef();

	// calculate item height
	if (sap.ui.commons.ListBox._fItemHeight < 0) {
		var oItemDomRef = oDomRef.firstChild.firstChild; // The first item which CAN be a dummy item
		sap.ui.commons.ListBox._fItemHeight = oItemDomRef.offsetHeight;

		// subpixel rendering strategy in IE >= 9 can lead to the total being larger than the sum of heights
		if (jQuery.browser.msie && (document.documentMode == 9 || document.documentMode == 10)) { // TODO: browser version check... not good...
			var cs = document.defaultView.getComputedStyle(oItemDomRef.firstChild, "");
			var h = parseFloat(cs.getPropertyValue("height").split("px")[0]);
			var pt = parseFloat(cs.getPropertyValue("padding-top").split("px")[0]);
			var pb = parseFloat(cs.getPropertyValue("padding-bottom").split("px")[0]);
			var bt = parseFloat(cs.getPropertyValue("border-top-width").split("px")[0]);
			var bb = parseFloat(cs.getPropertyValue("border-bottom-width").split("px")[0]);
			sap.ui.commons.ListBox._fItemHeight = h + pt + pb + bt + bb;
		}

		// remove the dummy
		if (oItemDomRef.id == (this.getId() + "-dummyItem")) {
			oItemDomRef.parentNode.removeChild(oItemDomRef);
		}
	}

	// calculate height of ListBox borders and padding
	if (sap.ui.commons.ListBox._iBordersAndStuff == -1) {
		var $DomRef = jQuery(this.getDomRef());
		var outerHeight = $DomRef.outerHeight();
		var innerHeight = $DomRef.height();
		sap.ui.commons.ListBox._iBordersAndStuff = outerHeight - innerHeight;
	}

	// Height is set in number of visible items
	if (this._bHeightInItems) {
		if(this._sTotalHeight == null) {
			//...but the height needs to be calculated first
			this._calcTotalHeight(); // TODO: verify this._sTotalHeight is > 0

			// now set height
			oDomRef.style.height = this._sTotalHeight;
		} else {
			// height was already set in the renderer!
		}
	}

	// find out how many items are visible because the ItemNavigation needs to know
	if (this._iVisibleItems = -1) {
		this._updatePageSize();
	}

	// Collect items for ItemNavigation   TODO: make it cleaner
	var oFocusRef = this.getFocusDomRef(),
			aRows = oFocusRef.childNodes,
			aDomRefs = [],
			aItems = this.getItems();
	this._aActiveItems = [];
	var aActiveItems = this._aActiveItems;
	for (var i=0; i < aRows.length; i++) {
		if (!(aItems[i] instanceof sap.ui.core.SeparatorItem)) {
			aActiveItems[aDomRefs.length] = i;
			aDomRefs.push(aRows[i]);
		}
	}

	// init ItemNavigation
	if (!this.oItemNavigation) {
		var bNotInTabChain = (!this.getEnabled() || !this.getEditable());
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation(null, null, bNotInTabChain);
		this.oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, this._handleAfterFocus, this);
		this.addDelegate(this.oItemNavigation);
	}
	this.oItemNavigation.setRootDomRef(oFocusRef);
	this.oItemNavigation.setItemDomRefs(aDomRefs);
	this.oItemNavigation.setCycling(false);
	this.oItemNavigation.setSelectedIndex(this._getNavigationIndexForRealIndex(this.getSelectedIndex()));
	this.oItemNavigation.setPageSize(this._iVisibleItems); // Page down by number of visible items

	// Apply scrollTop


	// if scrolling to a certain item index is currently requested (but was not done because the control was not rendered before), do it now
	if (this.oScrollToIndexRequest) {
		this.scrollToIndex(this.oScrollToIndexRequest.iIndex, this.oScrollToIndexRequest.bLazy); // keep the oScrollToIndexRequest for the timeouted call
	} else {
		var scrollTop = this.getProperty("scrollTop");
		if (scrollTop > -1) {
			oDomRef.scrollTop = scrollTop;
		}
	}

	// sometimes this did not work, so repeat it after a timeout (consciously done twice, yes)
	var that = this;
	window.setTimeout(function() { // needs to be delayed because in Firefox sometimes the scrolling seems to come too early
		// if scrolling to a certain item index is currently requested (but was not done because the control was not rendered before), do it now
		if (that.oScrollToIndexRequest) {
			that.scrollToIndex(that.oScrollToIndexRequest.iIndex, that.oScrollToIndexRequest.bLazy);
			that.oScrollToIndexRequest = null;
		} else {
			var scrollTop = that.getProperty("scrollTop");
			if (scrollTop > -1) {
				oDomRef.scrollTop = scrollTop;
			}
		}
	}, 0);
};


/**
 * For the given iIndex, this method calculates the index of the respective item within the ItemNavigation set.
 * (if there are separators, the ItemNavigation does not know them)
 * Prerequisite: the iIndex points to an element which is NOT a Separator or disabled (= it must be known to the ItemNavigation)
 * @private
 */
sap.ui.commons.ListBox.prototype._getNavigationIndexForRealIndex = function(iIndex) {
	var aItems = this.getItems();
	var iNavIndex = iIndex;
	for (var i = 0; i < iIndex; i++) {
		if (aItems[i] instanceof sap.ui.core.SeparatorItem) {
			iNavIndex--;
		}
	}
	return iNavIndex;
};


/**
 * Calculates the number of visible items. Must happen after rendering and whenever the height is changed without rerendering.
 * @private
 */
sap.ui.commons.ListBox.prototype._updatePageSize = function() {
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		if (sap.ui.commons.ListBox._fItemHeight > 0) {
			this._iVisibleItems = Math.floor(oDomRef.clientHeight / sap.ui.commons.ListBox._fItemHeight);
		} else {
			// TODO: shouldn't happen
		}
	}
	// else: nothing to do, item navigation will be initialized after rendering
};

/*
 * Scrolls the item with the given index into view, preferably at the topmost position.
 */
sap.ui.commons.ListBox.prototype.scrollToIndex = function(iIndex, bLazy) {
	var oDomRef = this.getDomRef();
	if (oDomRef) { // only if already rendered
		var oItem = jQuery.sap.domById(this.getId() + "-I" + iIndex);
		if (oItem) {
			var iScrollTop = oItem.offsetTop;
			if (!bLazy) {
				// scroll there without any conditions
				this.setScrollTop(iScrollTop);
			} else {
				// "lazy" means we should only scroll if required and as far as required
				var iCurrentScrollTop = oDomRef.scrollTop;
				var iViewPortHeight = jQuery(oDomRef).height();
				if (iCurrentScrollTop >= iScrollTop) {
					// if we have to scroll up, the behavior is fine already
					this.setScrollTop(iScrollTop);
				} else if ((iScrollTop + sap.ui.commons.ListBox._fItemHeight) > (iCurrentScrollTop + iViewPortHeight)) { // bottom Edge of item > bottom edge of viewport
					// the item is - at least partly - below the current viewport of the ListBox, so scroll down. But only as far as required
					this.setScrollTop(Math.ceil(iScrollTop + sap.ui.commons.ListBox._fItemHeight - iViewPortHeight)); // round because of _fItemHeight
				} else {
					// if the item is already fully visible, do nothing
				}
			}
		}
		// store the actual position
		this.getScrollTop();
	} else {
		// control not yet rendered, thus item height is unknown, so remember request for after rendering
		this.oScrollToIndexRequest = {iIndex:iIndex,bLazy:bLazy};
	}
	return this;
};

sap.ui.commons.ListBox.prototype.getVisibleItems = function() {
	return this._iVisibleItems;
};

/**
 * Makes the ListBox render with a height that allows it to display exactly the given number of items.
 *
 * @param {int} iItemCount the number of items that should fit into the ListBox without scrolling
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setVisibleItems = function(iItemCount) {
 /*
	*For the calculation, the size of the first item is used; if no item is present, an invisible dummy item
	* is rendered and instantly removed again.
	* Therefore, this method will not work for items with different heights and if actual items have a different
	* size than generic empty dummy items.
	*/
	// TODO: prevent values less than 1, or make them go back to CSS heights
	this.setProperty("visibleItems", iItemCount, true);

	this._bHeightInItems = true;
	this._iVisibleItems = iItemCount;

	// the actual height to set must be calculated now or later
	this._sTotalHeight = null;

	// if already rendered, calculate and set the height
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		var oFirstItem = oDomRef.firstChild ? oDomRef.firstChild.firstChild : null;
		if (oFirstItem || ((sap.ui.commons.ListBox._fItemHeight > 0) && (sap.ui.commons.ListBox._iBordersAndStuff > 0))) {
			oDomRef.style.height = this._calcTotalHeight();
		} else {
			// already rendered, but no dummy item!
			this.invalidate();
		}
	}

	if (this._sTotalHeight == null) { // this is the "else" clause covering all cases where the height was not set above
		// called before rendering, so the calculation and setting of the actual CSS height to set must be done later
	}

	return this;
};


/**
 * Calculates the outer height of the ListBox from the known item height and number of items that should fit.
 * The result (a CSS size string) is returned as well as assigned to this._sTotalHeight.
 * Precondition: the control is rendered, this._iVisibleItems, sap.ui.commons.ListBox._iBordersAndStuff and
 * sap.ui.commons.ListBox._fItemHeight are initialized.
 *
 * @returns {string} the required outer height as CSS size
 * @private
 */
sap.ui.commons.ListBox.prototype._calcTotalHeight = function() {
	// TODO: check preconditions
	var desiredHeight = this._iVisibleItems * sap.ui.commons.ListBox._fItemHeight;
	this._sTotalHeight = (desiredHeight + sap.ui.commons.ListBox._iBordersAndStuff) + "px";
	return this._sTotalHeight;
};


/**
 * Sets the height of this ListBox in CSS units

 * @param {string} sHeight
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setHeight = function(sHeight) {
	this._bHeightInItems = false;
	this._iVisibleItems = -1;

	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.height = sHeight;
		this._updatePageSize();
		if (this.oItemNavigation) {
			this.oItemNavigation.setPageSize(this._iVisibleItems); // Page down by number of visible items
		}
	}

	this.setProperty("height", sHeight, true); // no re-rendering
	return this;
};

/**
 * Setter for property width.
 *
 * @param {string} sWidth
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setWidth = function(sWidth) {
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.width = sWidth;
	}
	this.setProperty("width", sWidth, true); // no re-rendering
	return this;
};

/**
 * Positions the ListBox contents that are scrolled-down by the given number of pixels
 *
 * @param {int} iScrollTip Vertical scroll position in pixels
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setScrollTop = function (iScrollTop) {
	var scrollDomRef = this.getDomRef();
	this.oScrollToIndexRequest = null; // delete any pending scroll request
	if (scrollDomRef) {
		scrollDomRef.scrollTop = iScrollTop;
	}
	this.setProperty("scrollTop", iScrollTop, true); // no rerendering
	return this;
};

/**
 * Returns how many pixels the ListBox contents are currently scrolled down
 *
 * @return {int} Vertical scroll position
 * @public
 */
sap.ui.commons.ListBox.prototype.getScrollTop = function () {
	var scrollDomRef = this.getDomRef();
	if (scrollDomRef) {
		var scrollTop = scrollDomRef.scrollTop;
		this.setProperty("scrollTop", scrollTop, true);
		return scrollTop;
	} else {
		return this.getProperty("scrollTop");
	}
};



/* --- user interaction handling methods --- */

sap.ui.commons.ListBox.prototype.onfocusin = function (oEvent) {
	if(jQuery.browser.msie && ((jQuery.browser.version == "7.0") || (jQuery.browser.version == "8.0")) /* =IE8! */ && (oEvent.target != this.getDomRef()) && (oEvent.target.className != "sapUiLbxI")) {
		var parent = oEvent.target.parentNode;

		if (jQuery(parent).hasClass("sapUiLbxI")) {
			parent.focus();
		}
	}
};

sap.ui.commons.ListBox.prototype.onclick = function (oEvent) {
	this._handleUserActivation(oEvent);
};

sap.ui.commons.ListBox.prototype.onsapspace = function (oEvent) {
	this._handleUserActivation(oEvent);
};

/*
 * Ensure the sapspace event with modifiers is also handled as well as the respective "enter" events
 */

sap.ui.commons.ListBox.prototype.onsapspacemodifiers = sap.ui.commons.ListBox.prototype.onsapspace;
sap.ui.commons.ListBox.prototype.onsapenter = sap.ui.commons.ListBox.prototype.onsapspace;
sap.ui.commons.ListBox.prototype.onsapentermodifiers = sap.ui.commons.ListBox.prototype.onsapspace;

/**
 * Internal method invoked when the user activates an item. Differentiates and dispatches according to modifier key
 * and current selection.
 *
 * @private
 */
sap.ui.commons.ListBox.prototype._handleUserActivation = function (oEvent) {
	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	var oSource = oEvent.target;
	if (oSource.id === "" || jQuery.sap.endsWith(oSource.id, "-txt")) {
		oSource = oSource.parentNode;
		if (oSource.id === "") { // could be the image inside the first cell
			oSource = oSource.parentNode;
		}
	}
	if (oSource.id.substr(0, this.getId().length + 2) == this.getId() + "-I") { // This is how item IDs start
		var iIndex = parseInt(oSource.id.substr(this.getId().length + 2), 10); // Get the selected index from the ID  TODO: ugly

		var aItems = this.getItems();
		var oItem = aItems[iIndex]; // oItem could be a separator, though!

		// It could be the case that the list of items changed during the click event handling. Ensure the item is still the one in
		if (aItems.length <= iIndex) {  // TODO: very questionable! Why set the index to the last position? And why allow removing items during the processing?  Remove!
			iIndex = aItems.length - 1;
		}

		if (iIndex >= 0 && iIndex < aItems.length) { // TODO: this should be known by now
			if (oItem.getEnabled() && !(oItem instanceof sap.ui.core.SeparatorItem)) {
				// Take care of selection and select event
				if (oEvent.metaKey) { // = CTRL
						this._handleUserActivationCtrl(iIndex, oItem);
				} else {
					if (oEvent.shiftKey) {
						this.setSelectedIndices(this._getUserSelectionRange(iIndex));
						this.fireSelect({
							id:this.getId(),
							selectedIndex:iIndex,
							selectedIndices:this.getSelectedIndices(), /* NEW (do not use hungarian prefixes!) */
							selectedItem:oItem,
							sId:this.getId(),
							aSelectedIndices:this.getSelectedIndices() /* OLD */
						});
						this._iLastDirectlySelectedIndex = iIndex;
					} else {
						this._handleUserActivationPlain(iIndex, oItem);
					}
				}
			}
		}
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Called when the user triggers an item without holding a modifier key.
 * Changes the selection in the expected way.
 *
 * @private
 */
sap.ui.commons.ListBox.prototype._handleUserActivationPlain = function (iIndex, oItem) {
	this._iLastDirectlySelectedIndex = iIndex;
	this.oItemNavigation.setSelectedIndex(this._getNavigationIndexForRealIndex(iIndex));
	if (this.getSelectedIndex() != iIndex || this.getSelectedIndices().length > 1) {
		this.setSelectedIndex(iIndex); // Replace selection

		this.fireSelect({
			id:this.getId(),
			selectedIndex:iIndex,
			selectedIndices:this.getSelectedIndices(), /* NEW (do not use hungarian prefixes!) */
			selectedItem:oItem,
			sId:this.getId(),
			aSelectedIndices:this.getSelectedIndices() /* OLD */
		});
	}
};

/**
 * Called when the user triggers an item while pressing the Ctrl key.
 * Changes the selection in the expected way for the "Ctrl" case.
 *
 * @private
 */
sap.ui.commons.ListBox.prototype._handleUserActivationCtrl = function (iIndex, oItem) {
	this._iLastDirectlySelectedIndex = iIndex;
	this.oItemNavigation.setSelectedIndex(this._getNavigationIndexForRealIndex(iIndex));
	if (this.isIndexSelected(iIndex)) {
		this.removeSelectedIndex(iIndex); // Remove from multi-selection
	} else {
		this.addSelectedIndex(iIndex); // Add to multi-selection
	}

	this.fireSelect({
		id:this.getId(),
		selectedIndex:iIndex,
		selectedIndices:this.getSelectedIndices(), /* NEW (do not use hungarian prefixes!) */
		selectedItem:oItem,
		sId:this.getId(),
		aSelectedIndices:this.getSelectedIndices() /* OLD */
	});
};

/**
 * Calculates the list of indices ranging from the previously selected item to the
 * given index. Used internally for calculating the new selection range when the user holds the "shift" key
 * while clicking in the ListBox.
 *
 * @private
 */
sap.ui.commons.ListBox.prototype._getUserSelectionRange = function (iIndex) {
	if (this._iLastDirectlySelectedIndex == -1) {
		// TODO: Use focus and continue execution
		return [];
	}

	var aItems = this.getItems();
	var aRange = [];
	if (this._iLastDirectlySelectedIndex <= iIndex) {
		for (var i = this._iLastDirectlySelectedIndex; i <= iIndex; i++) {
			if ((i > -1) && (aItems[i].getEnabled() && !(aItems[i] instanceof sap.ui.core.SeparatorItem))) {
				aRange.push(i);
			}
		}
	} else {
		for (var i = iIndex; i <= this._iLastDirectlySelectedIndex; i++) {
			if ((i > -1) && (aItems[i].getEnabled() && !(aItems[i] instanceof sap.ui.core.SeparatorItem))) {
				aRange.push(i);
			}
		}
	}
	return aRange;
};



/* --- Overwritten setters and getters affecting the selection --- */

sap.ui.commons.ListBox.prototype.getSelectedIndex = function() {
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			return i;
		}
	}
	return -1;
};

sap.ui.commons.ListBox.prototype.setSelectedIndex = function(iSelectedIndex) {
	if ((iSelectedIndex < -1) || (iSelectedIndex > this._aSelectionMap.length-1)) {
		return;
	} // Invalid index

	// do not select a disabled or separator item
	var aItems = this.getItems();
	if ((iSelectedIndex > -1) && (!aItems[iSelectedIndex].getEnabled() || (aItems[iSelectedIndex] instanceof sap.ui.core.SeparatorItem))) {
		return;
	}

	for (var i = 0; i < this._aSelectionMap.length; i++) {
		this._aSelectionMap[i] = false;
	}
	this._aSelectionMap[iSelectedIndex] = true;
	// And inform the itemNavigation about this, too
	if(this.oItemNavigation) {
		this.oItemNavigation.setSelectedIndex(this._getNavigationIndexForRealIndex(iSelectedIndex));
	}
	this.getRenderer().handleSelectionChanged(this);
	
	return this;
};

sap.ui.commons.ListBox.prototype.addSelectedIndex = function(iSelectedIndex) {
	if (!this.getAllowMultiSelect()) { // If multi-selection is not allowed, this call equals setSelectedIndex
		this.setSelectedIndex(iSelectedIndex);
	}

	// Multi-selectable case
	if ((iSelectedIndex < -1) || (iSelectedIndex > this._aSelectionMap.length-1)) {
		return;
	} // Invalid index

	// do not select a disabled or separator item
	var aItems = this.getItems();
	if ((iSelectedIndex > -1) && (!aItems[iSelectedIndex].getEnabled() || (aItems[iSelectedIndex] instanceof sap.ui.core.SeparatorItem))) {
		return;
	}

	if (this._aSelectionMap[iSelectedIndex]) {
		return;
	} // Selection does not change

	// Was not selected before
	this._aSelectionMap[iSelectedIndex] = true;
	this.getRenderer().handleSelectionChanged(this);
	
	return this;
};

sap.ui.commons.ListBox.prototype.removeSelectedIndex = function(iIndex) {
	if ((iIndex < 0) || (iIndex > this._aSelectionMap.length-1)) {
		return;
	} // Invalid index

	if (!this._aSelectionMap[iIndex]) {
		return;
	} // Selection does not change

	// Was selected before
	this._aSelectionMap[iIndex] = false;
	this.getRenderer().handleSelectionChanged(this);
	
	return this;
};

sap.ui.commons.ListBox.prototype.clearSelection = function() {
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			this._aSelectionMap[i] = false;
		}
	}
	// More or less re-initialized
	this._iLastDirectlySelectedIndex = -1;
	// Reset the index also in ItemNavigation
	if(this.oItemNavigation) {
		this.oItemNavigation.setSelectedIndex(-1);
	}
	this.getRenderer().handleSelectionChanged(this);
	
	return this;
};



sap.ui.commons.ListBox.prototype.getSelectedIndices = function() {
	var aResult = [];
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			aResult.push(i);
		}
	}
	return aResult;
};

sap.ui.commons.ListBox.prototype.setSelectedIndices = function(aSelectedIndices) {
	var indicesToSet = [];
	var aItems = this.getItems();
	for (var i = 0; i < aSelectedIndices.length; i++) {
		if ((aSelectedIndices[i] > -1) && (aSelectedIndices[i] < this._aSelectionMap.length)) {
			if (aItems[aSelectedIndices[i]].getEnabled() && !(aItems[aSelectedIndices[i]] instanceof sap.ui.core.SeparatorItem)) {
				indicesToSet.push(aSelectedIndices[i]);
			}
		}
	}

	if (indicesToSet.length > 0) { // TODO: Disable event listening to items??
		// With multi-selection disabled, use the first valid index only
		if (!this.getAllowMultiSelect()) {
			indicesToSet = [indicesToSet[0]];
		}
	}

	for (var i = 0; i < this._aSelectionMap.length; i++) {
		this._aSelectionMap[i] = false;
	}

	// O(n+m)
	for (var i = 0; i < indicesToSet.length; i++) {
		this._aSelectionMap[indicesToSet[i]] = true;
	}
	this.getRenderer().handleSelectionChanged(this);
	
	return this;
};

sap.ui.commons.ListBox.prototype.addSelectedIndices = function(aSelectedIndices) {
	var indicesToSet = [];
	var aItems = this.getItems();
	for (var i = 0; i < aSelectedIndices.length; i++) {
		if ((aSelectedIndices[i] > -1) && (aSelectedIndices[i] < this._aSelectionMap.length)) {
			// do not select a disabled or separator item
			if (aItems[aSelectedIndices[i]].getEnabled() && !(aItems[aSelectedIndices[i]] instanceof sap.ui.core.SeparatorItem)) {
				indicesToSet.push(aSelectedIndices[i]);
			}
		}
	}

	if (indicesToSet.length > 0) { // TODO: Disable event listening to items??
		// With multi-selection disabled, use the first valid index only
		if (!this.getAllowMultiSelect()) {
			indicesToSet = [indicesToSet[0]];
		}

		// O(n+m)
		for (var i = 0; i < indicesToSet.length; i++) {
			this._aSelectionMap[indicesToSet[i]] = true;
		}
		this.getRenderer().handleSelectionChanged(this);
	}
	return this;
};


sap.ui.commons.ListBox.prototype.isIndexSelected = function(iIndex) {
	if ((iIndex < -1) || (iIndex > this._aSelectionMap.length-1)) {
		return false; // Invalid index -> not selected
	}

	return this._aSelectionMap[iIndex];
};


sap.ui.commons.ListBox.prototype.setSelectedKeys = function(aSelectedKeys) {
	var aIndices = [];
	var aItems = this.getItems();

	var key;
	var mKeyMap = {};
	for (var i = 0; i < aSelectedKeys.length; i++) { // put the keys into a map to hopefully search faster below
		if (key = aSelectedKeys[i]) {
			mKeyMap[key] = true;
		}
	} 
	
	var aIndices = [];
	for (var j = 0; j < aItems.length; j++) {
		if ((key = aItems[j].getKey()) && (mKeyMap[key])) {
			aIndices.push(j);
		}
	}
	
	return this.setSelectedIndices(aIndices);
};

sap.ui.commons.ListBox.prototype.getSelectedKeys = function() {
	var aItems = this.getItems();
	var aResult = [];
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			aResult.push(aItems[i].getKey());
		}
	}
	return aResult;
};


sap.ui.commons.ListBox.prototype.getSelectedItem = function() {
	var iIndex = this.getSelectedIndex();
	if ((iIndex < 0) || (iIndex >= this._aSelectionMap.length)) {
		return null;
	}
	return this.getItems()[iIndex];
};

sap.ui.commons.ListBox.prototype.getSelectedItems = function() {
	var aItems = this.getItems();
	var aResult = [];
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			aResult.push(aItems[i]);
		}
	}
	return aResult;
};

sap.ui.commons.ListBox.prototype.setAllowMultiSelect = function(bAllowMultiSelect) {
	this.setProperty("allowMultiSelect", bAllowMultiSelect);
	var oneWasSelected = false;
	var twoWereSelected = false;
	if (!bAllowMultiSelect && this._aSelectionMap) {
		for (var i = 0; i < this._aSelectionMap.length; i++) {
			if (this._aSelectionMap[i]) {
				if (!oneWasSelected) {
					oneWasSelected = true;
				} else {
					this._aSelectionMap[i] = false;
					twoWereSelected = true;
				}
			}
		}
	}
	if (twoWereSelected) {
		this.getRenderer().handleSelectionChanged(this);
	}
	return this;
};


/**
 * Handles the event that gets fired by the {@link sap.ui.core.delegate.ItemNavigation} delegate.
 *
 * @param {sap.ui.base.Event} oControlEvent The event that gets fired by the {@link sap.ui.core.delegate.ItemNavigation} delegate.
 * @private
 */
sap.ui.commons.ListBox.prototype._handleAfterFocus = function(oControlEvent){
	var iIndex = oControlEvent.getParameter("index");
	iIndex = iIndex !== undefined && iIndex >= 0? this._aActiveItems[iIndex]:0;

	this.getRenderer().handleARIAActivedescendant(this, iIndex);
};

/* --- "items" aggregation methods, overwritten to update _aSelectionMap and allow filteredItems --- */

/*
 * Implementation of API method setItems.
 * Semantically belonging to "items" aggregation but not part of generated method set.
 */
sap.ui.commons.ListBox.prototype.setItems = function(aItems, bDestroyItems) {
	if(bDestroyItems) {
		this.destroyItems();
	} else {
		this.removeAllItems();
	}
	for(var i = 0, l = aItems.length; i < l; i++){
		this.addItem(aItems[i]);
	}
	return this;
};

sap.ui.commons.ListBox.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	if ( !this._aSelectionMap ) {
		this._aSelectionMap = [];
	}
	this._aSelectionMap.push(false);
	return this;
};

sap.ui.commons.ListBox.prototype.insertItem = function(oItem, iIndex) {
	if ((iIndex < 0) || (iIndex > this._aSelectionMap.length)) {
		return;
	} // Ignore invalid index TODO:: check behavior for iIndex=length
	// TODO: Negative indices might be used to count from end of array

	this.insertAggregation("items", oItem, iIndex);
	this._aSelectionMap.splice(iIndex, 0, false);

	this.invalidate();
	return this;
};

sap.ui.commons.ListBox.prototype.removeItem = function(vElement) {
	var iIndex = vElement;
	if (typeof(vElement) == "string") { // ID of the element is given
		vElement = sap.ui.getCore().byId(vElement);
	}
	if (typeof(vElement) == "object") { // the element itself is given or has just been retrieved
		iIndex = this.indexOfItem(vElement);
	}

	if ((iIndex < 0) || (iIndex > this._aSelectionMap.length-1)) {
		return;
	} // Ignore invalid index

	var oRemoved = this.removeAggregation("items", iIndex);
	this._aSelectionMap.splice(iIndex, 1);

	this.invalidate();
	return oRemoved;
};

sap.ui.commons.ListBox.prototype.removeAllItems = function() {
	var oRemoved = this.removeAllAggregation("items");

	this._aSelectionMap = [];

	this.invalidate();
	return oRemoved;
};

sap.ui.commons.ListBox.prototype.destroyItems = function() {
	var destroyed = this.destroyAggregation("items");

	this._aSelectionMap = [];

	this.invalidate();
	return destroyed;
};

/**
 * Does all the cleanup when the ListBox is to be destroyed.
 * Called from the element's destroy() method.
 * @private
 */
sap.ui.commons.ListBox.prototype.exit = function (){
	if (this.oItemNavigation) {
		this.removeDelegate(this.oItemNavigation);
		this.oItemNavigation.destroy();
	}

	// No super.exit() to call
};

/*
 * Overrides getFocusDomRef of base element class.
 * @public
 */
sap.ui.commons.ListBox.prototype.getFocusDomRef = function() {
	return jQuery.sap.domById(this.getId() + '-list');
};

/*
 * Overwrites default implementation
 * the label must point to the UL element
 * @public
 */
sap.ui.commons.ListBox.prototype.getIdForLabel = function () {
	return this.getId()+'-list';
};
