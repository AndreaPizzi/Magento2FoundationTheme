var config = {

    deps: [
        "js/custom",
    ],

    map: {
        '*': {
            'foundation': 'js/foundation.min'

        }
    },
    "shim": {
        "foundation": ["jquery"]
    }
};