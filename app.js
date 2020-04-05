(function(){
    'use strict'
    let options={
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }
    
    const callback = (element,observer)=>{
       
    element.forEach(el=>{
        if(el.isIntersecting){
            let mode =el.target.getAttribute('data-mode')
            let delay =el.target.getAttribute('data-delay')
        el.target.classList.add("animated",mode)
        el.target.classList.remove("animate")
        if(delay && window.innerWidth > 576 ){
            el.target.classList.add(delay)
        }
       }
    })
     }
    
    
    let observer = new IntersectionObserver(callback, options);
    document.querySelectorAll('.animate').forEach(el=>observer.observe(el))
}) ()





const cards = document.querySelectorAll('.card')
const handler =(score)=>{
        cards.forEach(element => {
         let values= element.querySelectorAll('.skill__value')
        
        values.forEach(value => {
            let progress = score ? score : (100 - value.getAttribute('data-value'))
            value.style.transform=`translate3d(-${progress}%,0,0)`
        })
        
    }) 
}

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        handler();
    });

    card.addEventListener('mouseleave', () => {
        handler(100);
    });
})

    
      






