! function(window) {
  function LoadingUtil() {

  }

  LoadingUtil.prototype.loading = function() {
    layer.open({
      type: 2,
      content: '加载中',
      shadeClose: false,
      success: function(elem) {
        console.log(elem);
        setTimeout(function() {
          layer.closeAll()
        }, 3000)
      }
    });
  }
  
  window.LoadingUtil = {
    getInstance:function(){
      return new LoadingUtil();
    }
  }
}(window)
