class dropdown{
    constructor(dropdown, context){
        this.context = context;
        this.dropdown = dropdown;
        this.visibility = false;
        this.click(this.context, this.dropdown);
    }
    click(context, dropdown){
        dropdown.addEventListener("click", function(){
            if(this.visibility){
                this.visibility = false;
                context.style.display = 'none';
            }else{
                this.visibility = true;
                context.style.display = '';
            }
        });
    }
}

var earlygame = new dropdown(document.getElementById("early-game"), document.getElementById("early-game-context"));
var manualAge = new dropdown(document.getElementById("manual-age"), document.getElementById("manual-age-context"));
var rotationalAge = new dropdown(document.getElementById("rotational-age"), document.getElementById("rotational-age-context"));
var steamAge = new dropdown(document.getElementById("steam-age"), document.getElementById("steam-age-context"));
