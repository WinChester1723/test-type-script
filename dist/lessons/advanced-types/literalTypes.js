"use strict";
// const enum RequestType {
//     GET = 'get',
//     POST = 'post'
// }
function fetchWithAuth(url, method) {
    if (method === "post") {
        return 1;
    }
    else {
        return -1;
    }
}
// let method: 'post' = 'post';
// const method = 'post';
let method = "post";
fetchWithAuth("//testURL", method);
