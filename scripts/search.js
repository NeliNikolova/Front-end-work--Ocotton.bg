$(function() {
  var products = [
   {
      name: "Бебешко боди момиче 0-24 м",
      img: "body.jpg",
	  description:"Бебешко боди от органичен памук в натурален цвят. Лесно за обличане с тик-так копченца.",
      price: "10.99",
	  num:"1"
    },
    {
      name: "Дамско бяло боди",
      img: "body1.jpg",
      description: "Дамско боди от органичен памук в бял цвят. Изключително меко на допир и с високо качество.100% органичен памук.",
      price: "25.00",
	  num:"2"
	},
    {
      name: "Дамско черно боди",
      img: "body2.jpg",
      description: "Дамско боди от органичен памук в черен цвят. Изключително меко на допир и с високо качество.100% органичен памук.",
      price: "26.70",
	  num:"3"
	},
    
    {
      name: "Дамско боди два цвята",
      img: "body4.jpg",
      description: "Дамско боди от органичен памук в черен цвят. Изключително меко на допир и с високо качество.100% органичен памук. ",
      price: "30.50",
	  num:"4"
	},
    {
      name: "Бебешко боди момче 3-6 м",
      img: "baby.jpg",
      description: "Бебешко боди от органичен памук в натурален цвят. Лесно за обличане с тик-так копченца.",
      price:" 13.80",
	  num:"5"
	},
	{
	 name:"Мъжки боксерки",
      img: "man.jpg",
      description: "Мъжки боксерки от органичен памук в бял цвят. Изключително меки на допир и с високо качество.100% органичен памук.",
      price:"9.99",
	  num:"6"
	},
    {
      name: "Мъжка тениска",
      img: "t-shirt1.jpg",
      description: "Мъжка тениска от органичен памук в цвят слонова кост. Изключително мека на допир и с високо качество.100% органичен памук.",
      price:"18.96",
	  num:"7"
	},
    {
      name: "Дамска тениска",
      img: "t-shirt.jpg",
      description: "Дамска тениска от органичен памук в зелен цвят. Изключително мека на допир и с високо качество.100% органичен памук.",
      price: "17.99",
	  num:"8"
	},
	{
      name: "Дамски халат в розово",
      img: "lady.jpg",
      description: "Изключително мек на допир и с високо качество.100% органичен памук.",
      price: "40.99",
	  num:"9"
	},
    {
      name: "Бял халат унисекс",
      img: "white.jpg",
      description: "Изключително мек на допир и с високо качество.100% органичен памук.",
      price: "43.99",
	  num:"10"
	} 
  ];

  var $products = $("#products");
  appendProducts(products);

  function appendProducts(products) {
    $("#products").html("");
    for (var i = 0; i < products.length; i++) {
      var currentProduct = products[i];
      var htmlProduct = createProductHtml(currentProduct);
      $products.append(htmlProduct);
    }
  }

  function createProductHtml(product) {
    var result = $("<div class='product-item clearfix'>");
    var heading= $("<h3 class='product-name'>").text(product.name);
    var productImg = $("<img src='" + "./images/" + product.img + "'>");
    var desc = $("<div class='desc'>").text(product.description);
	var price=$("<div class='price'>").text("цена:"+" "+product.price+" "+"lv");
	var order=$("<div class='product-item '><a href='#' class='orderItem'>Поръчайте</a></div>");
    $(result).append(heading).append(productImg).append(desc).append(price).append(order);
    return result;
  }
  $('#search-form').submit(function() {
	 submit(); 
   return false;
});

  var submit=$("#search").click(function(e){
	 e.preventDefault();
     e.stopPropagation();
      var matches = [];
      var searchText = $("#search-input").val();
      for (var i = 0; i < products.length; i++) {
      var currentProduct = products[i];
      var nameToLower = currentProduct.name.toLowerCase();
      var isMatch = nameToLower.indexOf(searchText) >= 0;
      if(isMatch) matches.push(currentProduct);
    }
	appendProducts(matches);
  });
  
  $('#ProductSort').on('change', function() {
  var sortingMethod = $(this).val();

    if(sortingMethod == '1')
    {
        sortProductsPriceAscending();
    }
    else if(sortingMethod == '2')
    {
        sortProductsPriceDescending();
    }
   else if(sortingMethod == '3')
    {
        sortProductsNewItem();
    }  
});
function sortProductsPriceAscending(a,b)
{
  products.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});
    appendProducts(products);

}

function sortProductsPriceDescending(a,b)
{
 products.sort(function(a, b) {
    return parseFloat(b.price) - parseFloat(a.price);
});
       appendProducts(products);
}
function sortProductsNewItem()
{
products.sort(function(a,b) {
return parseInt(b.num) - parseInt(a.num);
});
      appendProducts(products);
};

});

 
