module.exports = (app) => {
  app.post("/search", (req, res) => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      params: {
        country: "asia2",
        lang: "en",
        currentpage: "0",
        pagesize: "30",
        categories: "men_all",
        concepts: "H&M MAN",
      },
      headers: {
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        "x-rapidapi-key": "a08498ae59mshb26d01c8c31f0efp1a9dbejsn4a6cee2d911e",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    console.log("body", req.body);
  });
};
