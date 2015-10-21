sap.ui.controller("Views.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf Views.App
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf Views.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf Views.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf Views.App
*/
//	onExit: function() {
//
//	}

	to:function(id,context){
		
		var view = this.getView();
		var det = view.app.getPage('iddetail');
		
		view.app.to(id);
		det.setBindingContext(context);
		
		
	},
	
	back:function(id){
		var view = this.getView();
				
		view.app.backToPage(id);
		
		
		
		
	}
	
});