$(document).on("click", "#info_box", function() {
    //信息框
    layer.open({
      content: '移动版和PC版不能同时存在同一页面',
      btn: '我知道了'
    });
  })
  .on("click", "#prompt_box", function() {
    //提示
    layer.open({
      content: 'hello layer',
      skin: 'msg',
      time: 2 //2秒后自动关闭
    });
  })
  .on("click", "#ask_box", function() {
    //询问框
    layer.open({
      content: '您确定要刷新一下本页面吗？',
      btn: ['刷新', '不要'],
      yes: function(index) {
        location.reload();
        layer.close(index);
      }
    });
  })
  .on("click", "#loading_box", function() {
    //loading层
    layer.open({
      type: 2
    });
  })
  .on("click", "#loading_util_box", function() {
    //loading层
    LoadingUtil.getInstance().loading();
  })
  .on("click", "#loading_text_box", function() {
    layer.open({
      type: 2,
      content: '加载中',
      shadeClose:false,
      success: function(elem) {
        console.log(elem);
        setTimeout(function() {
          // layer.closeAll()
          console.log('parent',parent)
          parent.layer.closeAll();
        }, 2000)
      }
    });
  });
