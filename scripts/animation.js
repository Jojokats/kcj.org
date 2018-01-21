$(init);

function init() {    
    window.sr = ScrollReveal();

    sr.reveal('.animated-left', {
        duration: 2000,
        origin: 'left',
        distance: '200px',
        viewFactor: 0.2
    });
    
    sr.reveal('.animated-right', {
        duration: 2000,
        origin: 'right',
        distance: '300px',
        viewFactor: 0.2
    });

    sr.reveal('.fade-in', {
        duration: 2000,
        origin: 'bottom',
        viewFactor: 0.1,
        delay: 700
    });
}