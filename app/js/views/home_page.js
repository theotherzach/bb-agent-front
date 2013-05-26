window.app.views.HomePage = Backbone.View.extend({

  template: JST["app/templates/home.us"],

  initialize: function(options) {
    _.bindAll(this);
    this.AuthenticationService = options.AuthenticationService;
    this.model = new window.app.models.HomePage({hover_count: 0});
    this.model.spyMonkey();
    this.model.on("change:message", this.updateMessage);
  },

  events: {
    "mouseover .shows-message-when-hovered" : "setMessage",
    "mouseout  .shows-message-when-hovered" : "restoreMessage",
    "click #test-error": "errorz",
    "click .logout" : "logout"
  },

  setMessage: function(e) {
    var message = $(e.currentTarget).attr("message");
    this.model.set({
      message: message,
      hover_count: this.model.get('hover_count')+1,
    });
  },

  restoreMessage: function() {
    this.model.set("message", this.model.defaults.message);
  },

  updateMessage: function(model, message) {
    this.$(".alert-box").text(message);
  },

  logout: function() {
    this.AuthenticationService.logout().done(this.onLogoutSuccess);
  },

  onLogoutSuccess: function(response) {
    alert(response.message);
    Backbone.history.navigate('login', true);
  },

  errorz: function() {
    throw ' Wicked bad error, guy. ';
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
