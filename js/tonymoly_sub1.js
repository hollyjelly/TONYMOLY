$(function(){

    var btn = $('.image>.btn');
    var ht = $('.heart');
    var bt = $('.content>.btn')
    var se = $('.section')
    var htt = $('div.cntWrap>div.content>div.section>div.group div.article>div.texts>div.icons');
    var i = 0; 
    var j = 0;
    var ic = $('.icons')
    var ind = 0;
    var hdbtn = $('div.hdrWrap>div.header>ul.nav>li').last();
    var mnnav=$('div.navBox');
    var mnbtn = $('div.navBox>div.top>div.btn');
    var cart = $('.cart');
    var num = 0;
    var wd = $(window).width();
    
    if(wd>1024){

        bt.click(function(){
            if(i<=1){
                i++;
                if(i==2){
                    bt.text('FOLD ▲');
                }
                se.css('height',(i+1)*910+'px');
                j=i;
           }else if(j>=1){
               j--;
               if(j==0){
                   bt.text('MORE ▼');
                   i=0;
               }
               se.css('height',( j+1)*930+'px');
           }
           console.log(j)
       });

    }else if(wd>420){

        bt.click(function(){
            if(i<=4){
                i++;
                if(i==5){
                    bt.text('FOLD ▲');
                }
                se.css('height',(i+1)*910+'px');
                j=i;
           }else if(j>=1){
               j--;
               if(j==0){
                   bt.text('MORE ▼');
                   i=0;
               }
               se.css('height',( j+1)*910+'px');
           }
           console.log(j)
       });
       
    }else{

        bt.click(function(){
            if(i<=8){
                i++;
                if(i==9){
                    bt.text('FOLD ▲');
                }
                se.css('height',(i+1)*910+'px');
                j=i;
           }else if(j>=1){
               j--;
               if(j==0){
                   bt.text('MORE ▼');
                   i=0;
               }
               se.css('height',( j+1)*910+'px');
           }
           console.log(j)
       });

    }

    hdbtn.click(function(){
        mnnav.css({width:'100vw',opacity:'1'});
    });

    mnbtn.click(function(){
        mnnav.css({width:'0vw',opacity:'0'});
    });
    
    
    htt.find('i:first').click(function(){
        

        btn.next().eq(ind).toggleClass('show')

        $(this).toggleClass('ht');

        btn.eq(ind).toggleClass('on');
        

    });
    
    $('.article').mouseover(function(){


        ind = $(this).index();

        
    });

    btn.click(function(){

        $(this).toggleClass('on');
        
        htt.find('i:first').eq(ind).toggleClass('ht');
        
        $(this).next().toggleClass('show');
    });
    
    htt.find('i:eq(1)').click(function(){
        $(this).toggleClass('car');
        cart.eq(ind).toggleClass('show5');

    });

    htt.find('i:eq(2)').click(function(){
        alert('링크가 복사되었습니다.');
    });
    

});