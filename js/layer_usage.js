var style = 'position:fixed; top:50%; left:50%; margin-top:-100px;margin-left:-150px;height: 200px;width:300px; border:1px solid red;'
var content = '<div class="div1" id="prompt" style="  display: block;   margin-top: 10px;">' +
  '<div class="weui-cell">' +
  '<div class="weui-cell__hd"><label style="width: 70px;" class="weui-label">身高</label></div>' +
  '<div class="weui-cell__bd">' +
  '<input id="height" style=" " class="weui-input" type="text" placeholder="请输入数字 如：180">' +
  '</div>' +
  '<div>厘米</div>' +
  '</div>' +
  '<a href="javascript:;" style=" background-color: #0e90d2;   height: 35px;line-height: 35px;" class="weui-btn weui-btn_primary">确 定</a>' +
  '</div>'

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
  .on("click", "#prompt_box", function() {
    //提示
    layer.open({
      content: 'hello layer',
      skin: 'msg',
      time: 2 //2秒后自动关闭
    });
  })
  .on("click", "#prompt_myself", function() {
    //提示
    layer.open({
      type: 1,
      title: [
        '填写身高信息',
        'background-color: #FF4351; color:#fff;height:45px;text-align:left;line-height:50px;'
      ],
      content: content,
      style: style
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
      shadeClose: false,
      success: function(elem) {
        console.log(elem);
        setTimeout(function() {
          // layer.closeAll()
          console.log('parent', parent)
          parent.layer.closeAll();
        }, 2000)
      }
    });
  });
