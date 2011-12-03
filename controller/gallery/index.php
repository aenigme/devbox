<?php defined('LIBRARY') or die('No direct script access allowed');

	if(!$Auth->loggedIn()) redirect('/login');
	
	$page_title = '&raquo; Gallery Upload';
	$load_picmeleo = FALSE;
	
	$testimonial = Testimonial::fetch();
	
	require_once DIR_VIEW . '/devbox/_header.php';
	require_once DIR_VIEW . '/devbox/_navigation.php'; 
?>

	<div class="wrapper">		
		<div class="container">
			<div class="row">
				<div class="span12">
				
					<?php if (!$Error->ok()): ?>
						<div class="row">
							<div style="width: 562px; margin: 0 auto;">
								<div class="alert-message error">
									<?php foreach ($Error->errors as $k => $v): ?>
										<p><?= $v; ?></p>
									<?php endforeach ?>
							    </div>
							</div>
						</div>
					<?php endif ?>
						
					<div class="row">
						<div class="imgHolder">
							<? // dsiplay default image if upload exists ?>
							<?php if (isset($row->location)): ?>
								<a href="#" class="delLink"></a>
								<img class="myImage" src="<?= $row->location ?>" width="400" height="300">
								
								<script type="text/javascript" charset="utf-8">
									$('.imgHolder').parent().show().css("background", "none"); 	
								
									$(function() {
										$("#img_upload").hide();
										$(".delLink").click(function(e) {
								            $(this).parent().parent().next().show();
								            $(this).parent().parent().hide();
											$('#imageCode').attr('value', '');
											$('#pick_files').plupload_button();
								            e.preventDefault();
								        });
									});
								</script>
							<?php endif ?>
						</div>
						<? // hidden file_id value ?>
						<input type="hidden" id="imageCode" name="file_id" value="<?= set_default($row->file_id) ?>" />
						<div id="img_upload" class="gallery_image">
							<a href="javascript:;" id="pick_files" rel="upload/gallery/" width="400" height="300">upload image</a>
						</div>
					</div>
				</div>
			</div>
		</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>