sap.ui.jsview("Views.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Views.App
	*/ 
	getControllerName : function() {
		return "Views.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Views.App
	*/ 
	createContent : function(oController) {
 		
		
		var omodel = new sap.ui.model.json.JSONModel();
		
		$.ajax({
			
			url:'http://services.odata.org/V4/Northwind/Northwind.svc/Products',
			type:'GET',
			success:function(osucc){
				
				
				omodel.setData({cust:osucc.value});
				
				
			},
			error:function(oerr){
				
				alert('failure');
				
			}
			
			
		});
		
		
				
		this.app = new sap.m.SplitApp();
 				
 		var omaster = sap.ui.view({id:"idmaster", viewName:"Views.Master", type:'XML'});
 		
 		this.setModel(omodel);
 		this.app.addPage(omaster,true);
 		
        var odetail = sap.ui.view({id:"iddetail", viewName:"Views.Detail", type:'XML'});
 		
 		this.app.addPage(odetail);
 		
 		var i18n = new sap.ui.model.resource.ResourceModel({bundleUrl:"i18n/messagebundle.properties"});
 		
 		this.setModel(i18n,'karthik');
 		
 		var device = new sap.ui.model.json.JSONModel({phone:$.device.is.phone});
 		
 		this.setModel(device,'mobile');
 		
 		return this.app;
 		
	}

});