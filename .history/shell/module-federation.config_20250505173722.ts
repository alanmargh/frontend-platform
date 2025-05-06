module.exports = {
  name: 'shell',
  remotes: ['dashboard', 'application-analyzer'],
  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
  }
};