# chrisgurney.ca

Source for [my personal website](https://chrisgurney.ca/).

![Screenshot of chrisgurney.ca](/src/images/screenshot.jpg)

# Features

Via page metadata:

* [Web site thumbnails](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/)
* Defines [web app theme](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/)
* Cards via Open Graph, Twitter metadata
* Favicon

Via `.htaccess`:

* Forces HTTPS
* Enables GZIP compression

Via `gulp` build tooling:

* Minifies CSS + JS
* Copies files to server via rsync
* Livereload
* `gulp-file-include` for reusable static page elements.

Uses:

* [Bootstrap](https://getbootstrap.com/)
* Icons via [Font Awesome](https://fontawesome.com/)
* [jQuery](https://jquery.com/)
* [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)
* [Scroll Reveal](https://scrollrevealjs.org/)

# Installation

    $ cd /path/to/project
    $ npm install

## Tasks

This section describes the main tasks available. See `gulpfile.js` for subtasks.

### `gulp`

Cleans the output folder (`/dist`), compiles all web files, and runs a local server for development, watching for changes.

### `gulp deploy`

Deploys `/dist` to my web server (as configured in the `gulp deploy` task), via rsync.

# Credits

* Design was adapted from [Start Boostrap's](http://startbootstrap.com/) [Creative](https://startbootstrap.com/template-overviews/creative/) and [WowTheme's](http://www.wowthemes.net) Mediumish templates.