
"use strict";

const ava = require("ava");
const restHalDynlinks = require(".");

ava(function restHalDynlinksProvideMiddleware(t) {
    t.truthy(restHalDynlinks.Middleware);
});
