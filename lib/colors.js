'use strict';

var chalk = require('chalk');

exports.debug = function(string) { return string; };
exports.info = function(string) { return string; };
exports.warning = function(string) { return chalk.yellow(string); };
exports.error = function(string) { return chalk.red(string); };
exports.success = function(string) { return chalk.bold(string); };

exports.path = function(string) { return chalk.magenta(string); };
exports.package = function(string) { return chalk.magenta(string); };
exports.task = function(string) { return chalk.magenta(string); };
exports.time = function(string) { return string; };
