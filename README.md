# koa-301
Simple KoaJS application that preforms HTTP 301 redirects based on hosts configuration file.

## Hosts configuration file
This file contains an array of objects that contain:

- host - where should I redirect to
- domains - a list of domains that I need to issue a redirect for

```javascript
[
  {
    host: 'localhost',
    domains: [
      'example.com',
      'www.example.com',
    ],
  },
]
```
