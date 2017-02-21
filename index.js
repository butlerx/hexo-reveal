const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

hexo.extend.tag.register('reveal', function(args){
  const htmlTmlSrc = path.join(__dirname, 'render.ejs');
  const htmlTml = ejs.compile(fs.readFileSync(htmlTmlSrc, 'utf-8'));

  const width = args[1] || 800;
  const height = args[2] || 600;

  return htmlTml({
    'src': args[0],
    'width': width,
    'height': height
  });
})
