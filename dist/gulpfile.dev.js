"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.build = exports.styles = void 0;

var _gulp = _interopRequireDefault(require("gulp"));

var _gulpPlumber = _interopRequireDefault(require("gulp-plumber"));

var _gulpDartSass = _interopRequireDefault(require("gulp-dart-sass"));

var _gulpPostcss = _interopRequireDefault(require("gulp-postcss"));

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _postcssCsso = _interopRequireDefault(require("postcss-csso"));

var _gulpRename = _interopRequireDefault(require("gulp-rename"));

var _gulpTerser = _interopRequireDefault(require("gulp-terser"));

var _gulpLibsquoosh = _interopRequireDefault(require("gulp-libsquoosh"));

var _gulpSvgmin = _interopRequireDefault(require("gulp-svgmin"));

var _gulpSvgstore = _interopRequireDefault(require("gulp-svgstore"));

var _del = _interopRequireDefault(require("del"));

var _browserSync = _interopRequireDefault(require("browser-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Styles
var styles = function styles() {
  return _gulp["default"].src('source/sass/style.scss', {
    sourcemaps: true
  }).pipe((0, _gulpPlumber["default"])()).pipe((0, _gulpDartSass["default"])().on('error', _gulpDartSass["default"].logError)).pipe((0, _gulpPostcss["default"])([(0, _autoprefixer["default"])(), (0, _postcssCsso["default"])()])).pipe((0, _gulpRename["default"])('style.min.css')).pipe(_gulp["default"].dest('build/css', {
    sourcemaps: '.'
  })).pipe(_browserSync["default"].stream());
}; // HTML


exports.styles = styles;

var html = function html() {
  return _gulp["default"].src('source/*.html').pipe(_gulp["default"].dest('build'));
}; // Scripts


var scripts = function scripts() {
  return _gulp["default"].src('source/js/script.js').pipe(_gulp["default"].dest('build/js')).pipe(_browserSync["default"].stream());
}; // Images


var optimizeImages = function optimizeImages() {
  return _gulp["default"].src('source/img/**/*.{png,jpg}').pipe((0, _gulpLibsquoosh["default"])()).pipe(_gulp["default"].dest('build/img'));
};

var copyImages = function copyImages() {
  return _gulp["default"].src('source/img/**/*.{png,jpg}').pipe(_gulp["default"].dest('build/img'));
}; // WebP


var createWebp = function createWebp() {
  return _gulp["default"].src('source/img/**/*.{png,jpg}').pipe((0, _gulpLibsquoosh["default"])({
    webp: {}
  })).pipe(_gulp["default"].dest('build/img'));
}; // SVG


var svg = function svg() {
  return _gulp["default"].src(['source/img/*.svg', '!source/img/icons/*.svg']).pipe((0, _gulpSvgmin["default"])()).pipe(_gulp["default"].dest('build/img'));
};

var sprite = function sprite() {
  return _gulp["default"].src('source/img/icons/*.svg').pipe((0, _gulpSvgmin["default"])()).pipe((0, _gulpSvgstore["default"])({
    inlineSvg: true
  })).pipe((0, _gulpRename["default"])('sprite.svg')).pipe(_gulp["default"].dest('build/img'));
}; // Copy


var copy = function copy(done) {
  _gulp["default"].src(['source/fonts/*.{woff2,woff}', 'source/*.ico'], {
    base: 'source'
  }).pipe(_gulp["default"].dest('build'));

  done();
}; // Clean


var clean = function clean() {
  return (0, _del["default"])('build');
}; // Server


var server = function server(done) {
  _browserSync["default"].init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false
  });

  done();
}; // Reload


var reload = function reload(done) {
  _browserSync["default"].reload();

  done();
}; // Watcher


var watcher = function watcher() {
  _gulp["default"].watch('source/sass/**/*.scss', _gulp["default"].series(styles));

  _gulp["default"].watch('source/js/script.js', _gulp["default"].series(scripts));

  _gulp["default"].watch('source/*.html', _gulp["default"].series(html, reload));
}; // Build


var build = _gulp["default"].series(clean, copy, optimizeImages, _gulp["default"].parallel(styles, html, scripts, svg, sprite, createWebp)); // Default


exports.build = build;

var _default = _gulp["default"].series(clean, copy, copyImages, _gulp["default"].parallel(styles, html, scripts, svg, sprite, createWebp), _gulp["default"].series(server, watcher));

exports["default"] = _default;
//# sourceMappingURL=gulpfile.dev.js.map
