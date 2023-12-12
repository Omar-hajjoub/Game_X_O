// ------- variabel page 1  -----------

let xogam,selectedOption,butntaht


xogam= document.querySelector('.xogam')
 // اختيار الخيار الثاني تلقائياً عند تحميل الصفحة

 xogam.addEventListener('click', function xogam() {
    selectedOption = document.querySelector('input[name="option"]:checked').value;
    
    });

    // variabel page 2 

    let btnsignplay,wingame ,Quit,New_game,winxogame,nom1,nom2,playgame

btnsignplay= document.getElementById('btnsignplay')
Quit=document.getElementById('Quit')
New_game =document.getElementById('New-game')
winxogame=document.getElementById('winxogame')
playgame= document.querySelector('playgame')



    ///------- wenir game--------- 
    function done(num1,num2,num3){
       
        document.querySelector('.wingame').style.display='flex'
        winxogame.innerHTML=` ${butntaht[num1]}winner`
       document.getElementById('item'+num1).style.backgroundColor='red'
       document.getElementById('item'+num2).style.backgroundColor='red'
       document.getElementById('item'+num3).style.backgroundColor='red'
       
  
          
        }
    

      

            // plaaay game to
    let inputxo
    inputxo=document.getElementById('inputxo')

        function game(id){
            let elment = document.getElementById(id)
            if(selectedOption === "x"  && elment.innerHTML ==='' ){
               elment.innerHTML=`
               <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#f2b202" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
               `
               inputxo.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" height="32" width="31" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#080808" d="M313.9 32.7c-170.2 0-252.6 223.8-147.5 355.1 36.5 45.4 88.6 75.6 147.5 75.6 36.3 0 70.3-11.1 99.4-30.4-43.8 39.2-101.9 63-165.3 63-3.9 0-8 0-11.9-.3C104.6 489.6 0 381.1 0 248 0 111 111 0 248 0h.8c63.1 .3 120.7 24.1 164.4 63.1-29-19.4-63.1-30.4-99.3-30.4zm101.8 397.7c-40.9 24.7-90.7 23.6-132-5.8 56.2-20.5 97.7-91.6 97.7-176.6 0-84.7-41.2-155.8-97.4-176.6 41.8-29.2 91.2-30.3 132.9-5 105.9 98.7 105.5 265.7-1.2 364z"/></svg>
               : Play Game`
           
           
           selectedOption="o"
            }else if (selectedOption === "o" && elment.innerHTML ===''){
               elment.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" height="32" width="31" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#080808" d="M313.9 32.7c-170.2 0-252.6 223.8-147.5 355.1 36.5 45.4 88.6 75.6 147.5 75.6 36.3 0 70.3-11.1 99.4-30.4-43.8 39.2-101.9 63-165.3 63-3.9 0-8 0-11.9-.3C104.6 489.6 0 381.1 0 248 0 111 111 0 248 0h.8c63.1 .3 120.7 24.1 164.4 63.1-29-19.4-63.1-30.4-99.3-30.4zm101.8 397.7c-40.9 24.7-90.7 23.6-132-5.8 56.2-20.5 97.7-91.6 97.7-176.6 0-84.7-41.2-155.8-97.4-176.6 41.8-29.2 91.2-30.3 132.9-5 105.9 98.7 105.5 265.7-1.2 364z"/></svg>
                `
                selectedOption="x"
                inputxo.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#f2b202" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                : Play Game `
                
           
            }
            wenir()
               }

               butntaht=[]

    function wenir() {
        for(let i=1 ; i<10 ;  i++){
            butntaht[i]=document.getElementById('item' +i).innerHTML
        }
         if(butntaht[1]==butntaht[2] && butntaht[2]==butntaht[3] && butntaht[1]!=''){
             done(1,2,3)
             return
            
        } else  if(butntaht[4]==butntaht[5] && butntaht[5]==butntaht[6] && butntaht[4]!=''){
            done(4,5,6)
            return
        }
        else  if(butntaht[7]==butntaht[8] && butntaht[8]==butntaht[9] && butntaht[9]!=''){
            done(7,8,9)
            return
        }
        
        else  if(butntaht[1]==butntaht[5] && butntaht[5]==butntaht[9] && butntaht[9]!=''){
            done(1,5,9)
            return
        }
        
        else  if(butntaht[7]==butntaht[5] && butntaht[5]==butntaht[3] && butntaht[3]!=''){
            done(7,5,3)
            return
        }
        
        else  if(butntaht[1]==butntaht[4] && butntaht[4]==butntaht[7] && butntaht[4]!=''){
            done(1,4,7)
            return
        }
        else  if(butntaht[2]==butntaht[5] && butntaht[5]==butntaht[8] && butntaht[5]!=''){
            done(2,5,8)
            return
        }
        else  if(butntaht[3]==butntaht[6] && butntaht[6]==butntaht[9] && butntaht[6]!=''){
            done(3,6,9)
            return
        }else{
            
           
         
        }

       
        } 
    




   
    
        function nowgam(){
            
            setTimeout(function(){location.reload()},800)
        }
        
    
    