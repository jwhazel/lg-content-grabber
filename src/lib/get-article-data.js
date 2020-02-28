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
          errorMsg: `Translation: either this isn't a Gannett website or they have removed the data endpoint that this script uses. Here's the full error I'm seeing when I request the data: \n\n${err}`
        });
      })
      .then(res => res.json())
      .then(data => {
        if (!("article" in data)) {
          reject({
            ok: false,
            errorType: "Error Parsing Content",
            errorMsg: "Translation: I found the endpoint that contains data, but it doesn't look like what I expected it to be."
          });
        } else {
          resolve({ ok: true, data: data });
        }
      });
  });
};
