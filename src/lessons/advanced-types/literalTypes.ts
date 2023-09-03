// const enum RequestType {
//     GET = 'get',
//     POST = 'post'
// }

function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
  if (method === "post") {
    return 1;
  } else {
    return -1;
  }
}

// let method: 'post' = 'post';
// const method = 'post';
let method = "post";

fetchWithAuth("//testURL", method as "post");
