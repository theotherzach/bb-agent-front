bbSpy = []

monkeyPatch = {
    monkey: "dirty",
    spyMonkey: function(){
        bbSpy.push(this);
    }
}

_.extend(Backbone.View.prototype, monkeyPatch);
AppView = Backbone.View.extend();
appView = new AppView;
appView.spyMonkey();


$('#testError').click (function () {
    throw ' Wicked bad error, guy. '
});
