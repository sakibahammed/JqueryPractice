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

