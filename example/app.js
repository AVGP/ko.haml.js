ko.setTemplateEngine(new ko.hamlEngine());

var AppViewModel = function() {
    this.model = {
        name: ko.observable("John Doe")
    };
};

ko.applyBindings(new AppViewModel());