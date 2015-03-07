$(document).ready(function() {
	$.ajaxSetup({
		crossDomain: true
	});

  $(document).ajaxError(function(event, jqxhr, settings, exception) {
   $("#error-modal").modal("show");
  });
  
  $('#mission > div').tipsy({gravity: 's'});
  
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

  /* Freshdesk chat */
  var fc_CSS=document.createElement('link');fc_CSS.setAttribute('rel','stylesheet');var isSecured = (window.location && window.location.protocol == 'https:');fc_CSS.setAttribute('type','text/css');fc_CSS.setAttribute('href',((isSecured)? 'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets1.chat.freshdesk.com')+'/css/visitor.css');document.getElementsByTagName('head')[0].appendChild(fc_CSS);var fc_JS=document.createElement('script'); fc_JS.type='text/javascript';fc_JS.src=((isSecured)?'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets.chat.freshdesk.com')+'/js/visitor.js';(document.body?document.body:document.getElementsByTagName('head')[0]).appendChild(fc_JS);window.freshchat_setting= 'eyJ3aWRnZXRfc2l0ZV91cmwiOiJzaXhzcS5mcmVzaGRlc2suY29tIiwicHJvZHVjdF9pZCI6bnVsbCwibmFtZSI6IlNpeFNxIiwid2lkZ2V0X2V4dGVybmFsX2lkIjpudWxsLCJ3aWRnZXRfaWQiOiIzOWZmNGQ2My01NzRjLTQ3NzUtYWUyMS0xZDk2NmUwMDUzNTciLCJzaG93X29uX3BvcnRhbCI6ZmFsc2UsInBvcnRhbF9sb2dpbl9yZXF1aXJlZCI6ZmFsc2UsImlkIjo1MDAwMDU0MTI0LCJtYWluX3dpZGdldCI6dHJ1ZSwiZmNfaWQiOiI4NWZiZWE2ZGYyYTY2NWQ2OWIzZDkxYmRiZTQ4YWZkNiIsInNob3ciOjEsInJlcXVpcmVkIjoyLCJoZWxwZGVza25hbWUiOiJTaXhTcSIsIm5hbWVfbGFiZWwiOiJOYW1lIiwibWFpbF9sYWJlbCI6IkVtYWlsIiwicGhvbmVfbGFiZWwiOiJQaG9uZSBOdW1iZXIiLCJ0ZXh0ZmllbGRfbGFiZWwiOiJUZXh0ZmllbGQiLCJkcm9wZG93bl9sYWJlbCI6IkRyb3Bkb3duIiwid2VidXJsIjoic2l4c3EuZnJlc2hkZXNrLmNvbSIsIm5vZGV1cmwiOiJjaGF0LmZyZXNoZGVzay5jb20iLCJkZWJ1ZyI6MSwibWUiOiJNZSIsImV4cGlyeSI6MCwiZW52aXJvbm1lbnQiOiJwcm9kdWN0aW9uIiwiZGVmYXVsdF93aW5kb3dfb2Zmc2V0IjozMCwiZGVmYXVsdF9tYXhpbWl6ZWRfdGl0bGUiOiJDaGF0IGluIHByb2dyZXNzIiwiZGVmYXVsdF9taW5pbWl6ZWRfdGl0bGUiOiJMZXQncyB0YWxrISIsImRlZmF1bHRfdGV4dF9wbGFjZSI6IllvdXIgTWVzc2FnZSIsImRlZmF1bHRfY29ubmVjdGluZ19tc2ciOiJXYWl0aW5nIGZvciBhbiBhZ2VudCIsImRlZmF1bHRfd2VsY29tZV9tZXNzYWdlIjoiSGkhIEhvdyBjYW4gd2UgaGVscCB5b3UgdG9kYXk/IiwiZGVmYXVsdF93YWl0X21lc3NhZ2UiOiJPbmUgb2YgdXMgd2lsbCBiZSB3aXRoIHlvdSByaWdodCBhd2F5LCBwbGVhc2Ugd2FpdC4iLCJkZWZhdWx0X2FnZW50X2pvaW5lZF9tc2ciOiJ7e2FnZW50X25hbWV9fSBoYXMgam9pbmVkIHRoZSBjaGF0IiwiZGVmYXVsdF9hZ2VudF9sZWZ0X21zZyI6Int7YWdlbnRfbmFtZX19IGhhcyBsZWZ0IHRoZSBjaGF0IiwiZGVmYXVsdF90aGFua19tZXNzYWdlIjoiVGhhbmsgeW91IGZvciBjaGF0dGluZyB3aXRoIHVzLiBJZiB5b3UgaGF2ZSBhZGRpdGlvbmFsIHF1ZXN0aW9ucywgZmVlbCBmcmVlIHRvIHBpbmcgdXMhIiwiZGVmYXVsdF9ub25fYXZhaWxhYmlsaXR5X21lc3NhZ2UiOiJXZSBhcmUgc29ycnksIGFsbCBvdXIgYWdlbnRzIGFyZSBidXN5LiBQbGVhc2UgIyBsZWF2ZSB1cyBhIG1lc3NhZ2UgIyBhbmQgd2UnbGwgZ2V0IGJhY2sgdG8geW91IHJpZ2h0IGF3YXkuIiwiZGVmYXVsdF9wcmVjaGF0X21lc3NhZ2UiOiJXZSBjYW4ndCB3YWl0IHRvIHRhbGsgdG8geW91LiBCdXQgZmlyc3QsIHBsZWFzZSB0YWtlIGEgY291cGxlIG9mIG1vbWVudHMgdG8gdGVsbCB1cyBhIGJpdCBhYm91dCB5b3Vyc2VsZi4ifQ==';
  
});
