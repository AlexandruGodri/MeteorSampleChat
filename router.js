Router.configure({
    //loadingTemplate: 'loading',
    notFoundTemplate: '404',
    layoutTemplate: 'LayoutApp'
});

var IR_BeforeHooks;
IR_BeforeHooks = {
	setLayout: function() {
		if (this.route.name == "__notfound__") {
			this.layout("Layout404");
		}
	}
};
Router.onBeforeAction(IR_BeforeHooks.setLayout);

Router.map(function() {
	this.route('home', { path: '/' });
	this.route('about');
	this.route('chat', {
		path: '/chat',
		controller: 'ChatController'
	});
});