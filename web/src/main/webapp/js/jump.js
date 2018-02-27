/**
 * Created by Administrator on 2017/9/14.
 */
$(document).ready(function () {

    //弹出登录框
    $(".sign").on("click",function () {
        layer.open({
            type: 1,
            title: false,
            area:'400px',
            offset:'100px',
            closeBtn:0,
            shadeClose: true, //点击遮罩关闭
            content: $('.signLogin')
        });
    });
    //登录注册跳转
    $("#newReg").click(function () {
        layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            area:'400px',
            offset:'100px',
            closeBtn:0,
            shadeClose: true, //点击遮罩关闭
            content: $('.register')
        });
    });
    //弹出注册页
    $("#registration").on("click",function () {
        layer.open({
            type: 1,
            title: false,
            area:'400px',
            offset:'100px',
            closeBtn:0,
            shadeClose: true, //点击遮罩关闭
            content: $('.register')
        });
    });
    //注册登录跳转
    $("#regLogin").click(function () {
        layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            area:'400px',
            offset:'100px',
            closeBtn:0,
            shadeClose: true, //点击遮罩关闭
            content: $('.signLogin')
        });
    });

    //找回密码跳转邮箱登录
    $("#forgetBtn").click(function () {
        var user= $("#forgetUser").val();
        if (user.length != 0) {
            $.ajax({
                type:"POST",
                url:"/auth/forget",
                data:{"username":user},
                success:function(data) {
                    if (data=="success"){
                         $(".find_back").css("display","none");
                         $(".send_email").css("display","block");
                    }else {
                        alert("非法操作！")
                    }
                }
            });
        }
    });

    $("#modificationBtn").click(function () {
        var password= $("#modificationPassword").val();
        if (password.length != 0) {
            $.ajax({
                type:"POST",
                url:"/auth/reset",
                data:{"password":password},
                success:function(data) {
                    if (data=="success"){
                        window.location.href="/index";
                    }else {
                        alert("非法操作！")
                    }
                }
            });
        }
    });
});