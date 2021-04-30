# tbot.js

A twitter bot used to perform all actions that the twitter api grants access to using.

---
## Requirements

For development, you will only need Node.js and npm.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.16.0

    $ npm --version
    6.14.11

If you need to update `npm`, after running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/itiszac/tbot.git
    $ cd tbot
    $ npm i

## Configure app

Create `tbot/.env` then edit it with your settings. You will need:

    TWITTER_API_KEY=
    TWITTER_API_SECRET_KEY=
    TWITTER_API_BEARER_TOKEN=
    TWITTER_API_ACCESS_TOKEN=
    TWITTER_API_ACCESS_TOKEN_SECRET=
    MIN_TWIT_TIMEOUT=
    MAX_TWIT_TIMEOUT=
    MY_TWITTER_HANDLE=

## Running the project

    $ npm run dev
