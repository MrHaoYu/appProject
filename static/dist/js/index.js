$.ajax({url:"mock/data.json",type:"get",dataType:"json",data:{param1:"value1"},success:function(a){console.log("success"),console.log(a);var o=template("model",{data:a});document.getElementById("goodbox").innerHTML=o,$(".bnt").click(function(){var a="detail.html?"+$(this).data("id");window.location.href=a,console.log($(this).data("id"))})}});