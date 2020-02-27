/**
 * Pay no attention to that man behind the curtain...
 */
export default () => {
  return new Promise((resolve, reject) => {
    let endpoint =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `${document.URL}json`;
    fetch(endpoint)
      .catch(err => {
        reject({
          ok: false,
          errorType: "Network Error Retrieving Content",
          errorMsg: err
        });
      })
      .then(res => res.json())
      .then(data => {
        if (!("article" in data)) {
          reject({
            ok: false,
            errorType: "Error Parsing Content",
            errorMsg: "Content does not match expected schema :("
          });
        } else {
          resolve({ ok: true, data: data });
        }
      });
  });
};
