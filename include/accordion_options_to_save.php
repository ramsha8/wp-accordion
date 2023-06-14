<?php 

if(isset($PostID) && isset($_POST['process_accordion_data'])) {
		 
			$titlebg 		= sanitize_hex_color($_POST['titlebg']);
			$panelbg      	= sanitize_hex_color($_POST['panelbg']);
			$titlecolor 	= sanitize_hex_color($_POST['titlecolor']);
			$panelcolor     = sanitize_hex_color($_POST['panelcolor']);
	
			$config_data = serialize( array(
				'titlebg' 		=> $titlebg,
				'panelbg' 			=> $panelbg,
				'titlecolor' 		=> $titlecolor,
				'panelcolor' 			=> $panelcolor
				) );

			update_post_meta($PostID, 'accordion_config', $config_data);
		}
?>