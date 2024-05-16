[Node JS Notes]

- It's JavaScript RunTimeEnvironment.
- JS wrapper on Google's V8 Engine is called Node JS, It helps to create server.
- Installed Node.
- Initialized npm.
  - npm init (for setting node modules in project).
  - It creates a pakcage.json file.

- File System Module. (fs)
  - writeFile
  - appendFile
  - rename
  - copyFile
  - unlink(delete)
  - rm (delete's folder/dir) [ recursive to delete inside also]
  - H.W. => creating folder/file. | Reading folder/file.
  - fs using promises.
  - Async / Sync Difference , [there is a diffference of just a call back]
    (Async don't returns data , uses callback to return data.
      Sync return data, instead of callback)

- http Module
  - createServer
  - handling Url's
  - Http Methods

- path Module
  - extname
  - dirnname
  - filename
  - join
  - basename

[NPM]
- Pre-Installed that comes with node is called Modules and what we install from npm is called package.

- Installing and Uninstalling npm packages.
- Installing particaluar version on a package.

- Scripts in package.json
  - start and test are pre declared in operating system when we install node and npm.
  - for custom scripts we have to use run [npm run script]

- Difference between depedencies and devDependencies
  - Dependencies means it will be used in the production.
  - DevDependencies means it will be used only in develpoment, not in production. [eg. test libraries]

- nodemon (automatically restarts the server on changes).

- ES Modules and Common JS modules.



