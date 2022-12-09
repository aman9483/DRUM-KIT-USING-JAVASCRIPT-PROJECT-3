let drum = document.querySelectorAll('.drum');

let Store = drum.length;

for(let i =0; i<Store; i++){

    document.querySelectorAll('.drum')[i].addEventListener("click", function(){

         let innerContent = this.innerHTML;

         

         switch(innerContent){

            case 'w':
    
              let Tom1 = new Audio('sounds/tom-1.mp3');

               Tom1.play();
    
              break;

              case 'a':
             
              let Tom2 = new Audio('sounds/tom-2.mp3');

              Tom2.play();
   
             break;

             case 's':

             let Tom3 = new Audio('sounds/tom-3.mp3');

              Tom3.play();
   
             break;

             case 'd':

             let Tom4 = new Audio('sounds/tom-4.mp3');

              Tom4.play();
   
             break;

             case 'j':

             let snare = new Audio('sounds/snare.mp3');

              snare.play();
   
             break;

             case 'k':

             let crash = new Audio('sounds/crash.mp3');

              crash.play();
   
             break;

             case 'l':

             let kick_bass = new Audio('sounds/kick-bass.mp3');

              kick_bass.play();
   
             break;


        }
        
    });


    

        document.addEventListener("keypress", (event)=>{

            let key  = event.key;

            switch(key){

                case 'w':
    
                let Tom1 = new Audio('sounds/tom-1.mp3');
  
                 Tom1.play();
      
                break;
  
                case 'a':
               
                let Tom2 = new Audio('sounds/tom-2.mp3');
  
                Tom2.play();
     
               break;
  
               case 's':
  
               let Tom3 = new Audio('sounds/tom-3.mp3');
  
                Tom3.play();
     
               break;
  
               case 'd':
  
               let Tom4 = new Audio('sounds/tom-4.mp3');
  
                Tom4.play();
     
               break;
  
               case 'j':
  
               let snare = new Audio('sounds/snare.mp3');
  
                snare.play();
     
               break;
  
               case 'k':
  
               let crash = new Audio('sounds/crash.mp3');
  
                crash.play();
     
               break;
  
               case 'l':
  
               let kick_bass = new Audio('sounds/kick-bass.mp3');
  
                kick_bass.play();
     
               break;

               

               default:

               console.log("Please Enter Correct Instrument 🤔❤️");

               break;

               
  
  
          }
          

            

            

        });

    
}


               
               


