const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// control navigation animation
function navAnimation(direction1, direction2){
    navItems.forEach((nav,i)=>{
        nav.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`);
    });
}

function toggleNav(){
    // Toggle : menubars open/closed
    menuBars.classList.toggle('change');
    // toggle : menu active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // animate in-overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animate in-nav items
        // nav1.classList.replace('slide-out-1','slide-in-1');
        // nav2.classList.replace('slide-out-2','slide-in-2');
        // nav3.classList.replace('slide-out-3','slide-in-3');
        // nav4.classList.replace('slide-out-4','slide-in-4');
        // nav5.classList.replace('slide-out-5','slide-in-5');
        navAnimation('out','in');
    }else{
        // animate out-overlay
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        
        // animate out-nav items
        // nav1.classList.replace('slide-in-1','slide-out-1');
        // nav2.classList.replace('slide-in-2','slide-out-2');
        // nav3.classList.replace('slide-in-3','slide-out-3');
        // nav4.classList.replace('slide-in-4','slide-out-4');
        // nav5.classList.replace('slide-in-5','slide-out-5');
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav)=>{
    nav.addEventListener('click',toggleNav);
});