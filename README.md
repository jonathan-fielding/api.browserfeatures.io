# Browser Feature API

The API for Browser Features, 

## Endpoints

### /v1/feature

Get a list of all the features that we have support data for.

http://localhost:1101/v1/browser/stable

```js
{
    "features": ["aac", "ac3-ec3", "addeventlistener", "ambient-light", "..."],
    "attribution": "Licensed under CC BY 4.0 license from caniuse.com"
}
```

### /v1/feature/:feature-name

Retrieve data for a given feature

http://127.0.0.1:9000/v1/feature/border-radius

```js
{
    "name": "border-radius",
    "browsers": {
        "and_chr": {
            "supported": true,
            "since": 47
        },
        "and_uc": {
            "supported": true,
            "since": 9.9
        },
        "android": {
            "supported": true,
            "since": 2.1,
            "prefixed_until": 2.1
        },
        "chrome": {
            "supported": true,
            "since": 4,
            "prefixed_until": 4
        },
        "edge": {
            "supported": true,
            "since": 12
        },
        "firefox": {
            "supported": true,
            "since": 3,
            "partial_support": 2,
            "prefixed_until": 3.6
        },
        "ie": {
            "supported": true,
            "since": 9
        },
        "ie_mob": {
            "supported": true,
            "since": 10
        },
        "ios_saf": {
            "supported": true,
            "since": 3.2,
            "prefixed_until": 3.2
        },
        "op_mini": {
            "supported": false
        },
        "opera": {
            "supported": true,
            "since": 10.5
        },
        "safari": {
            "supported": true,
            "since": 3.1,
            "prefixed_until": 4
        }
    },
    "attribution": "Licensed under CC BY 4.0 license from caniuse.com"
}

```

If no API is found suggestions will be offered

http://127.0.0.1:9000/v1/feature/border

```js
{
    "error": "api not found",
    "suggestions": ["border-image", "border-radius"]
}
```

### /v1/browser/stable

Get a list of the latest stable browsers

```js
{
    "browsers": {
        "chrome": "47",
        "edge": "13",
        "ie": "11",
        "ie_mob": "11",
        "ios_saf": "9.0",
        "firefox": "42",
        "opera": "33",
        "safari": "9"
    },
    "attribution": "Licensed under CC BY 4.0 license from caniuse.com"
}
```


### /v1/browser/:browser

Get a list of features a browser supports

```js
{
    "name": "Ie 6",
    "slug": "ie6",
    "features": [
        "contenteditable",
        "css-zoom",
        "document-execcommand",
        "eot", "innertext", 
        "input-autocomplete-onoff",
        "text-overflow", 
        "wbr-element",
        "word-break"
    ],
    "attribution": "Licensed under CC BY 4.0 license from caniuse.com"
}
```


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
