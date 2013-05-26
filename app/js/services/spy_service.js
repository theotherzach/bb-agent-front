spyService = {
  postError: function(msg, url, lineNo)  {
    console.log(bbSpy[0], msg, url, lineNo);
    var data = {
      model_state: JSON.stringify(bbSpy),
      error_message: msg,
      url: url,
      line_no: lineNo,
    };
    $.ajax({
      type: "POST",
      url: '/bb_spy',
      success: console.log("success post", data),
      data: data,
    });
  }
}
