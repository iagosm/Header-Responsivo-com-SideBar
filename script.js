var header = document.getElementById('header');
var navigationHeader = document.getElementById('navheader');
var content = document.getElementById('content');
var showSidebar= false;

function toogleSidebar(){
    showSidebar = !showSidebar;
    console.log(showSidebar);
    if (showSidebar){
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar'
        content.style.filter = 'blur(2px)'

    }
    else{
        navigationHeader.style.marginLeft = '-100vw'
        navigationHeader.style.animationName = ''
        content.style.filter = ''
    }
}

function closeSidebar(){
    if(showSidebar){
        toogleSidebar()
    }
}

window.addEventListener('resize',function(event){
    if(this.window.innerWidth > 768 && showSidebar){
        toogleSidebar();
    }
})
