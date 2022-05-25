document.addEventListener('scroll',()=>{
    const sections = [...document.querySelectorAll('section')];
    
    sections.forEach((section,index)=>{
        if(window.scrollY<=section.offsetTop+window.innerHeight/4 && window.scrollY>=section.offsetTop-window.innerHeight*4/3){
            const con=section.querySelector('.content');
            console.log(con)
            con.style.visibility="visible";
            con.style.transition="all 1s linear";
            con.style.opacity=1;
            document.lastCentered = index;
        }else{
            const con=section.querySelector('.content');
            con.style.visibility="hidden";
            con.style.transition="all 1s linear";
            con.style.opacity=0;
        }
    })
})