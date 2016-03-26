# Bootgeoisie

**Noun | boot·geoi·sie | \ˌbö(t)zh-ˌwä-ˈzē\**

Bootstrap theme kick starter.

```bash
# First:
$ cd bootgeoisie/

# Next, install:
$ npm install
# ... or update Grunt dependencies:
$ npm update

# Update Bower packages:
$ npm run bower install

# Modify _variables.scss and _bootgeoisie.scss in the /theme directory …
# … then build the theme:
$ npm run grunt build

# You can run:
$ grunt
# … to start a server, watch for any changes to the scss files,
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

Sass is a required Ruby dependency; install like so:

```bash
# First, make sure XCODE is installed (download from App Store) …
# … and then run:
$ xcode-select --install

# Install rvm:
$ \curl -L https://get.rvm.io | bash -s stable --ignore-dotfiles --ruby

# Add to your user’s profile:

# export PATH=${PATH}:$HOME/.rvm/bin
# if [[ -s $HOME/.rvm/scripts/rvm ]]; then
#   source $HOME/.rvm/scripts/rvm;
# fi

# Reload your profile or restart your computer.

# Install Sass:
$ gem install sass

# Run these every so often:

# Update rvm:
$ rvm get stable

# Update rvm Ruby:
$ rvm install ruby --latest && rvm use current

# Upgrade RubyGems:
$ gem update --system

# Update rvm gems:
$ gem update

# More info here:
# https://github.com/mhulse/mhulse.github.io/wiki/Ruby-tips
```

Code released under the MIT License.
