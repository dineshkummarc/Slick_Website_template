$(document).ready(function()
	{
		$('#slides').cycle({
				prev 	: '#previous-slide',
				next 	: '#next-slide',
				timeout : 5000,
				pause 	: 1,
				before 	: changeTitle
			});
	});

function changeTitle()
	{
		var title = $(this).find('img').attr('alt');
		var href = $(this).attr('href');
		
		$('#slide-title').text(title).attr('href', href);
	}