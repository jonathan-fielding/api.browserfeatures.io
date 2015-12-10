# Browser Feature API

The API for Browser Features, 

## Endpoints

### /v1/feature/:feature-name

Retrieve data for a given feature

http://127.0.0.1:9000/v1/feature/border-radius

```js
{
	"name": "border-radius",
	"browsers": {
		"and_chr": {
			"y": 46
		},
		"and_uc": {
			"y": 9.9
		},
		"android": {
			"y": 2.1,
			"x": 2.1
		},
		"chrome": {
			"y": 4,
			"x": 4
		},
		"edge": {
			"y": 12
		},
		"firefox": {
			"a": 2,
			"x": 3.6,
			"y": 3
		},
		"ie": {
			"n": 8,
			"y": 9
		},
		"ie_mob": {
			"y": 10
		},
		"ios_saf": {
			"y": 3.2,
			"x": 3.2
		},
		"op_mini": {
			"n": 5
		},
		"opera": {
			"n": 10,
			"y": 10.5
		},
		"safari": {
			"y": 3.1,
			"x": 4,
			"#1": 6.1
		}
	},
	"attribution": "Licensed under CC BY 4.0 license from caniuse.com"
}

```

### /v1/browser/stable

Get a list of the latest stable browsers

### /v1/browser/stable

Get a list of the latest stable browsers

## Licences

The data and code for this project are under a seperate licence due to the data coming from caniuse.com. 

### Code Licence

Copyright (c) 2015 Jonathan Fielding

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Data License

This data used by this API is licenced from caniuse.com under the CC BY 4.0 license (http://creativecommons.org/licenses/by/4.0/). You therefore
need to attribute caniuse.com when using this API.
