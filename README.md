# skivvy-utils
[![npm version](https://img.shields.io/npm/v/skivvy-utils.svg)](https://www.npmjs.com/package/skivvy-utils)
![Stability](https://img.shields.io/badge/stability-stable-brightgreen.svg)
[![Build Status](https://travis-ci.org/skivvyjs/skivvy-utils.svg?branch=master)](https://travis-ci.org/skivvyjs/skivvy-utils)

> Skivvy task runner utilities


## Overview

A set of utilities to use with the [Skivvy](https://www.npmjs.com/package/skivvy) task runner.


## Usage

- [`utils.log()`](#utils.log)
- [`utils.log.debug()`](#utils.log.debug)
- [`utils.log.info()`](#utils.log.info)
- [`utils.log.warn()`](#utils.log.warn)
- [`utils.log.error()`](#utils.log.error)
- [`utils.log.success()`](#utils.log.success)
- [`utils.colors`](#utils.colors)
- [`utils.timer.start()`](#utils.timer.start)
- [`utils.timer.end()`](#utils.timer.end)

---

<a name="utils.log"></a>
### `utils.log(message, [message2, [message3...]])`

Log a generic message to the console, prefixed with the current time. Multiple arguments are joined by a space character.

Where possible, it is better to one of the following methods:

- [`utils.log.debug()`](#utils.log.debug)
- [`utils.log.info()`](#utils.log.info)
- [`utils.log.warn()`](#utils.log.warn)
- [`utils.log.error()`](#utils.log.error)
- [`utils.log.success()`](#utils.log.success)


#### Returns:

N/A


#### Options

| Param | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
| `message` | `string` | Yes | N/A | Message to be logged to the console |


<a name="utils.log.debug"></a>
### `utils.log.debug(message, [message2, [message3...]])`

Log a debug message to the console, prefixed with the current time. Multiple arguments are joined by a space character.


#### Returns:

N/A


#### Options

| Param | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
| `message` | `string` | Yes | N/A | Message to be logged to the console |


<a name="utils.log.info"></a>
### `utils.log.info(message, [message2, [message3...]])`

Log a general information message to the console, prefixed with the current time. Multiple arguments are joined by a space character.


#### Returns:

N/A


#### Options

| Param | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
| `message` | `string` | Yes | N/A | Message to be logged to the console |


<a name="utils.log.warning"></a>
### `utils.log.warning(message, [message2, [message3...]])`

Log a warning message to the console, prefixed with the current time. Multiple arguments are joined by a space character.


#### Returns:

N/A


#### Options

| Param | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
| `message` | `string` | Yes | N/A | Message to be logged to the console |


<a name="utils.log.error"></a>
### `utils.log.error(message, [message2, [message3...]])`

Log an error message to the console, prefixed with the current time. Multiple arguments are joined by a space character.


#### Returns:

N/A


#### Options

| Param | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
| `message` | `string` | Yes | N/A | Message to be logged to the console |


<a name="utils.log.success"></a>
### `utils.log.success(message, [message2, [message3...]])`

Log an success notification to the console, prefixed with the current time. Multiple arguments are joined by a space character.


#### Returns:

N/A


#### Options

| Param | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
| `message` | `string` | Yes | N/A | Message to be logged to the console |


<a name="utils.colors"></a>
### `utils.colors`

Object containing functions used to style console output text using ANSI codes, as seen below:

```javascript
var utils = require('skivvy-utils');

var src = 'src/app.js';
var message = 'Copying file: ' + utils.colors.path(src);

// Log the message to the console, with the path styled correctly
utils.log(message);

```

Various different styles exist, each for logging different types of string:

- #### `utils.colors.path(text)`

	Style a filesystem path for console output


	##### Returns:

	`string` Styled filesystem path


	##### Options

	| Param | Type | Required | Default | Description |
	| ----- | ---- | -------- | ------- | ----------- |
	| `text` | `string` | Yes | N/A | Text to style |

- #### `utils.colors.package(text)`

	Style a Skivvy package name for console output


	##### Returns:

	`string` Styled package name


	##### Options

	| Param | Type | Required | Default | Description |
	| ----- | ---- | -------- | ------- | ----------- |
	| `text` | `string` | Yes | N/A | Text to style |

- #### `utils.colors.task(text)`

	Style a Skivvy task name for console output


	##### Returns:

	`string` Styled task name


	##### Options

	| Param | Type | Required | Default | Description |
	| ----- | ---- | -------- | ------- | ----------- |
	| `text` | `string` | Yes | N/A | Text to style |

- #### `utils.colors.time(text)`

	Style a time measurement for console output


	##### Returns:

	`string` Styled time measurement


	##### Options

	| Param | Type | Required | Default | Description |
	| ----- | ---- | -------- | ------- | ----------- |
	| `text` | `string` | Yes | N/A | Text to style |


<a name="utils.timer.start"></a>
### `utils.timer.start([label])`

Start timing an event

If the `label` argument is specified, a message will be logged to the console:

- if `label` is a `string`, that label will be included in the console log
- if `label` is `true`, a generic message will be logged to the console.

The timer will stop when [`utils.timer.end()`](#utils.timer.end) is called with the token that is returned by this method.


#### Returns:

`string` Token used to stop the timer


#### Options

| Param | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
| `label` | `boolean`,`string` | No | N/A | Log a message to the console |


<a name="utils.timer.end"></a>
### `utils.timer.end(token, [label])`

Stop timing an event

This will stop the timer that corresponds to the `token` that was returned by the [`utils.timer.start()`](#utils.timer.start) method.

If the `label` argument is specified, a message will be logged to the console:

- if `label` is a `string`, that label will be included in the console log
- if `label` is `true`, a generic message will be logged to the console.


#### Returns:

`number` Number of milliseconds that have elapsed since the timer was started


#### Options

| Param | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
| `token` | `string` | Yes | N/A | Timer identifier token |
| `label` | `string`,`boolean` | No | N/A | Log a message to the console |
