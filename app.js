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


