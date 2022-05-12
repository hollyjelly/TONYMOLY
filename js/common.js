$(function(){
    $('.hdr').load('./inc/header.html',function(){
        var hdbtn=$('div.hdrWrap>div.header>ul.nav>li').last();
        var mnbtn = $('div.navBox>div.top>div.btn');
        var mnnav=$('div.navBox');

        hdbtn.click(function(){
            mnnav.css({width:'100vw',opacity:'1'});
        });
        mnbtn.click(function(){
            mnnav.css({width:'0vw',opacity:'0'});
        });
    });
    $('.ftr').load('./inc/footer.html');
});