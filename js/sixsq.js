$(document).ready(function() {
	$.ajaxSetup({
		crossDomain: true
	});

  $(document).ajaxError(function(event, jqxhr, settings, exception) {
   $("#error-modal").modal("show");
  });
  
  $('#mission > div').tipsy({gravity: 's'});
  
  $('#contact-form').bootstrapValidator({
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    live: 'enabled',
    resetForm: true,
    fields: {
      firstname: {
          validators: {
              notEmpty: {
                  message: 'The first name is required'
              }
          }
      },
      lastname: {
          validators: {
              notEmpty: {
                  message: 'The last name is required'
              }
          }
      },
      email: {
          validators: {
              notEmpty: {
                  message: 'The email is required'
              }
          }
      },
      company: {
          validators: {
              notEmpty: {
                  message: 'The company/organisation is required'
              }
          }
      },
      message: {
          validators: {
              notEmpty: {
                  message: 'We can\'t read your mind just yet ;-)'
              }
          }
      }
    }
  })
  .on('success.form.bv', function(e) {
    // Prevent form submission
    e.preventDefault();

    // Get the form instance
    var $form = $(e.target);

    // Get the BootstrapValidator instance
    var bv = $form.data('bootstrapValidator');

    // Use Ajax to submit form data
    $.post($form.attr('action'), $form.serialize(), function(result) {
      $('#contact-modal').modal('hide');
      $('#contact-thanks-modal').modal('show');
    }, 'jsonp');
  });
  
  $('#order-form').bootstrapValidator({
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    live: 'enabled',
    message: 'This value is not valid',
    submitButtons: 'button[type="submit"]',
    trigger: null,
    resetForm: true,
    fields: {
      firstname: {
          validators: {
              notEmpty: {
                  message: 'The first name is required'
              }
          }
      },
      lastname: {
          validators: {
              notEmpty: {
                  message: 'The last name is required'
              }
          }
      },
      email: {
          validators: {
              notEmpty: {
                  message: 'The email is required'
              }
          }
      },
      company: {
          validators: {
              notEmpty: {
                  message: 'The company/organisation is required'
              }
          }
      },
      shipping: {
          validators: {
              notEmpty: {
                  message: 'The shipping address is required'
              }
          }
      },
      number: {
          validators: {
              integer: {
                  message: 'We need a number here'
              },
              notEmpty: {
                  message: 'We need a number here'
              }
          }
      }
    }
  })
  .on('success.form.bv', function(e) {
    // Prevent form submission
    e.preventDefault();

    // Get the form instance
    var $form = $(e.target);

    // Get the BootstrapValidator instance
    var bv = $form.data('bootstrapValidator');

    // Use Ajax to submit form data
    $.post($form.attr('action'), $form.serialize(), function(result) {
      $('#order-modal').modal('hide');
      $('#order-thanks-modal').modal('show');
    }, 'jsonp');
  });;

  var insertVideos = function(playlistId, target) {
    $.getJSON('https://www.googleapis.com/youtube/v3/playlistItems?&origin=http://localhost:4000&maxResults=4&part=snippet&playlistId=' + playlistId + '&key=AIzaSyDdrmCZq0NAWnaGtxAbkL9P-9FyMRonpJY', function(data) {
      for(var i=0; i<data.items.length; i++) {
        var col = $("#col-template > div").clone();
        var id = data.items[i].snippet.resourceId.videoId;
        var title = data.items[i].snippet.title;
        col.html('<h3>' + title + '</h3><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="http://www.youtube.com/embed/' + id + '"></iframe></div>');
        col.appendTo("#" + target + " div:first");
      }
    });}
    insertVideos('PLY20wTTKSDHaga8xpf0k9RhkFELMyVTZ7', 'tutorials')
    insertVideos('PLY20wTTKSDHaVRTyXqLjJ1o3HfvtvJNKK', 'talks')
  
});
