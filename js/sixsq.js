$(document).ready(function() {
	$.ajaxSetup({
		crossDomain: true
	});

  $(document).ajaxError(function(event, jqxhr, settings, exception) {
   $("#error-modal").modal("show");
  });
  
  $('#mission > div').tipsy({gravity: 's'});
  
  $('#contact-button').click(function() {
    FreshWidget.show(); return false;
  });

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
