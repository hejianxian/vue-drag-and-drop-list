let pkg = require('./package.json');

let banner =
  '/*!\n' +
  ' * Vue-drag-and-drop-list.js v' + pkg.version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' Hejx\n' +
  ' * Released under the MIT License.\n' +
	' * ' + pkg.homepage + '\n' +
  ' */\n';

export default {
  entry: 'index.js',
  banner: banner,
  targets: [
    {
      dest: pkg['main'],
      format: 'umd',
      moduleName: 'DragAndDropList'
    }
  ]
};
