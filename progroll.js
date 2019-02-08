
(function progroll(){

    function init(){
        // Add Progroll element
        var newElem = document.createElement('div');
        newElem.id = 'progroll';
        document.body.appendChild(newElem);
    }
    
    // Resize Progroll 
    function resize (s) {
        var elem = document.getElementById('progroll');
        elem.style.width = s+'%';
    }

    // Scrolled height
    function heightDifference () {
        return document.body.scrollHeight - window.innerHeight;
    }
    
    // Scroll and resize callback
    function listener(){
        resize(Math.round((document.body.scrollTop / heightDifference()) * 100));    
    }

    window.addEventListener('scroll', function(){listener()});
    window.addEventListener('resize', function(){listener()});

    init();
    
})();



