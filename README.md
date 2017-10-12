# WordPress + WebPack Boilerplate

## Intro

The purpose of this repository is to provide a sensible WebPack boilerplate for WordPress developers who are getting started with modern JavaScript development, while also providing a feature set useful as a jumping-off point for more advanced developers.

To achieve this, this tool stack includes WebPack, Babel, and DOM-based routing based on ES2015 modules. WebPack is configured to output a single bundled file in `./dist` that can then be included in your WordPress theme.

This boilerplate does not include an advanced WebPack features like

(As a bonus, a module is included to help you get set up with fetching posts from your site's REST API).

## Installation

### npm

If you don't have npm installed, install npm. (If you have Node installed, you most likely have npm installed as well. You can see if you have npm installed by running `npm -v` from the command line.)


Installation instructions for your operating system can be found [here](https://nodejs.org/en/).

### Dependencies
Download this repository as a zip and extract the contents. Move the contents to your local theme directory and then from the command line:

```
cd ~/path/to/local/wp-content/themes/[your theme]
npm install
```

This will set up all of the module dependencies you'll need to get started building.

### Inclusion in theme

WebPack is configured to output a bundle in `./dist`. Therefore, including the script in your theme might look like:

```
wp_enqueue_script('bundle-js', get_stylesheet_directory_uri() . '/dist/bundle.js', ['jquery'], false, true);
```

in your `functions.php` file or elsewhere. Refer to [`wp_enqueue_script()` docs](https://developer.wordpress.org/reference/functions/wp_enqueue_script/).


## Usage

### Local development

From the command line in your theme directory, run:

```
npm run watch
```

This will start a task that will rebundle your JavaScript upon any changes to source files.

### Production build

From the command line in your theme directory, run:

```
npm run build
```

This will create an minified, optimized production build of your bundle.
