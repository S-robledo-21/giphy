let dummyResponse = {
  data: [
    {
      id: "id1",
      url: "www.google.com/",
    },
    {
      id: "id2",
      url: "www.google.com/",
    },
  ],

  meta: {},
  pagination: {},
};



$(".search-button").click(function () {
let userinput=$(".search-term").val();
  console.log(userinput);
    let url =
  `https://api.giphy.com/v1/gifs/search?q=${userinput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;
 
  fetch(url)

  //step1

    .then(function (response) {
      return response.json();
    })
    //step2
    .then(function (json) {
      let urlForJson = json.data[0].images.original.url;
      console.log(urlForJson);
      $(".display").append(`<img src=${urlForJson}/>`);

      return urlForJson;
    });
});
