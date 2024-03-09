const text1 = $("<p></p>").text("This is ground 0 from jquery")
//before jquery ( create a new element or another or like a new thing before the text)

$('h1').before(text1)

const newTextforAfter = $("<h1></h1>").text('This is from ground2')

$('h1').after(newTextforAfter)