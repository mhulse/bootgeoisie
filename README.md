# Bootgeoisie

**Noun | boot·geoi·sie | \ˌbö(t)zh-ˌwä-ˈzē\**

Bootstrap theme kick starter.

```bash
# First:
$ cd bootgeoisie/

# Next, install:
$ npm install
# ... or update Gulp dependencies:
$ npm update

# Fire up `watch` and `server` tasks:
$ npm run gulp
# … and then modify `.scss` and `index.html` …

# Access Gulp flags/options via npm:
$ npm run gulp -- --version
# ... or (verbose mode):
$ npm run gulp -- -v
# Comparatively, this will return the npm version:
$ npm run gulp -v
```

Ruby/Sass info:

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
