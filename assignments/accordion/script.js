const accordianButton = document.querySelectorAll(".accordion-button");
const accordianContentEle = document.querySelectorAll(".accordion-content")

accordianButton.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{

        toggle(e);  
})
})


function toggle(e){
    let buttonElemet = e.target;
    let contentEle = buttonElemet.nextElementSibling;

    accordianContentEle.forEach((content) => {
        if (content !== contentEle) {
            content.classList.remove('active');
        }
    });


    if(contentEle.classList.contains('accordion-content')){
        contentEle.classList.toggle('active')
    }
}