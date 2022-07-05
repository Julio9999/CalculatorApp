import themeSwitcher from "./js_modules/themeSwitcher.js";
import keys from "./js_modules/keys.js";
import mathematicalOperations from "./js_modules/mathematicalOperations.js";
let result = 0;

const d = document,
input = d.getElementById('input');

d.addEventListener('DOMContentLoaded', (e)=>{
    themeSwitcher()
})


d.addEventListener('click', (e)=>{
    if(e.target.matches('.key')){
        e.target.classList.add('active')
        
        setTimeout(()=>{
            if(e.target.matches('.active')){
                e.target.classList.remove('active')
            }
        }, 500)
        
        if(input.value == 'Syntax Error'){
            input.value = ''
        }
        
        if(e.target.matches('.equal')){
            result = mathematicalOperations(input.value);
            input.value = result;
            
        }else if(e.target.matches('.reset')){
            input.value = ''
            input.dataset.result = false;
        }else if(e.target.matches('.del')){
            input.value = input.value.substring(0, input.value.length - 1);
        }else{
            keys(d.getElementById('input'), e.target.textContent);
        }
    }
})