## Steps to connect this external example app to @dooub/editor module.

1. Clone `markdown-reactjs-m` module and this project in the same directory.

2. Go the `markdown-reactjs-m` directory and link needed packages

```sh
        $ yarn link
        $ yarn # install packages
        $ cd node_modules/react && yarn link
        $ cd ../react-dom && yarn link
```

3. Go to the example project directoty (`web-editor-example`) and add linked dependencies.

```sh
        $ yarn link @dooub/editor
        $ yarn link react
        $ yarn link react-dom
        $ yarn #install packages
```

4. Run the example project `yarn start` 

