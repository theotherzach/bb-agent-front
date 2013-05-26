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

_.extend(Backbone.Model.prototype, monkeyPatch);
