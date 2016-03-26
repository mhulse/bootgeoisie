# Bootgeoisie

**Noun | boot·geoi·sie | \ˌbö(t)zh-ˌwä-ˈzē\**

Bootstrap theme kick starter.

## Installation instructions

Create a new repository on your desired host (like [GitHub](https://github.com/new)). Note that the repository name you pick (e.g., “my-new-project”) will be used in the following steps.

On a unix system, run Bootgeoisie’s installation script:

```bash
bash <(curl -sL https://git.io/vVvpD)
```
Use “my-new-project” as the name of the installation directory.

Once installation is complete:

```bash
$ cd my-new-project/
```

Edit these files (e.g., verbiage, project name, etc.) to match your new project:

1. [index.html](index.html)
1. [package.json](package.json)

Initialize an empty Git repository within your installation directory and push your files:

```bash
echo '# Project Name' >> README.md
git init
git add --all
git commit -m 'Hello world!'
git remote add origin git@github.com:username/my-new-project.git
git push -u origin master
```

Now that your’re all setup, follow the [development instructions](source/README.md) found in the [`source` directory](source).

Finally, utilize your new project in another project via [npm](https://www.npmjs.com/):

```bash
# Get the latest from GitHub:
$ npm install mhulse/bootgeoisie --save-dev
```

---

Copyright © 2016 [Michael Hulse](http://mky.io).

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<img src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png">
