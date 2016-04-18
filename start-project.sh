#!/bin/bash
mkdir -p src/scss && mkdir -p src/js && mkdir -p src/assets
git init
npm install
npm update --save-dev
# gulpfile
curl -L https://gist.github.com/thewinger/0b7c45c601464435fc24/download | tar -xvz --strip-components=1
# main.scss
curl -L https://gist.github.com/thewinger/316d9b4a0d625ab99d90/download | tar -xvz --strip-components=1
# .gitignore
curl -L https://gist.github.com/thewinger/2dd2a24a7a050b164d19/download | tar -xvz --strip-components=1
# bower.json
curl -L https://gist.github.com/thewinger/cb84867c43f3b2d693e8/download | tar -xvz --strip-components=1
mv bower.json src/scss && mv main.scss src/scss
cd src/scss && bower install
cd ../..
git add . && git commit -am "First Commit"
say "Your script is done!"

