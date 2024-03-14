# automerge-bundle #

an automerge bundle that can be used in no-build environments

```html
<script type="module" src="https://rozek.github.io/automerge-bundle/dist/automerge-bundle.js)"></script>

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
