$(document).ready(function(){var menu={init:function(){menu.toggleMobileMenu()
menu.closeMobileMenu()},toggleMobileMenu:function(){$('.nav-hamburger').click(function(){$(this).fadeOut()
$('.mobile-nav-close').fadeIn()
$('#header_work #navigation ul li').fadeIn(2000)
$('#header_work').animate({height:'100vh'},600).css('opacity','.95');});},closeMobileMenu:function(){$('.mobile-nav-close').click(function(){$(this).fadeOut()
$('.nav-hamburger').fadeIn()
$('#header_work #navigation ul li').hide()
$('#header_work').animate({height:'65px'},600).css('opacity','.90');});}}
var copyEmailToClipboard={init:function(){copyEmailToClipboard.copyToClipboard()
copyEmailToClipboard.copyOnClick()},copyToClipboard:function(element){var $temp=$("<input>");$("body").append($temp);$temp.val($(element).text()).select();document.execCommand("copy");$temp.remove();},copyOnClick:function(){$('.envelop, #header_work .nav-icons a:nth-child(2)').click(function(){copyEmailToClipboard.copyToClipboard('.email-address')
alert('Email Address Copied to Clipboard!')})}}
menu.init()});