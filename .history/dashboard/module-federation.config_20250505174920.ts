module.exports = {
  name: 'dashboard',
  exposes: {
    './Module': './src/app/app.component.ts',
  },
  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
  }
};