<?php 
//echo'<pre>';print_r($_POST);;die;
if(isset($PostID) && isset($_POST['data_saver_accordion']) ) {

            if (!wp_verify_nonce($_POST['security_accordion'], 'handle_accordion_request_securely')) {
                die();
            }
            $TotalCountOfItems = count($_POST['caption_accordion']);
            $accordion_items = array();
            if($TotalCountOfItems) {
                for($i=0; $i < $TotalCountOfItems; $i++) {
                    $caption_accordion = (sanitize_text_field($_POST['caption_accordion'][$i]));
                    $accordion_explanation = htmlspecialchars(addslashes($_POST['explanation_accordion'][$i]),ENT_QUOTES);
                    $accordion_items[] = array(
                       'caption_accordion' => $caption_accordion,
                        'explanation_accordion' => $accordion_explanation,
                    );
                }
                 // echo'<pre>';print_r((serialize($accordion_items)));die;
                update_post_meta($PostID, 'parameters_accordion', (serialize($accordion_items)));
                update_post_meta($PostID, 'aggregate_accordion', $TotalCountOfItems);
                update_post_meta($PostID,'accordion_context',serialize([
                    'accordion_column'=> sanitize_text_field($_POST['colum-1']),
                    'accordion_up'=>sanitize_text_field($_POST['up-icon']),
                    'accordion_down'=> sanitize_text_field($_POST['down-icon']),
                    'accordion_icon_size'=>sanitize_text_field($_POST['fa-fontsize']),
                    'accordion_icon_color'=>sanitize_text_field($_POST['fa-iconColor']) ,
                    'accordion_adjustcss'=>  sanitize_textarea_field($_POST['adjustcss']),
                    'accordion_custom_class'  =>sanitize_text_field($_POST['custom_class'])     
            ])
        );
                

            } else {
                update_post_meta($PostID, 'parameters_accordion', -1);
                update_post_meta($PostID, 'aggregate_accordion', serialize([]));
                update_post_meta($PostID,'accordion_column',0);
            }
        }
 
   