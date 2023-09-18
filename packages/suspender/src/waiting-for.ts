type PromiseDescribe<T> = {
  status?: "pending" | "fulfilled" | "rejected";
  result?: T;
  error?: unknown;
};

function watingFor<T>(promise: PromiseLike<T> & PromiseDescribe<T>) {
  if (promise.status === "pending") {
    throw promise;
  } else if (promise.status === "fulfilled") {
    return promise.result; /* it's like for value */
  } else if (promise.status === "rejected") {
    throw promise.error;
  } else {
    promise.status = "pending";

    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.result = result;
      },
      (error) => {
        promise.status = "rejected";
        promise.error = error;
      }
    );

    throw promise;
  }
}

export { watingFor, type PromiseDescribe };
