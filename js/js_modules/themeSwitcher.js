const d = document;

export default function themeSwitcher(){

    const $element = d.getElementById('body');

    $element.classList.add(localStorage.getItem('theme'));


    d.addEventListener('click', (e)=>{
        if(e.target.dataset.theme){
            $element.classList.forEach(el =>{
                $element.classList.remove(el);
            })
            $element.classList.add(e.target.dataset.theme);

            localStorage.setItem('theme', e.target.dataset.theme)
        }
    })



}