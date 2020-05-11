/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 //next and prev function for chapters
        var next = document.getElementById("next");
        var prev = document.getElementById("prev");
        var im1=document.getElementById("im1");
        var im2=document.getElementById("im2");
       
        function Birbal(){
             count = 0;
                im1.setAttribute('src','image/Pg-14.jpg');
                im2.setAttribute('src','image/Pg-15.jpg');
                prev.style.visibility="hidden";
            next.onclick = function() {
            count += 1;
            prev.style.visibility="visible";
             if(count==1){
                im1.setAttribute('src','image/Pg-16.jpg');
                im2.setAttribute('src','image/Pg-17.jpg');
            }
            else if(count==2){
                im1.setAttribute('src','image/Pg-18.jpg');
                im2.setAttribute('src','image/Pg-19.jpg');
                next.style.visibility="hidden";
            }
            }
            prev.onclick=function(){
                count=count-1;
                next.style.visibility="visible";
                if(count==1){
                im1.setAttribute('src','image/Pg-16.jpg');
                im2.setAttribute('src','image/Pg-17.jpg');
            }
            else if(count==0)
            {
                im1.setAttribute('src','image/Pg-14.jpg');
                im2.setAttribute('src','image/Pg-15.jpg');
                prev.style.visibility="hidden";
            }
            }
        }
        
        //slide show next and previous functionality
            var snext=document.getElementById("snext");
            var sback=document.getElementById("sback");
            var im3=document.getElementById("im3");
            var im4=document.getElementById("im4");
            var im5=document.getElementById("im5");
            var back1=document.getElementById("back1");
            var back3=document.getElementById("back3");
            function slide()
            {
                count=0;
                snext.onclick=function(){
                    count += 1;                
                    if(count==2)
                    {
                        im4.setAttribute('src','image/2-story.jpg');
                        im5.setAttribute('src','image/3-story.jpg');
                        sback.style.visibility="visible";
                        back1.style.visibility="visible";
                    }
                    else if(count==3){
                        im4.setAttribute('src','image/3-story.jpg');
                        im5.setAttribute('src','image/4-story.jpg');
                        im3.setAttribute('src','image/2-story.jpg');
                    }
                    else if(count==4){
                        im4.setAttribute('src','image/4-story.jpg');
                        im5.setAttribute('src','image/5-story.jpg');
                        im3.setAttribute('src','image/3-story.jpg');
                    }
                    else if(count==5){
                        im4.setAttribute('src','image/5-story.jpg');
                        im5.setAttribute('src','image/6-story.jpg');
                        im3.setAttribute('src','image/4-story.jpg');
                    }
                    else if(count==6){
                        im4.setAttribute('src','image/6-story.jpg');
                        im3.setAttribute('src','image/5-story.jpg');
                        snext.style.visibility="hidden";
                        back3.style.visibility="hidden";
                    }
                }
                sback.onclick=function(){
                    count=count-1;
                    if(count==5){
                        im3.setAttribute('src','image/4-story.jpg');
                        im4.setAttribute('src','image/5-story.jpg');
                        im5.setAttribute('src','image/6-story.jpg');
                        snext.style.visibility="visible";
                        back3.style.visibility="visible";
                    }
                    else if(count==4){
                        im3.setAttribute('src','image/3-story.jpg');
                        im4.setAttribute('src','image/4-story.jpg');
                        im5.setAttribute('src','image/5-story.jpg');
                    }
                    else if(count==3){
                        im3.setAttribute('src','image/2-story.jpg');
                        im4.setAttribute('src','image/3-story.jpg');
                        im5.setAttribute('src','image/4-story.jpg');
                    }
                    else if(count==2){
                        im3.setAttribute('src','image/1-story.jpg');
                        im4.setAttribute('src','image/2-story.jpg');
                        im5.setAttribute('src','image/3-story.jpg');
                    }
                    else if(count==1){
                        im4.setAttribute('src','image/1-story.jpg');
                        im5.setAttribute('src','image/2-story.jpg');
                        sback.style.visibility="hidden";
                        back1.style.visibility="hidden";
                    }
                }
            }
            
          //vartini next and prev button function
             var vback=document.getElementById("vback");
             var vnext=document.getElementById("vnext");
             var im6=document.getElementById("im6");
             function vartini(){
                 count=0;
                 vnext.onclick=function(){
                     count=count+1;
                     if(count==1){
                         im6.setAttribute('src','image/vertini-2.jpg');
                         vback.style.visibility="visible";
                     }
                     else if(count==2){
                         im6.setAttribute('src','image/vertini-3.jpg');
                     }
                     else if(count==3){
                         im6.setAttribute('src','image/vertini-4.jpg');
                         vnext.style.visibility="hidden";
                     }
                 }
                 vback.onclick=function(){
                     count=count-1;
                     if(count==2){
                         im6.setAttribute('src','image/vertini-3.jpg');
                         vnext.style.visibility="visible";
                     }
                     else if(count==1){
                         im6.setAttribute('src','image/vertini-2.jpg');
                     }
                     else if(count==0){
                         im6.setAttribute('src','image/vertini-1.jpg');
                         vback.style.visibility="hidden";
                     }
                 }
             }
             
