/**
 * Created by Administrator on 2017/9/13.
 */
$(document).ready(function () {

    //登录
    $("#btn").click(function () {
        checkSubmitLogin();
    });
    //登录验证
    function checkSubmitLogin() {
        var user = $("#user").val();
        var pwd = $("#password").val();
        // var code = $("#code").val();
        var flag = false;

        if ($("#user").val() == "") {
            //$("#confirmMsg").html("<font color='red'>邮箱地址不能为空！</font>");
            $(".warning").css("display","block");
            $(".warning").html("用户名不能为空");
            $("#user").focus();
        }else {
            if (!$("#user").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
                if (!$("#user").val().match(/^1(3|4|5|7|8)\d{9}$/)) {//验证手机号码
                    if(!user.match(/^2\d{9}$/)){
                        if(!user.match(/^2\d{7}$/)){
                            $(".warning").css("display", "block");
                            $(".warning").html("格式不正确！请重新输入！");
                            //$("#moileMsg").html("<font color='red'>手机号码格式不正确！请重新输入！</font>");
                            $("#user").focus();
                        }else {
                            if($("#password").val().length == 0 ){
                                $(".warning").css("display","block");
                                $(".warning").html("密码不能为空");
                                $("#password").focus();

                            }else {
                                $(".warning").css("display", "none");
                                flag = true;

                            }
                        }
                    }else {
                        if($("#password").val().length == 0 ){
                            $(".warning").css("display","block");
                            $(".warning").html("密码不能为空");
                            $("#password").focus();

                        }else {
                            $(".warning").css("display", "none");
                            flag = true;

                        }
                    }
                }else {
                    if($("#password").val().length == 0 ){
                        $(".warning").css("display","block");
                        $(".warning").html("密码不能为空");
                        $("#password").focus();

                    }else {
                        $(".warning").css("display", "none");
                        flag = true;

                    }
                }
            } else {
                if($("#password").val().length == 0 ){
                    $(".warning").css("display","block");
                    $(".warning").html("密码不能为空");
                    $("#password").focus();

                }else {
                    $(".warning").css("display", "none");
                    flag = true;

                }
            }
        }

        if (flag) {
            $.ajax({
                type:"POST",
                url:"index/check",
                data:{"username":user,"password":pwd},
                success:function(data) {
                    if (data == "login_succ"){
                        alert(data);
                        window.location.href="/index";
                    }else if(data == "login_fail_code"){

                    }else {
                        $(".warning").css("display","block");
                        $(".warning").html("用户名或密码错误");
                        // changeCodeImg();
                    }
                }
            });
        }
    }

    //注册
    $("#registerBtn").click(function () {
        var user = $("#registerUser").val();
        var pwd = $("#registerPassword").val();
        var rightpwd = $("#rightPassword").val();
        if (user.length != 0 & pwd.length != 0 & rightpwd.length != 0){
            $.ajax({
                type:"POST",
                url:"index/register",
                data:{"username":user,"password":pwd},
                success:function(data) {
                    if (data == "register_succ"){
                        $("#checkForm").css("display","none");
                        $(".here").css("display","block");
                    } else {
                        alert("注册失败");
                    }
                }
            });
        }
    });

    //验证手机和邮箱
    $.validator.addMethod("check",function(value,element){
        var length = value.length;
        var mobile = /^1(3|4|5|7|8)\d{9}$/;
        var email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]*$/;
        if(length==11) {
            $(".verification").css("display", "block");
            return this.optional(element) || (length == 11 && mobile.test(value));
        }else if(email) {
            $(".verification").css("display", "none");
            return this.optional(element) || email.test(value);
        }
    }, "用户名必须是手机号码或者邮箱");
    //注册验证
    $("#checkForm").validate({
        rules: {
            registerUser:{
                required: true,
                check:true
                // email:true
            },
            registerPassword: {
                required: true,
                minlength: 6,
                maxlength:20
            },
            confirm_password: {
                required: true,
                minlength: 6,
                maxlength:20,
                equalTo: "#registerPassword"
            }
        },
        messages: {
            registerUser:{
                required: "用户名不能为空！",
                check:"用户名必须是手机号码或者邮箱！"
                // email:"邮箱格式不正确！"
            },
            registerPassword: {
                required: "密码不能为空！",
                minlength: "密码不能少于6位！",
                maxlength:"密码不能多于20位！"
            },
            confirm_password: {
                required: "确认密码不能为空！",
                minlength: "确认密码不能少于6位！",
                maxlength:"确认密码不能多于20位！",
                equalTo: "确认密码和密码不一致！"
            }
        }
    });
    $("#forgetForm").validate({
        rules: {
            registerUser: {
                required: true,
                check: true
                // email:true
            }
        },
        messages: {
            registerUser:{
                required: "用户名不能为空！",
                check:"用户名必须是手机号码或者邮箱！"
                // email:"邮箱格式不正确！"
            }
        }
    });
    $("#modificationForm").validate({
        rules: {
            modificationPassword: {
                required: true,
                minlength: 6,
                maxlength:20
            },
            cmd_password: {
                required: true,
                minlength: 6,
                maxlength:20,
                equalTo: "#modificationPassword"
            }
        },
        messages: {
            modificationPassword: {
                required: "密码不能为空！",
                minlength: "密码不能少于6位！",
                maxlength:"密码不能多于20位！"
            },
            cmd_password: {
                required: "确认密码不能为空！",
                minlength: "确认密码不能少于6位！",
                maxlength:"确认密码不能多于20位！",
                equalTo: "确认密码和密码不一致！"
            }
        }
    });
});