console.log('IMIN');
$(document).ready(function () {
  $('p').css('border-bottom','1px solid black')
  $('.first').css('border-color','red')
  $('#special').css('background-color','#ffcc00')
  $('p.first small').css('background-color','lightblue')

//$('.first').text('lets learn jQuery')
  $('.first').html('lets learn <em> jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')


$('#yourName').val('Bob Builder')

/*attribute Selectors*/

$('a[href="#1"]').css('background-color','tomato')
$('a[href^="#"]').css('color','grey') //$ end with
$('a[href*="google"]').css('font-weight','bold')


/* $('.card:first').delay(1000).hide(400).show(800, function() {
alert('we\'re back') */

$('.card').animate({ borderRadius: '20px'}, 400)

/* attribute method */
$('img:first').attr('src','./img/image-5.jpg')


//class methods

console.log($('img:last').hasClass('special'))

// $('img').addClass('special')
 $('img').toggleClass('special')



/* events */

$('img').click(function () {
    console.log($(this)).attr('src'))
    $(this).toggleClass('special')
})

/* AJAX */

$('#content').load('./about.html')
$('#contentNav .nav-link').click(function (e) {
  e.preventDefault()
var page = $(this).attr('href')
$('#contentNav .active').removeClass('active')
$(this).addClass('active')
// $('.active').addClass('active')

// $('#content').load(page)

$('#content').fadeOut(500, function () {
  $('#content').load(page)
}).fadeIn(500)

})
$.ajax({
  url: 'http://jsonplaceholder.typicode.com/posts',
  type: 'GET',
  dataType: 'json'
}).done(function (data){
// console.log(data)

var numPosts = data.length
for (var i = 0; i < numPosts; i++) {
var post = '<div class="col-sm-6 p-5"><h3>'
  post += (i+1) + '. ' + data[i].title
  post += '</h3><p>'
  post += data[i].body
  post += '</p></div>'
  $('#posts').append(post)
})


})
