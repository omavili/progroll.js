
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

    /*
    TODO:
        - sayfa yenilendiğinde scroll konumuna göre başlagıç width ayarlaması
        - window rezise anında güncel kalmalı
        - konum hatırlama cookie (gelişmiş)
        - başladığı anda hızla görünür, durduğu anda yavaşça kaybolur (ilk scroll ile devreye girer)
        - yenilemede sıfırdan yumuşak hareketle konumuna gelir.
        - belirlenen süreye veya load olayını progress edebilme özelliği. (Gelişmiş)
            Timer/Loader mode (geri/ileri sayım) özelliğinde kullanabilme 
            başlangıç bitiş callback
            val min max attributes
        - tema ve animasyonlar (Gelişmiş)
        -settings
            updateBy //d:body /tag .class #id
            stickTo //d:body /tag .class #id
            sticky //d:true:fixed/false:inline
            color //d:empty css
            heigt //d:empty css
            fixed/inline //d:fixed
            position: //d:top/bottom/custom
            smooth //d:false

            
     */



