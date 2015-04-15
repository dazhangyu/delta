'use strict';

module.exports = {
    'serverport': 3000,
    'styles': {
        'watch':'app/scss/**/*.scss',
        'src': 'app/scss/**/*.scss',
        'dest': 'build/css'
    },
    'lib': {
        'dist':'lib.js',
        'src': [
                "app/bower_components/jquery/dist/jquery.min.js",
                "app/bower_components/jquery-migrate/jquery-migrate.min.js",
                "app/bower_components/isMobile/isMobile.min.js",
                "app/bower_components/easing/jquery.easing.1.3.min.js",
                "app/bower_components/bootstrap/dist/js/bootstrap.min.js",
                "app/bower_components/jquery.inview/jquery.inview.min.js",
                "app/bower_components/fitvids/jquery.fitvids.js",
                "app/bower_components/jquery.scrollTo/jquery.scrollTo.min.js",
                "app/bower_components/jquery-placeholder/jquery.placeholder.min.js",
                "app/bower_components/flexslider/jquery.flexslider-min.js",
                "app/bower_components/matchHeight/jquery.matchHeight-min.js",
                 ],
        'dest': 'build/js'
    },
    'copycss':{
        'src':[
            'app/bower_components/bootstrap/dist/css/bootstrap.min.css',
            'app/bower_components/fontawesome/css/font-awesome.min.css',
            'app/bower_components/flexslider/flexslider.css',
            'app/bower_components/animate.css/animate.min.css'
            ],
        'dest':'build/css'
    },
    'copyfonts':{
        'src':"app/bower_components/fontawesome/fonts/*",
        'dest':'build/fonts'
    },
    'scripts': {
        'src': 'app/js/*.js',
        'dest': 'build/js/'
    },
    'images': {
        'src': 'app/images/**/*',
        'dest': 'build/images'
    },
    'views': {
        'watch': [
            'app/index.html',
            //'app/app/views/**/*.html'
        ],
        'src': 'app/*.html',
        'dest': 'build/'
    },
    'dist': {
        'root': 'build'
    }
}
