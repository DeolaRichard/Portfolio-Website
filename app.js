const section = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const mainContent = document.querySelectorAll(".main-content")[0];


function pageTransition(){
    //Button click active class 
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
         let currentBtn = document.querySelectorAll('.active-btn');
         currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' ');
         this.className += ' active-btn';
        })
    }
    //sections Active 
    mainContent.addEventListener('click', (e) => {
        console.log(e.target);
      });
      
}


pageTransition();
