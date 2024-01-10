const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((e1,index)=>{
    e1.onclick = () =>{
        const pageTurnId = e1.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains( 'turn')) {
            pageTurn. classList. remove('turn');
            setTimeout(() => {
                pageTurn. style.zIndex = 20- index;
            }, 500);
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn. style.zIndex = 20 + index;
            }, 500);
        }
    }
})


//contact me button
const pages= document.querySelectorAll('.book-page.page-right');
const contactmeBtn = document.querySelector('.btn.contact-me');

contactmeBtn.onclick = () => {
    pages.forEach((page,index)=>{
        if(index < pages.length - 1) { // stops at the second last page
            setTimeout(() =>{
                page.classList.add('turn');

                setTimeout(()=>{
                    page.style.zIndex = 20; // set zIndex to a constant value
                }, 500)
            }, (index+1)*200 + 100)
        }
    })
}



//profile button
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber<0){
        pageNumber = totalPages -1;
    }
}


const backProfileBtn = document.querySelector('.back-profile') ;
backProfileBtn.onclick = () => {
    pages.forEach((_,index)=>{
            setTimeout(() =>{
                reverseIndex();
                pages[pageNumber].classList.remove('turn');

                setTimeout(()=>{
                    reverseIndex();
                    pages[pageNumber].style.zIndex = 10 + index;
                }, 500)
            }, (index+1)*200 + 100)
    })
}


const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


//opening animation (cover right animation)
setTimeout(()=>{
    coverRight.classList.add('turn');
},2100)

setTimeout(()=>{
    coverRight.style.zIndex= -1;
},2800)

//opening animation (page left or profile page animation)
setTimeout(()=>{
    pageLeft.style.zIndex= 20;
},3200)


//opening animation for all pages
pages.forEach((_,index)=>{
    setTimeout(() =>{
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index+1)*200 + 2100)
})

