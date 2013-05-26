window.app = {
  views: {},
  models: {},
  services: {}
};

window.bbSpy = [];

monkeyPatch = {
    monkey: "dirty",
    spyMonkey: function(){
        bbSpy.push(this);
    }
};

_.extend(Backbone.View.prototype, monkeyPatch);
AppView = Backbone.View.extend();
appView = new AppView();
appView.spyMonkey();
