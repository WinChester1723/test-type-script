const enum StatusCode {
  SUCCESS,
  IN_PROGRESS,
  FAILED,
}

export function enumsProcess() {
  const res = {
    message: "Some Text for Test",
    statusCode: StatusCode.SUCCESS,
  };
  return res;
}

export function action(status: StatusCode) {
  if (status === StatusCode.SUCCESS) {
    console.log("Operation was successful.");
  } else if (status === StatusCode.IN_PROGRESS) {
    console.log("Operation is in progress.");
  } else if (status === StatusCode.FAILED) {
    console.log("Operation failed.");
  } else {
    console.log("Unknown status.");
  }
}
