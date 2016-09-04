#vue-drag-and-drop-list

[![npm](https://img.shields.io/npm/v/vue-drag-and-drop-list.svg?maxAge=2592000?style=flat-square)]()

> Vue directives that allow you to build sortable lists with the native HTML5 drag & drop API. It base on [Angular-drag-drop-lists](https://github.com/marceljuenemann/angular-drag-and-drop-lists)

## Demo
* [Simple Lists](https://hejx.herokuapp.com/vue-dndl/#!/simple)
* [Typed Lists](https://hejx.herokuapp.com/vue-dndl/#!/item-types)
* [Drag handler](https://hejx.herokuapp.com/vue-dndl/#!/handler)


## Supported browsers

IE9+ and all modern browsers are supported.

**Touch devices are not supported**, because they do not implement the HTML5 drag & drop standard. However, you can use a [shim](https://github.com/timruffles/ios-html5-drag-drop-shim) to make it work on touch devices as well.


## Installation

```bash
npm install vue-drag-and-drop-list --save
```

## Usage

```js
import Vue from 'vue';
import vueDragAndDropList from 'vue-drag-and-drop-list';

Vue.use(vueDragAndDropList);
```

or include as an inline script, like example.

## Directives

you should read the [Vue directive doc](http://vuejs.org/guide/custom-directive.html) first.

* dnd-draggable
* dnd-list
* dnd-nodrag
* dnd-handle

doc comming soon！

## Development

```bash
npm install
npm run dev // rollup watch

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

## License

MIT
