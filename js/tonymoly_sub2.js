$(function(){
    var btn = $('.content.cnt03 .btn');
    var btn2 = $('.fixbtns .btn:last');   
    var hdbtn = $('div.hdrWrap>div.header>ul.nav>li').last();
    var mnnav=$('div.navBox');   
    var mnbtn = $('div.navBox>div.top>div.btn');
    var ht = $('div.fixbtns>div.btn').first();
    var ht2 = $('div.heart');
    var pcht = $('div.mainWrap>div.main>div.group>div.texts>div.btns>div.btn').eq(0);
    var pccart = $('div.mainWrap>div.main>div.group>div.texts>div.btns>div.btn').eq(1);
    var pmcart = $('div.fixbtns>div.btn').eq(1);
    var cart = $('div.cart');
    
    pccart.click(function(){
        pccart.toggleClass('show2');
        cart.toggleClass('gog');
    });
    pmcart.click(function(){
        pmcart.toggleClass('on');
        cart.toggleClass('gog');
    });

    hdbtn.click(function(){
        mnnav.css({width:'100vw',opacity:'1'});
    });

    mnbtn.click(function(){
        mnnav.css({width:'0vw',opacity:'0'});
    });

    btn.click(function(){
        $('html,body').stop().animate({

            scrollTop: 0

        },500);
    });
    btn2.click(function(){
        $('html,body').stop().animate({

            scrollTop: 0

        },500);
    });
    pcht.click(function(){
        pcht.toggleClass('show');
        ht2.toggleClass('com');
    });
    ht.click(function(){
        ht.toggleClass('on');
        ht2.toggleClass('com');

    });

});