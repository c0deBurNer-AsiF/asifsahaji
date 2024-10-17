var typed=new Typed("#element",{
    strings: ["Fullstack Developer","Web Developer","Problem Solver"],
    typeSpeed:60,
    backSpeed:70,
    loop:true,
    loopCount:Infinity,
})


const allTitle=document.querySelectorAll(".skills_heading1");

allTitle.forEach(item=>{
    item.addEventListener("click",()=>{
        const hiddenContent=item.nextElementSibling;
        hiddenContent.classList.toggle("active");

        const chevron=item.querySelector(".skills_heading_right")
        chevron.classList.toggle("rotate");
    });   
});




const eduTab=document.getElementById("education");
const workTab=document.getElementById("work");
const eduSection=document.getElementById("eduSection");
const workSection=document.getElementById("workSection");
const vLine=document.getElementById("vLine");
const dot=document.getElementById("dot");
const workSide=document.getElementById("workSide");



const eduSide=document.getElementById("eduSide");


eduTab.classList.add("active");
workTab.classList.remove("active");
eduSide.classList.add("active");


eduTab.addEventListener("click",()=>{

    eduTab.classList.add("active");
    workTab.classList.remove("active");
    eduSide.classList.add("active");
    workSide.classList.remove("active");
});

workTab.addEventListener("click",()=>{

    workTab.classList.add("active");
    workSide.classList.add("active");
    eduTab.classList.remove("active");
    eduSide.classList.remove("active");

});









var sections=document.querySelectorAll("section");
var links=document.querySelectorAll("nav ul li a");
var secs=document.querySelectorAll("section");
var lnks=document.querySelectorAll("#mobileNavList li a");

window.onscroll= () =>{
    sections.forEach((sec)=>{
        var top=window.scrollY;
        var offset
        if(sec.getAttribute("id")=="noTwo")
        {
            offset=sec.offsetTop-160;
        }
        else
        {
            offset=sec.offsetTop-85;
        }
        
        var height=sec.offsetHeight;
        var id=sec.getAttribute("id");
        if (top>= offset && top< offset+height){
            links.forEach(link =>{
                link.classList.remove("active");
                document.querySelector('nav ul li a[href*="'+id+'"]').classList.add("active");
            });
        };
        
    });

    secs.forEach((sec)=>{
        var t=window.scrollY;
        var o;
        if (sec.getAttribute("id")=='noTwo')
        {
            o=sec.offsetTop-160;
        }
        else
        {
            o=sec.offsetTop-85;
        }

        var h=sec.offsetHeight;
        var i=sec.getAttribute("id");
        if (t>=o && o+h)
        {
            lnks.forEach(l=>{
                l.classList.remove("active");
                document.querySelector('#mobileNavList li a[href*="'+i+'"]').classList.add("active");
            })
        }
    })
};



var navBtn = document.getElementById("navBtnId");
var mobileNav = document.querySelector(".mobileNav");

navBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});



document.getElementById("btn2").addEventListener("click", function() {
    var aboutSection = document.getElementById("noTwo");
    var sectionPosition = aboutSection.offsetTop;

    window.scrollTo({
        top: sectionPosition-140,
        behavior: "smooth"
    });
});

document.getElementById("btn1").addEventListener("click", function(){
    var contactSection=document.getElementById("noSix");
    var sectionPosition=contactSection.offsetTop;

    window.scrollTo({
        top:sectionPosition-80,
        behavior:"smooth"
    });
});

















