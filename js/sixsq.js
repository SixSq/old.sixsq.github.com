$(document).ready(function() {
	$('#slider1').bxSlider({
		auto: false,
		speed: 500,
		mode: 'fade',
		pause: 5000,
		nextText: '<img src="/img/design/next.png"/>',
		prevText: '<img src="/img/design/prev.png"/>',
	});

	Cufon.replace('#slider1 h1, .products h2, .personae h2, .customers h3', {
		fontFamily: 'bebas'
	});
	Cufon.replace('#slider1 h3', {
		fontFamily: 'helveticaneue'
	});

	$.ajaxSetup({
		crossDomain: true
	});

	$('#error-dialog').dialog({
		autoOpen: false,
		title: 'Error',
		modal: true,
		width: 500,
		buttons: {
			Close: function() {
				$(this).dialog('close');
			}
		},
		position: {
			my: "top",
			at: "top",
			of: window
		}
	});

	$(document).ajaxError(function(event, jqxhr, settings, exception) {
		$("#error-dialog").dialog("open");
	});

	$('.order-now-placeholder').html("<center> \
			<button type='button' class='order-now' onclick='$(\"#order-now-dialog\").dialog(\"open\");' /> \
		</center> \
		<div id='order-now-thanks-dialog'> \
			Thank you very much for your business. We will be in touch shortly to arrange payment and shipping. \
		</div> \
		<div id='order-now-dialog'> \
		<form id='order-now-form' action='http://getsimpleform.com/messages/ajax?form_api_token=7673c6c3500a57c2403047aaa5ba9ca4' method='get'> \
			<input class='hidden' type='text' name='subject' value='order' ></input> \
			<br/> \
			Want to order NuvlaBoxes?  Please give us the following information and we will get in touch \
			with you to arrange payment and shipping. \
			<br/> \
			<br/> \
			Number of NuvlaBox: <input type='text' name='number' placeholder='How many?...'></input> \
			<br/> \
			<br/> \
			Your email: <input type='text' name='email' placeholder='me@example.com'></input> \
			<br/> \
			<br/> \
			Shipping address: \
			<textarea type='text' name='shipping-address' placeholder='Where should we ship?...'></textarea> \
			<br/> \
			<br/> \
			Billing address (if different from shipping address): \
			<textarea type='text' name='billing-address' placeholder='Where should we send the bill (if different from above)?...'></textarea> \
			<br/> \
			<br/> \
			Comments: \
			<textarea type='text' name='message' placeholder='Please describe your order'></textarea> \
		</form> \
		</div>");
	$('#order-now-dialog').dialog({
		autoOpen: false,
		title: 'Order now',
		modal: true,
		width: 500,
		buttons: {
			"Order": function() {
				var form = $(this).find('form');
				var data = form.serialize();
				var url = form.attr("action");
				$.ajax({
				  dataType: 'jsonp',
				  url: url,
				  data: data
				}).done(function() {
					$('#order-now-thanks-dialog').dialog('open');
				});
				$(this).dialog('close');
			},
			Cancel: function() {
				$(this).dialog('close');
			}
		},
		position: {
			my: "top",
			at: "top",
			of: window
		}
	});
	$('#order-now-thanks-dialog').dialog({
		autoOpen: false,
		title: 'Confirmation',
		modal: true,
		width: 500,
		buttons: {
			Close: function() {
				$(this).dialog('close');
			}
		},
		position: {
			my: "top",
			at: "top",
			of: window
		}
	});

	$('.contact-us-placeholder').html("<center> \
			<button type='button' class='contact-us' onclick='$(\"#contact-us-dialog\").dialog(\"open\");' /> \
		</center>");
		
	$('#contact-us-dialog').dialog({
		autoOpen: false,
		title: 'Contact us',
		modal: true,
		width: 500,
		buttons: {
			"Send": function() {
				var form = $(this).find('form');
				var data = form.serialize();
				var url = form.attr("action");
				$.ajax({
				  dataType: 'jsonp',
				  url: url,
				  data: data
				}).done(function() {
					$('#contact-us-thanks-dialog').dialog('open');
				});
				$(this).dialog('close');
			},
			Cancel: function() {
				$(this).dialog('close');
			}
		},
		position: {
			my: "top",
			at: "top",
			of: window
		}
	});
	$('#contact-us-thanks-dialog').dialog({
		autoOpen: false,
		title: 'Confirmation',
		modal: true,
		width: 500,
		buttons: {
			Close: function() {
				$(this).dialog('close');
			}
		},
		position: {
			my: "top",
			at: "top",
			of: window
		}
	});
});
