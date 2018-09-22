#!/usr/bin/env sh

sudo echo 'The following "npm" command (if executed) installs the "cross-env"'
sudo echo 'dependency into the local "node_modules" directory, which will ultimately'
sudo echo 'be stored in the Jenkins home directory. As described in'
sudo echo 'https://docs.npmjs.com/cli/install, the "--save-dev" flag causes the'
sudo echo '"cross-env" dependency to be installed as "devDependencies". For the'
sudo echo 'purposes of this tutorial, this flag is not important. However, when'
sudo echo 'installing this dependency, it would typically be done so using this'
sudo echo 'flag. For a comprehensive explanation about "devDependencies", see'
sudo echo 'https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies.'
sudo set -x
# npm install --save-dev cross-env
sudo set +x

sudo echo 'The following "npm" command tests that your simple Node.js/React'
sudo echo 'application renders satisfactorily. This command actually invokes the test'
sudo echo 'runner Jest (https://facebook.github.io/jest/).'
sudo set -x
sudo npm test