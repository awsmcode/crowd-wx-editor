# Wettermeldungen Editor
Editor for submitting weather reports


# widget


# component
$ npm run build:lib


css
```css
<style>
    .crowd-widget-root {
        margin: 0 auto;
        width: 320px;
        height: 560px;
        position: relative;
        border: 1px solid #000;
    }
</style>
```

html
```html
<div
    id="cw-root"
    class="crowd-widget-root"
    data-locations='[
        {"name":"München","lng":11.57,"lat":48.13},
        {"name":"Augsburg","lng":10.89,"lat":48.37}
    ]'
    data-params='["blitze","wind","hagel","regen"]'
></div>
```

script
```js
<script type="module" src="crowd-widget.tsx"></script>
```