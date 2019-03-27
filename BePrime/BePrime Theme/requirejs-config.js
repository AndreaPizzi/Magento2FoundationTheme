var config = {

    deps: [
        "js/custom",
    ],

    map: {
        '*': {
            'foundation': 'js/foundation.min',
            'slick': 'js/slick.min'

        }
    },
    "shim": {
        "foundation": ["jquery"],
        "slick": ["jquery"]
    }
};