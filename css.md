
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
