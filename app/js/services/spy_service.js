spyService = {
  postError: function(msg, url, lineNo) {
    console.log(bbSpy[0], msg, url, lineNo);
    var data = {
      model_state: JSON.stringify(bbSpy),
      error_message: msg,
      url: url,
      line_no: lineNo,
    };
    $.ajax({
      type: "POST",
      url: '/bbs_error',
      success: console.log("success post", data),
      data: data,
    });
  },

  performance: function(name, t){
    console.log(name, t);
  },

  startTimer: function(name){
    this.performanceStorage = this.performanceStorage || {};
    return this.performanceStorage[name] = {
      name: name,
      timeStarted: new Date().getTime(),
    };
  },

  stopTimer: function(name){
    var performed = this.performanceStorage[name];
    performed.timeStopped = new Date().getTime();
    this.postPerformance(performed);
  },

  postPerformance: function(obj){
    var data = JSON.stringify(obj);
    $.ajax({
      url: 'bbs_performance',
      type: 'POST',
      data: data,
      success: console.log("performance posted", data)
    });
  },
};
