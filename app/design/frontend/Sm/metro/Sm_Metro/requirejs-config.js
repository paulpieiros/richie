var config = {
    map: {
        '*': {
            jquerypopper: "Sm_Metro/js/bootstrap/popper",
            jquerybootstrap: "Sm_Metro/js/bootstrap/bootstrap.min",
            owlcarousel: "Sm_Metro/js/owl.carousel",
            jqueryfancyboxpack: "Sm_Metro/js/jquery.fancybox.pack",
            jqueryunveil: "Sm_Metro/js/jquery.unveil",
            yttheme: "Sm_Metro/js/yttheme"
        }
    },
    shim: {
        'jquerypopper': {
            'deps': ['jquery'],
            'exports': 'Popper'
        },
        'jquerybootstrap': {
            'deps': ['jquery', 'jquerypopper']
        },
        'fancybox': {
            deps: ['jquery']
        }
    }
};