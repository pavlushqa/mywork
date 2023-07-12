
document.querySelector('button').onclick= myClick;
function myClick(){
    var A = document.querySelector('.i1').value;
    var Snow = document.querySelector('.i2').value;
    var Ce = document.querySelector('.i3').value;
    var alpha = document.querySelector('.i4').value;
    var kFl = document.querySelector('.i5').value;
    if (Snow== '1') {
         Sn= 1.35
    }
    else if (Snow== '2') 
        Sn= 1.35+2.2*(A-155)/100
    else if (Snow== '3') 
        Sn= 1.35+0.38*(A-140)/100 
    else if (Snow== '4') 
        Sn= 1.45+0.6*(A-125)/100
    else if (Snow== '5') 
        Sn= 1.45+0.6*(A-150)/100  
    else if (Snow== '6') 
        Sn= Math.max([1.45+0.6*(A-150)/100[1]])  
    else if (Snow== '7') 
        Sn= 1.55  
    
    if (alpha <= "30" ) {my= 0.8 }
        
    else if ( "60" > alpha && alpha > "30" ) 
        my= 0.8*(60-alpha)/30
    else if ( alpha => "60" ) 
        my= 0
    Sk=Sn*my*Ce*kFl
    document.querySelector('.out4').innerHTML= Math.floor(Sk* 1000) / 1000;
    document.querySelector('.out1').innerHTML= Math.floor(my* 1000) / 1000;
    document.querySelector('.out2').innerHTML= Math.floor(alpha* 1000) / 1000;
    document.querySelector('.out3').innerHTML= Math.floor(Ce* 1000) / 1000;
    document.querySelector('.out5').innerHTML= Math.floor(A* 1000) / 1000;
    console.log(Snow);
    console.log(Ce);
    console.log(alpha);
    console.log(A);
    console.log(Sk);
    
}