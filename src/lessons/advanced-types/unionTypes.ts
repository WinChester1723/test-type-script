export function logId(id: string | number | boolean) {
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  } else if (typeof id == "number") {
    console.log(id.toExponential());
  } else {
    console.log(id);
  }
}

export function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultiplaIds(a: string | number, b: string | boolean) {
  if (a == b) {
    console.log(a.toLowerCase());
  }
}
