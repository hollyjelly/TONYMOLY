$(function(){
    
    var btn3 = $('.btn');
    
    var gr = $('.artGroup');



    $(window).resize(function(){

        if(window.innerWidth > 1024){

            gr.css({marginLeft:'-25%'});

            btn3.first().click(function(){
        
                gr.stop().animate({
        
                    marginLeft:'-50%'
        
                },500,function(){
        
                    gr.find('.article:first').appendTo(gr)
                    gr.css({marginLeft:'-25%'});
        
                });
        
            });

            btn3.eq(1).click(function(){
        
                gr.stop().animate({
        
                    marginLeft:'0%'
        
                },500,function(){
        
                    gr.find('.article:last').prependTo(gr)
                    gr.css({marginLeft:'-25%'});
        
                });
        
            });

        }else if(window.innerWidth > 420){

            gr.css({marginLeft:'-33.3%'});

            btn3.first().click(function(){
        
                gr.stop().animate({
        
                    marginLeft:'-66.66%'
        
                },500,function(){
        
                    gr.find('.article:first').appendTo(gr)
                    gr.css({marginLeft:'-33.33%'});
        
                });
        
            });

            btn3.eq(1).click(function(){
        
                gr.stop().animate({
        
                    marginLeft:'0%'
        
                },500,function(){
        
                    gr.find('.article:last').prependTo(gr)
                    gr.css({marginLeft:'-33.33%'});
        
                });
        
            });

        }else{

            gr.css({marginLeft:'-100%'});

            btn3.first().click(function(){
        
                gr.stop().animate({
        
                    marginLeft:'-200%'
        
                },500,function(){
        
                    gr.find('.article:first').appendTo(gr)
                    gr.css({marginLeft:'-100%'});
        
                });
        
            });

            btn3.eq(1).click(function(){
        
                gr.stop().animate({
        
                    marginLeft:'0%'
        
                },500,function(){
        
                    gr.find('.article:last').prependTo(gr)
                    gr.css({marginLeft:'-100%'});
        
                });
        
            });

        }

    }).resize();


});