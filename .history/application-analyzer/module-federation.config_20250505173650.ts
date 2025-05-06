module.exports = {
  name: 'application-analyzer',
  exposes: {
    './Module': './src/app/remote-entry/entry.module.ts',
  },
  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
  }
};