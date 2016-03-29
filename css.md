
#CSS 技巧

###怎么用CSS控制表单中的RADIO样式？
用label，例如：

    .add_cart_radio{
        float:left;
        margin-top:0.5em;
        margin-right:0.5em;
    }
    .add_cart_radio input[type="radio"]{
        display:none;
    }
    .add_cart_radio input[type="radio"] + label{
        padding:0.2em 1em;
        border:1px solid #CCCCCC;
        border-radius:0.5em;
        color:#999;
    }
    .add_cart_radio input[type="radio"]:checked + label{
        padding:0.2em 1em;
        border:1px solid #FF6600;
        border-radius:0.5em;
        background:#FF6600;
        color:#FFFFFF;
    }
    
###条件注释判断浏览器版本

    <!--[if !IE]><!--> 除IE外都可识别 <!--<![endif]-->
    <!--[if IE]> 所有的IE可识别 <![endif]-->
    <!--[if IE 6]> 仅IE6可识别 <![endif]-->
    <!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->
    <!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
    <!--[if IE 7]> 仅IE7可识别 <![endif]-->
    <!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
    <!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
    <!--[if IE 8]> 仅IE8可识别 <![endif]-->
    <!--[if IE 9]> 仅IE9可识别 <![endif]-->
