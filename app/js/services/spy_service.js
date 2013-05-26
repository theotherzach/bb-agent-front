spyService = {
  postError: function(msg, url, lineNo) {
    // console.log(bbSpy[0], msg, url, lineNo);
    var data = {
      model_state: JSON.stringify(bbSpy),
      error_message: msg,
      url: url,
      line_no: lineNo,
    };
    $.ajax({
      type: "POST",
      url: '/bbs_error',
      // success: console.log("success post", data),
      data: data,
    });
  },

  performance: function(name, t){
    console.log(name, t);
  },

  startTimer: function(name){
    this.performances = this.performances || {};
    return this.performances[name] = {
      name: name,
      timeStarted: new Date().getTime(),
    };
  },

  stopTimer: function(name){
    var performed = this.performances[name];
    performed.timeStopped = new Date().getTime();
    performed.elapsed = performed.timeStopped - this.performances[name].timeStarted
    this.postPerformance(performed);
  },

  postPerformance: function(obj){
    var data = JSON.stringify(obj);
    $.ajax({
      url: 'bbs_performance',
      type: 'POST',
      data: data,
    });
  },
};
