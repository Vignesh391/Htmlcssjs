// typing animation

var typed = new Typed(".typing",{
    strings:["","web Designer","Web Developer","Full Stack Developer","Student"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


// Aside
const nav= document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSelection  = document.querySelectorAll(".section"),
    totalSelection = allSelection.length;
    for(let i=0;i<totalNavList;i++){
        const a= navList[i].querySelector("a");
        a.addEventListener("click",function() {
            for(let i=0;i<totalSelection;i++){
            
                allSelection[i].classList.remove("back-section");
            }
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSelection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSelection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        }
    )
    }
    function showSelection(element){
        for(let i=0;i<totalSelection;i++){

            allSelection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element) {
        for(let i=0; i<totalNavList ;i++){
            navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
        }
    }

    document.querySelector(".hire-me").addEventListener("click",()=>
    {
        showSelection(this);
        updateNav(this);
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",()=>{
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSelection;i++){
                allSelection[i].classList.toggle("open");
            }
        }

