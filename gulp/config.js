var src = './src';
var dest = './dist';
var staticPath = dest + '/static';

module.exports = { 
  sass: {
    all: src + '/sass/**/*.scss',
    src: src + '/sass/*.main.scss',
    dest: staticPath + '/css',
    compile: staticPath + '/css/*.css',
    settings: {}
  },
  html: {
    all: src + '/**/*.html',
    dest: dest
  },
  images: {
    src: src + '/assets/**',
    dest: staticPath + '/assets'
  },
  js: {
    src: src + '/javascripts/**/**.js',
    dest: staticPath + '/javascripts'
  },
  clean: {
    src: dest
  },
  browser: {
    server: dest
  }
}
