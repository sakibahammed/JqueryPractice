console.log("Hello Mom");



// using javascript ( vanila one )

// document.querySelector('button').addEventListener('click',function(){
//     document.querySelector('h1').innerText = "You have clicked a button"
// })



// using jqeury


$("button").click(function(){
    $('h1').text("a button is pressed and there is only one button in this whole html file")
})

// toggole element



$("#btn").click(function(){
    $("h1").toggleClass("color")
})



// add event listener in multiple element

// $(".mybtn").click(function(){
//     var value = this.innerHTML;
//     // $("h1").text(value + "is clicked")

// })


// another way to add event listener


$(".mybtn").on("click",function(){
    var value = this.innerHTML;
    $("h1").text(value);
})
