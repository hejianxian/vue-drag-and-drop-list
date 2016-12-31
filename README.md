#vue-drag-and-drop-list  [![npm](https://img.shields.io/npm/v/vue-drag-and-drop-list.svg?maxAge=2592000?style=flat-square)]()

> Vue directives that allow you to build sortable lists with the native HTML5 drag & drop API. Supports nested lists for building trees and other fancy structures.

## Demo
* [Nested Containers](https://hejx.herokuapp.com/vue-dndl/#!/)
* [Simple Lists](https://hejx.herokuapp.com/vue-dndl/#!/simple)
* [Typed Lists](https://hejx.herokuapp.com/vue-dndl/#!/item-types)
* [Drag Handler](https://hejx.herokuapp.com/vue-dndl/#!/handler)
* [Horizontal Items](https://hejx.herokuapp.com/vue-dndl/#!/horizontal)


## Not supported VueJS 2.0
[Directive interface change](https://github.com/vuejs/vue/issues/2873)

In general, in 2.0 directives have a greatly reduced scope of responsibility: they are now only used for applying low-level direct DOM manipulations. In most cases, you should prefer using Components as the main code-reuse abstraction.

This mean it should be a component. My mistake.😭

## Supported browsers

IE9+ and all modern browsers are supported.

**Touch devices are not supported**, because they do not implement the HTML5 drag & drop standard. However, you can use a [shim](https://github.com/timruffles/ios-html5-drag-drop-shim) to make it work on touch devices as well.


## Installation

```bash
npm install vue-drag-and-drop-list --save
```
or

```bash
yarn add vue-drag-and-drop-list
```
## Usage

```js
import Vue from 'vue';
import vueDragAndDropList from 'vue-drag-and-drop-list';

Vue.use(vueDragAndDropList);
```

or include as an inline script.

## Required CSS styles
Both the dnd-list and it's children require relative positioning, so that the directive can determine the mouse position relative to the list and thus calculate the correct drop position.

```css
ul[dnd-list], ul[dnd-list] > li {
    position: relative;
}
```

## Wiki

you should read the [Vue directive doc](http://vuejs.org/guide/custom-directive.html) first.

* [dnd-draggable](https://github.com/Alex-fun/vue-drag-and-drop-list/wiki/dnd-draggable)
* [dnd-list](https://github.com/Alex-fun/vue-drag-and-drop-list/wiki/dnd-list)
* [dnd-nodrag](https://github.com/Alex-fun/vue-drag-and-drop-list/wiki/dnd-nodrag)
* [dnd-handle](https://github.com/Alex-fun/vue-drag-and-drop-list/wiki/dnd-handle)

## Development

```bash
npm install
npm run watch // rollup watch

npm run build //rollup -c
```

## Run Demo

```bash
cd demo

// vue project
npm install
npm run dev // webpack
```
See all demos source code in 'views/*.vue' file.

## Thanks

[angular-drag-and-drop-lists](https://github.com/marceljuenemann/angular-drag-and-drop-lists)

## License

MIT
