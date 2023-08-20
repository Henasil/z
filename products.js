let cart = $(".cart")
let buy = $(".buy")
let count = 0
buy.on("click", function(){
    count += 1
    cart.html("Корзина" + "(" + count + ')')
})  