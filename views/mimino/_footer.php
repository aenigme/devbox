							<!-- footer -->
							<footer id="footer">
								<div class="columns">
									<div class="holder">
										<div class="column-14">
											<h5>Photographed</h5>
											<!-- flickr list -->
											<script type="text/javascript">	
												$(document).ready(function() {
													$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=41360241@N02&format=json&jsoncallback=?", function(data) {
														   var target = "#latest-flickr-images ul"; // Where is it going?
														   for (i = 0; i <= 1; i = i + 1) { // Loop through the 10 most recent, [0-9]
																   var pic = data.items[i];
																   var liNumber = i + 1; // Add class to each LI (1-10)
																   $(target).append("<li class='flickr-image no-" + liNumber + "'><a class='visual' title='" + pic.title + "' href='" + pic.link + "'><img src='" + pic.media.m + "' /><span class='hover5'><span class='inside'>&nbsp;</span></span></a></li>");
														   }
													});
												});
											</script>

											<div id="latest-flickr-images">
												<ul class="photo-list"></ul>
											</div>
										</div>
										<div class="column-14">
											<h5>Tweeted</h5>
											<!-- tweet list -->
											<div id="twitter_update_list"></div>
											<!-- twitter start script -->
											<script type="text/javascript" src="/assets/js/twitter.js"></script>
											<script type="text/javascript" src="http://twitter.com/statuses/user_timeline/j4kp07.json?callback=twitterCallback2&amp;count=3"></script>			
										</div>
										<div class="column-14">
											<h5>Listened To</h5>
											<!-- lastfm list -->
											<script src="/assets/js/lastfm/js/lastfm.js" type="text/javascript"></script>
											<script type="text/javascript">		
												$(document).ready(function(){
													$('div#lastfm').lastFM({
														username: 'j4kp07',
														apikey: 'a4c9b7286cc6a2cf4ffe5c17ff2e9ecd',
														number: 3,
														artSize: 'medium',
														noart: 'assets/js/lastfm/images/noartwork.gif',
														onComplete: function(){
															//Done
														}
													});
												});
											</script>
											<div id="lastfm">											
												<dl>
													<dt class="lfm_art">
														<a href="#" class="visual"><span class="hover7"><span class="inside">&nbsp;</span></span></a>
													</dt>
													<dd class="lfm_song"><a href="#"></a></dd>
													<dd class="lfm_artist"></dd>
													<dd class="lfm_album"></dd>
												</dl>
											</div>
										</div>
										<div class="column-14">
											<h5>Worked on</h5>
											<!-- dribble list -->											
											<script src="/assets/js/dribbble.js" type="text/javascript"></script>
											<script type="text/javascript">
												$.jribbble.getShotsByPlayerId('1397', function (playerShots) {
													var html = [];
													$.each(playerShots.shots, function (i, shot) {
														html.push('<li>');
														html.push('<a href="' + shot.url + '" class="visual">');
														html.push('<img style="margin:0 0 3px 0;" width="165px" height="125px" src="' + shot.image_teaser_url + '" ');
														html.push('alt="' + shot.title + '"><span class="hover6"><span class="inside">&nbsp;</span></span></a></li>');
													});
													$('#shotsByPlayerId').html(html.join(''));
												}, {page: 1, per_page: 2});
											</script>
											<div class="dribble-examples">
												<ul id="shotsByPlayerId" class="shotList photo-list"></ul>
											</div>
											
										</div>
									</div>
								</div>
								<!-- bottom block -->
								<div class="bottom-block">
									<ul class="bottom-nav">
										<li><a href="#">Home</a></li>
										<li><a href="#">Sitemap</a></li>
										<li><a href="/privacy/">Privacy Policy</a></li>
									</ul>
									<p>CompanyName Ltd. &copy; 2011. All Rights Reserved</p>
								</div>
							</footer>
						</div>
					</div>
					<a class="link-top" href="#">Top</a>
				</div>
			</div>
		</div>
		<div id="bg"><img src="/assets/images/mimino/bg-coffee.jpg" alt=""></div>
	</body>
</html>