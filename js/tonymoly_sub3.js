$(function(){

    var btn = $('div.cntWrap>div.content.cnt01>div.section>div.btns>div.btn');

    var ogr = $('.content.cnt01 .artGroup')

    var btn2 = $('.content.cnt02 .btn')

    var gr = $('.content.cnt02 .artGroup');


    $(window).resize(function(){

        if(window.innerWidth > 1024){

            gr.css({marginLeft:'-33.33%'});

            btn2.first().click(function(){
              
                gr.stop().animate({
        
                    marginLeft : '0%'
        
                },500,function(){
        
                    gr.find('.article:last').prependTo(gr);
                    gr.css({marginLeft:'-33.33%'})
        
                });
        
            })
        
            btn2.last().click(function(){
        
                gr.stop().animate({
        
                    marginLeft : '-66.66%'
        
                },500,function(){
        
                    gr.find('.article:first').appendTo(gr);
                    gr.css({marginLeft:'-33.33%'})
        
                });
        
            })

        }else if(window.innerWidth > 420){

            gr.css({marginLeft:'-50%'});
            ogr.css({marginLeft:'-33.33%'});

            btn.first().click(function(){

                ogr.stop().animate({
        
                    marginLeft : '0%'
        
                },500,function(){
        
                    ogr.find('.article:last').prependTo(ogr);
                    ogr.css({marginLeft:'-33.33%'})
        
                });
                
            });

            btn.eq(1).click(function(){

                ogr.stop().animate({
        
                    marginLeft : '-66.66%'
        
                },500,function(){
        
                    ogr.find('.article:first').appendTo(ogr);
                    ogr.css({marginLeft:'-33.33%'})
        
                });
                
            });

            btn2.first().click(function(){
              
                gr.stop().animate({
        
                    marginLeft : '0%'
        
                },500,function(){
        
                    gr.find('.article:last').prependTo(gr);
                    gr.css({marginLeft:'-50%'})
        
                });
        
            })
        
            btn2.last().click(function(){
        
                gr.stop().animate({
        
                    marginLeft : '-100%'
        
                },500,function(){
        
                    gr.find('.article:first').appendTo(gr);
                    gr.css({marginLeft:'-50%'})
        
                });
        
            })

        }else{

            gr.css({marginLeft:'-100%'});
            ogr.css({marginLeft:'-100%'});

            btn.first().click(function(){

                ogr.stop().animate({
        
                    marginLeft : '0%'
        
                },500,function(){
        
                    ogr.find('.article:last').prependTo(ogr);
                    ogr.css({marginLeft:'-100%'})
        
                });
                
            });

            btn.eq(1).click(function(){

                ogr.stop().animate({
        
                    marginLeft : '-200%'
        
                },500,function(){
        
                    ogr.find('.article:first').appendTo(ogr);
                    ogr.css({marginLeft:'-100%'})
        
                });
                
            });

            btn2.first().click(function(){
              
                gr.stop().animate({
        
                    marginLeft : '0%'
        
                },500,function(){
        
                    gr.find('.article:last').prependTo(gr);
                    gr.css({marginLeft:'-100%'})
        
                });
        
            })
        
            btn2.last().click(function(){
        
                gr.stop().animate({
        
                    marginLeft : '-200%'
        
                },500,function(){
        
                    gr.find('.article:first').appendTo(gr);
                    gr.css({marginLeft:'-100%'})
        
                });
        
            })

        }

    }).resize();
});