

// ------- teransrfit page ---------
let page1,page2,homepage
//------ variabel---------
 page1=document.querySelector('.page1')
 page2=document.querySelector('.page2')
 homepage=document.querySelector('.homepage')

 // ------- teransrfit page 1  ---------

 function pageslect1(){
  document.querySelector('.homepage').style.display ='none'
  document.querySelector('.page2').style.display ='none'
   document.querySelector('.page1').style.display ='block'
 }
 
  // ------- teransrfit page 2  ---------


 
 // اختيار الخيار الثاني تلقائياً عند تحميل الصفحة




  document.getElementById('starsgame').addEventListener('click' , function(){
 // اختيار الخيار الثاني تلقائياً عند تحميل الصفحة


  let  selectedOption = document.querySelector('input[name="option"]:checked');
    

      if (selectedOption.value !== ""){

        document.querySelector('.homepage').style.display ='none'
        document.querySelector('.page1').style.display ='none'
         document.querySelector('.page2').style.display ='block'
     
     }else if(selectedOption.value = "" ){
        alert('hello')
      }
    
  })
  
 
