$(function () {
    Backbone.history.start({pushState: true, hashChange: false});
    var bikeCol = new _tc.Factory.Collections.baseCollection(_tc.bikes);
    var formView = new _tc.Factory.Views.formView({
    	el: $(".formView"),
    	collection: bikeCol
    });
});