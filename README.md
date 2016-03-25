# Bootgeoisie

**Noun | boot·geoi·sie | \ˌbö(t)zh-ˌwä-ˈzē\**

Bootstrap theme kick starter.

Based on [Bootswatch](https://github.com/thomaspark/bootswatch).

```bash
# First:
$ cd bootgeoisie/

# Next, install:
$ npm install
# ... or update Grunt dependencies:
$ npm update

# Update Bower packages:
$ npm run bower install

# Modify variables.less and bootswatch.less in one of the theme directories,
# or create your own in /custom.

# Type grunt swatch:[theme] to build the CSS for a theme:
$ npm run grunt swatch:amelia
# … for Amelia. Or type:
$ npm run grunt swatch
# … to build them all at once.

# You can run:
$ grunt
# … to start a server, watch for any changes to the LESS files,
# and automatically build a theme and reload it on change.
# Run:
$ npm run grunt server
# … for just the server, and:
$ npm run grunt watch
# … for just the watcher.

# Access Grunt flags/options via npm:
$ npm run grunt -- --version
# ... or (verbose mode):
$ npm run grunt -- -v
# Comparatively, this will return the npm version:
$ npm run grunt -v
```

Code released under the MIT License.
