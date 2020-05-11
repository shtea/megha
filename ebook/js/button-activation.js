/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    //to activate chapters button onclick only
        var header = document.getElementById("btn");
        var btns = header.getElementsByClassName("ch");
        for (var i = 0; i < btns.length; i++) {
             btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
                if (current.length > 0) { 
                      current[0].className = current[0].className.replace(" active", "");
                 }
                 this.className += " active";
             });
            }
            
        //to activate video button onclick only
        var header1 = document.getElementById("anima");
        var btn = header1.getElementsByClassName("p");
        for (var i = 0; i < btn.length; i++) {
             btn[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("focus");
                if (current.length > 0) { 
                      current[0].className = current[0].className.replace(" focus", "");
                 }
                 this.className += " focus";
             });
            }
    
   //play different video on different button in a single div
    function swapVideo() {
    player.src = this.getAttribute("data-video-url");
    player.load();
    player.play();
    }

    var videoPlayButtons = document.querySelectorAll("button"),
        player = document.getElementById("player");

    for (var i=0; i<videoPlayButtons.length; i++){
        videoPlayButtons[i].addEventListener('click', swapVideo);
    }
 
        


