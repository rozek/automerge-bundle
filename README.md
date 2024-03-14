# automerge-bundle #

an automerge bundle that can be used in no-build environments

```html
<script type="module" src="https://rozek.github.io/automerge-bundle/dist/automerge-bundle.js"></script>

<script>
  if (window.automerge == null) {
    document.addEventListener('automerge',runApplication)
  } else {
    runApplication()
  }

  function runApplication () {
// ....insert your automerge code here
  }
</script>
```

## Build Instructions ##

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/automerge-bundle/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

## License ##

[MIT License](LICENSE.md)
