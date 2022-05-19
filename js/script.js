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
    let randomNumber=Math.ceil(Math.random()*json.data.length);
      let urlForJson = json.data[randomNumber].images.original.url;
      console.log(urlForJson);
      $(".display").html(`<img src=${urlForJson}/>`);

      return urlForJson;
    });
});
