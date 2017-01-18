/**
* generate vue weex example
**/
var Generator = require('yeoman-generator');
var fs = require('fs');

module.exports = class extends Generator {
  
  constructor(args,opts) {
    super(args,opts);
    this.opts = opts;
    console.log(opts);
    console.log(this.destinationRoot())
  }
  
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your weex project name',
      default: this.appname
    }]);
  }
  
  writing() {
    let self = this;
    function copyFiles(arr) {
      arr.forEach((item) => {
        self.fs.copy(self.templatePath(item),self.destinationPath(item));
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
      'webpack.config.js',
      'weex.html'
    ]);
  
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { projectName: this.appname }
    );
  }
  
  install() {
    this.installDependencies({
      skipInstall: this.opts['skip-install'],
      bower: false
    });
  }
  
  end() {
    console.log('All is ready:');
    console.log('$ npm run build : two js bundles for weex and web');
    console.log('$ npm run dev : start a server and watch files');
    console.log('$ npm run serve : start a web server on port 8080');
    console.log('$ npm run debug : start weex-devtool for debugging with native');
    
    
  }
  
};