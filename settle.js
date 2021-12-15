if(document.readyState=="loading")
{
    document.addEventListener('DOMContentLoaded', ready);
} else
{
    ready()
}

function ready()
{  
        simpleCount();
        
}

function simpleCount()
{
    
    
    
        let amount=document.querySelector('#amount');
        let persons=document.querySelector('.persons');
        
         persons.addEventListener('input', () =>
    {
            

             amount.addEventListener('input' , () =>
        {

      

                let btn=document.querySelector('.btn');
                btn.addEventListener("click", () => 
                
            {       
                

                    let sum=(amount.value / persons.value);
                    let sumRound=sum.toFixed(2);
                    let p= document.querySelector('.addItem');
                    p.style.opacity=1;
                    p.innerText="You have to submnit "+sumRound+" each";
                    
                
            })
            
        })
        
    })
   
}
    
function someonePaid()
{   
    

    let inputs=document.querySelector('.newInput');
    let label= document.createElement("label");
    label.innerText="How many people have already paid?";
    inputs.appendChild(label);
    let input=document.createElement("input");
    input.type="number";
    input.classList="paid";
    input.innerText="How many people have already paid?";
    inputs.appendChild(input);

   

    let paid=document.querySelector(".paid");
    let amount=document.querySelector('#amount');
    let persons=document.querySelector('.persons');
    
  
    
     persons.addEventListener('input', () =>
{
        

         amount.addEventListener('input' , () =>
    {


       

            let btn=document.querySelector('.btn');
            btn.addEventListener("click", () => 
            
        {       
            
            
                let sum=(amount.value / (persons.value -paid.value));
                let sumRound=sum.toFixed(2);
                let p= document.querySelector('.addItem');
                p.style.opacity=1;
                p.innerText="You have to pay back "+sumRound+" each";
                
            
        })
    })

}) 

}

   function refresh()
   {
       window.location.reload(false);
   }