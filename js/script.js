let show =false;
function showNav(){
    let ul = document.getElementById("ul-nav");
    if (show == false){
        show =true;
        ul.className="small-nav"
    }else if(show == true){
        show =false;
        ul.className=""
    }
    
}