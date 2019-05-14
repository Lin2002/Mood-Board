var happyImages = [
    "https://png.pngtree.com/element_origin_min_pic/16/08/17/2257b47454ab6c4.jpg",
    "https://www.freeiconspng.com/uploads/happy-comic-face-png-9.png",
    "https://freepngimg.com/thumb/happy_person/9-2-happy-person-png.png"
];
var sadImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tXo1oGJkNat7RQpvZb-QcHP6rlBsW4LIbObONMtQRMVNIfzo","https://i.pinimg.com/originals/b2/79/66/b27966140db68d0621628f2309f8a443.gif","https://freepngimg.com/thumb/sad_emoji/36807-4-sad-emoji-clipart-thumb.png"];
var angryImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGnpo4pS_OLdGWE-36hTA0dBsuM5ZeYho5vLyavKxeBogFuvS","http://pngriver.com/wp-content/uploads/2018/03/Download-Angry-Emoji-PNG-Transparent-Image-027.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclik8YPpzhpAXFAAE4IWKFuLvP6-3SR9-UYIc_rC58B52wkz81A"];
var boredImages = ["http://www.clipartroo.com/images/83/bored-of-a-guy-clipart-83373.png","https://whatparentsask.com/wp-content/uploads/2019/01/5-Reasons-you-should-allow-your-child-to-get-bored.png","http://www.clipartroo.com/images/0/bored-person-clipart-0.png" ];



$("button").click(function(){
   
   var mood=$("input").val().toLowerCase();


    if(mood === "happy")
    {
        happyMood();
     }
   else if(mood === "sad"){
        sadMood();
       }  
    else if(mood === "angry"){
        angrydMood();
       }
    else if(mood === "bored"){
        boredMood();
       }
    });
    

function happyMood(){
    $(".images").html("<img src=" + happyImages[0] + ">" + "<img src=" + happyImages[1] + ">" + "<img src=" + happyImages[2] + ">");
    changeBackgroundColor("lightgreen");
    changeTextColor("green");
}

function sadMood(){
    $(".images").html("<img src=" + sadImages[0] + ">" + "<img src=" + sadImages[1] + ">" + "<img src=" + sadImages[2] + ">");
    changeBackgroundColor("lightblue");
    changeTextColor("blue");
}

function angrydMood(){
 $(".images").html("<img src=" + angryImages[0] + ">" + "<img src=" + angryImages[1] + ">" + "<img src=" + angryImages[2] + ">");
 changeBackgroundColor("#f76767");
    changeTextColor("red");
}

function boredMood(){
    $(".images").html("<img src=" + boredImages[0] + ">" + "<img src=" + boredImages[1] + ">" + "<img src=" + boredImages[2] + ">");
    changeBackgroundColor("yellow");
    changeTextColor("orange");
}

function changeBackgroundColor(color){
    $("body").css("background-color",color);
}

function changeTextColor(color){
    $("p").css("color",color);
}

