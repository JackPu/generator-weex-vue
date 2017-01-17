/**

**/
var Generator = require('yeoman-generator');
var fs = reuqire('fs');

module.exports = class extends Generator {
  constructor(args,opts) {
    super(args);
    console.log(opts)
  }
  
  writing() {
    
    function copyFiles(arr) {
      arr.forEach((item) => {
        this.fs.copy(this.templatePath(item),this.destinationPath(item));
      })
    }
    
    copyFiles([
      '.babelrc',
      '.eslintrc',
      '.gitignore',
      'assets',
      'build',
      'index.html',
      'src',
      'weexpack.config.js',
      'weex.html'
    ]);
    
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copyTpl(
      this.templatePath('build'),
      this.destinationPath('build')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { title: 'Templating with Yeoman' }
    );
  }
  
  install() {
    this.installDependencies();
  }
  
};