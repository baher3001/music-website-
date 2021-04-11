let Body = document.getElementById('body')
let nav =document.querySelector('nav');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let ul =document.querySelector('.ul');
console.log(ul)














class Color
{
    constructor()
    {
        this.Color1 = document.querySelector('.color1');

        this.Color1.addEventListener('click',()=>{

           this.change("color1");
          
        });

        this.Color2 = document.querySelector('.color2');
        this.Color2.addEventListener('click',()=>{

            this.change("color2");
           
         });

        this.Color3 = document.querySelector('.color3');
        this.Color3.addEventListener('click',()=>{

            this.change("color3");
           
         });
   
    }


    change(color)
    {   
        if(color=="color1")
        {
            Body.style.background = "linear-gradient(to right,#ff9966,#ff5e62)"
            ul.style.background="linear-gradient(to right,#ff9966,#ff5e62)";
        
        }else if(color=="color2")
        {
            Body.style.background = "rgb(243,81,81)"
            ul.style.background="rgb(243,81,81)";
        }else if(color=="color3")
        {
            Body.style.background = "#000"
            ul.style.background="#000";
        }   

    }

    


}

onload = new Color();





// spinner page 

window.addEventListener('load',()=>{

    document.querySelector('.loader').classList.add('fade');

});

setTimeout(()=>{

    document.querySelector('.loader').remove();
    
},1000)