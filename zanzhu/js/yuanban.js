var zanzhu=document.getElementById('zanzhu');
var zanzhu_zhebi=document.getElementById('zanzhu_zhebi');
// 1.点击"点击，弹出登陆框",弹出支付窗口和遮盖层
var zanzu_alipay=document.getElementById('zanzu_alipay');
document.onclick=function()
{
    var obj = event.srcElement;
    switch(obj.id){
        case "zanzu_alipay":
            zanzhufunction("支付宝赞助页面","./img/pay-alipay.webp");
            break;
        case "zanzu_wechat":
            zanzhufunction("微信赞助页面","./img/pay-wechat.webp");
            break;
        case "zanzu_qq":
            zanzhufunction("QQ赞助页面","./img/qqpay.webp");
            break;
        case "zanzu_alipay_hongbao":
            zanzhufunction("支付宝红包码","./img/alihong.webp");
            break;
    }
    
}

function zanzhufunction(zanzhutitle,zanzhuimg){
     document.getElementById("zanzhu_title").innerHTML=zanzhutitle;
     document.getElementById("zanzhu-img").innerHTML='<img src="'+zanzhuimg+'" />';
     zanzhu.style.display="block";
     zanzhu_zhebi.style.display="block";
     return false;
}

var closeBtn=document.getElementById('closeBtn');
closeBtn.onclick=function(){
    zanzhu.style.display="none";
    zanzhu_zhebi.style.display="none";
    return false;
}