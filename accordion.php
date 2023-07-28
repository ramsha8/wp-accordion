<?php 
 /*
 * Plugin Name:       Accordion
 * Description:       Add plugin on your website with Accordion plugin
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Ramsha Tariq
 * Author URI:        https://www.linkedin.com/in/ramsha-tariq-0522a4167/
 * Text Domain:       accordio
 */

 add_action( 'admin_enqueue_scripts', 'EnqueueHandler' );
function EnqueueHandler( $hook ) {
    if((get_post_type()=="accordion")){  

    wp_register_script(
            'ajax-script',
            plugins_url( 'assets/js/settings.js', __FILE__ ),
            array(),
            '1.0.0',
            true
    );             
    wp_enqueue_script( 'ajax-script' ); 
 wp_localize_script('ajax-script', 'tStrings', array(
     'deleteAccordionPanel' => __('Delete Accordion Panel', 'accordio'),
     'addURL' => __('Enter the URL:','accordio'),
     'accIconUpdatedTitle'=>__('Accordion Icon Updated','accordio'),
     'addCustomClasses'=>__('Add Custom Classes','accordio'),
     'addCustomCSS'=>__('Add Custom CSS','accordio'),
     'addAcc'=>__('Add Accordion Panel','accordio'),
     'addAcc2'=>__('Are you sure you want to add a new panel?','accordio'),
     'delAcc'=>__('Delete Accordion Panel','accordio'),
     'delAcc2'=>__('Are you sure you want to delete this panel?','accordio'),
     'accPanelAdd'=>__('Accordion Panel Added Successfully!','accordio'),
     'accPanelDel'=>__('Accordion Panel Deleted Successfully!','accordio'),
     'esmall'=>__('Extra small','accordio'),
     'small'=>__('Small','accordio'),
     'normal'=>__('Normal','accordio'),
     'large'=>__('Large','accordio'),
     'elarge'=>__('Extra large','accordio'),
     'huge'=>__('Huge','accordio'),
     'fontsize'=>__('Font Size','accordio'),
     'sourceEditor'=>__('Source Editor','accordio'),
     'richTextEditor'=>__('Rich Text Editor','accordio'),
     'copytoClipboard'=>__('Copy to Clipboard','accordio'),
     'errorMsg'=>__('Atleast 1 panel is required.','accordio'),
     'copied'=>__('Copied!','accordio'),
      'heading'=>__('Write accordion title here.','accordio'),
     'detail'=>__('Write accordion description here.','accordio'),

    )); 
               

}

    if ( 'toplevel_page_accordion' !== $hook ) {
        return;
    }

}



function accordionFrontend($postId = [], $content = null, $tag = '') {
    if($postId['id']){   
            wp_enqueue_style('fontawesome', plugins_url( 'assets/css/all.min.css', __FILE__ ));

        $accordionContent = get_post_meta( $postId['id'], 'parameters_accordion', true);
        $accordionContent = unserialize( preg_replace_callback (     '/(?<=^|\{|;)s:(\d+):\"(.*?)\";(?=[asbdiO]\:\d|N;|\}|$)/s',
    function($m){
        return 's:' . strlen($m[2]) . ':"' . $m[2] . '";';
    },$accordionContent ));
        $TotalCountOfItems =  get_post_meta( $postId['id'], 'aggregate_accordion', true );
        $accordion_config =  unserialize(get_post_meta( $postId['id'], 'accordion_config', true ));
        $accordion_context =  unserialize(get_post_meta( $postId['id'], 'accordion_context', true ));

            if (isset($accordion_context['accordion_column'])) {
              $colum1=esc_html($accordion_context['accordion_column']);
              $up=esc_attr($accordion_context['accordion_up']);
              $down=esc_attr($accordion_context['accordion_down']);
              $iconColor=esc_attr($accordion_context['accordion_icon_color']);
              $iconSize=esc_attr($accordion_context['accordion_icon_size']);
              $adjustcss=esc_attr($accordion_context['accordion_adjustcss']);
              $custom_class_dot=str_replace('.', '',esc_attr($accordion_context['accordion_custom_class']));
          }
        $loopIndex=0;
            if($TotalCountOfItems) 
            {
                if($TotalCountOfItems!=-1)
                { $endDivs="</div></div>";
                $resultFinal=' <style>  .mt-15{margin-top: 15px;}
   .bg-white{
    background-color: #fff;
   }
   .p-15{padding: 15px;}
.btn-acc{    cursor:pointer;background-color: green;
    color: #fff;
    padding: 10px 19px;
    font-size: 16px;
    border: none;
    border-radius: 5px;}
.accordion {
  background-color: '.esc_html($accordion_config['titlebg']).';
  color: '.esc_html($accordion_config['titlecolor']).';
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  margin:5px;
  border-radius: 5px;
}
.f-right{float:right;}
.panel {
    ;color:'.esc_html($accordion_config['panelcolor']).' !important;
    margin-left: 9px; 
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
      border-radius: 5px;
  background-color: '.esc_html($accordion_config['panelbg']).';
  
}
.p-0-12px{padding: 0px 12px;}
.width-600px{width:600px}
.d-none{display:none}
.d-flex{display:flex;}
.mt-1em{margin-top: 1em;}
.ml-1em{margin-left:1em}
.accordion-navbar{
        background: lightgray;
    width: 100%;
}
.border-none{border: none !important;}
.text-center{text-align:center}
.fs-16px{font-size: 16px;}
.p-9-5{padding: 9px 5px;}
.cursor-pointer{cursor:pointer;}
.p-10{padding: 10px;}
.br-96969696{border-right: 1px solid #969696;}
.justify-content-evenly{justify-content: space-evenly;}
.border-radius{border-radius: 5px;}
.hover-bbbbbb:hover{background:#bbbbbb;}
.bl-96969696{border-left: 1px solid #969696;}
.mt-5{margin-top:5px;}
.flex-flow-col{flex-flow: column;}
.padding-top-9px{padding-top: 9px;}
.margin-0-auto{margin: 0 auto;}
.fs-23px{font-size: 23px;}
.pb-5px{padding-bottom: 5px;} .fs-15px{
  font-size: 15px;
}

.pt-5px{padding-top:5px;}
.justify-content-between{justify-content: space-between;}
.pr-20px{padding-right:20px;}
.bg-lightgray{background:lightgray}
.cursor-text{cursor:text;}
@media only screen and (max-width: 768px) {
  .res-d-block {
    display: block !important;
  }
  .column-1,.column-2{width:100% !important;}
}'.$adjustcss.'
</style> ';

                    foreach($accordionContent as $accordion_panel_data)
                    {
                         $caption_accordion = esc_html($accordion_panel_data['caption_accordion']);
                         $accordion_explanation = wp_kses_post($accordion_panel_data['explanation_accordion']);
                         if($colum1){$endDivs="";
 if(!$loopIndex){ 
                            $resultFinal.= '<div class="d-flex mt-1em res-d-block"><div class="width-600px column-1">';
                       }  $resultFinal.='<button class="accordion '.$custom_class_dot.'"  type="button">'.
$caption_accordion.'
  <i class="fa-solid color-white ml-1em '.$down.' f-right" style="color: ' .$iconColor.';font-size:'. $iconSize.'"></i></button>
        <div class="panel" ><div class="p-9-5">
     '.  stripslashes(htmlspecialchars_decode($accordion_explanation)).'
        </div></div>';

 $loopIndex++; 
                         }else{
                         if($loopIndex<ceil($TotalCountOfItems/2)){
                        
                         if(!$loopIndex){ 
                            $resultFinal.= '<div class="d-flex mt-1em res-d-block"><div class="width-600px column-1">';
                       } 

  $resultFinal.='<button class="accordion '.$custom_class_dot.'"  type="button">'.
$caption_accordion.' <i class="fa-solid color-white ml-1em f-right '.$down.' " style="color:'.  $iconColor.' ;font-size:'.  $iconSize.';"></i>
  </button>
        <div class="panel" ><div class="p-9-5">
     '. stripslashes(htmlspecialchars_decode($accordion_explanation)).'
        </div></div>';

 $loopIndex++;
  }//end if($loopIndex<ceil($TotalCount/2)
    else { ?>
    <?php if($loopIndex==ceil($TotalCountOfItems/2)){ 
           $resultFinal.= ' </div><div class="width-600px sec-col column-2 ml-1em">';
    } //end $loopIndex==3 
$resultFinal.= ' <button class="accordion '.$custom_class_dot.'" type="button">'.$caption_accordion.'<i class="fa-solid color-white ml-1em f-right '.$down.'" style="color:'. $iconColor.';font-size:'. $iconSize.';"></i>
  </button>
        <div class="panel"><div class="p-9-5">
          '. stripslashes(htmlspecialchars_decode($accordion_explanation)).'
         
       </div> </div>';
$loopIndex++;
}//end else
  }//separate columns
}// end foreach

}// end if($TotalCountOfItems!=-1)
} // end if($TotalCountOfItems) 
         $resultFinal.='<script> var acc = document.getElementsByClassName("accordion");
var i;
var up="'.$up.'";var down="'.$down.'";
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
   var accord=this;
      var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
        accord.querySelector(".fa-solid").classList.remove(up);
        accord.querySelector(".fa-solid").classList.add(down); 
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      accord.querySelector(".fa-solid").classList.remove(down);
      accord.querySelector(".fa-solid").classList.add(up); 
    } 
  });
}</script>';return $resultFinal;
    }
return __("No accordion found.",'accordio');

}
add_shortcode('accordion', 'accordionFrontend');

add_action( 'admin_enqueue_scripts', 'backendCss' );
function backendCss($hook ) {
     if(get_post_type()=="accordion")
        {
            wp_enqueue_style( 'admin_css', plugins_url( 'assets/css/style.css', __FILE__ ));
            wp_enqueue_style( 'font-awesome', plugins_url( 'assets/css/all.min.css', __FILE__ ) );

        }

   }

if (is_admin()){
    add_action('admin_init','addMetaBoxAccordion'); 
    add_action('add_meta_boxes', 'addMetaBoxAccordion');

    add_action('save_post_accordion', 'accordion_meta_box_save_handler');
    add_action('save_post_accordion', 'accordion_meta_box_settings_handler');

}
 function accordion_meta_box_save_handler($PostID) {
        require('include/save_accordion_data.php');
    }
 function addMetaBoxAccordion(){

   if(get_post_type()=="accordion"){

        add_meta_box('register_accordion', __('Build Accordion','accordio'), 'AccordMetaBoxRegistrationHandler' );
    }
 }
 function accordion_meta_box_settings_handler($PostID) {

    require('include/accordion_options_to_save.php');

 }

require_once('include/post_type_definition.php');

register_uninstall_hook( __FILE__, 'my_plugin_cleanup' );

    function my_plugin_cleanup(){
$post_ids = get_posts( array( 
    'post_type' => 'accordion',
    'numberposts' => -1,   
    'post_status' => array('publish', 'pending', 'draft', 'auto-draft', 'future', 'private', 'inherit', 'trash'), ) );

foreach ( $post_ids as $post_id ) {

    delete_post_meta_by_key( 'parameters_accordion', $post_id->ID );
    delete_post_meta_by_key( 'aggregate_accordion', $post_id->ID );
    delete_post_meta_by_key( 'accordion_column', $post_id->ID );
    delete_post_meta_by_key( 'accordion_config', $post_id->ID );
    wp_delete_post($post_id->ID, true);

}


}

function AccordMetaBoxRegistrationHandler($post){

require_once('include/build_accordion_interface.php');
    }

// Export accordion data to CSV.
function accordion_csv_export() {//echo'<pre>';print_r(($_POST['action']));die;
    if (isset($_POST['action']) && $_POST['action'] === 'export_accordion_csv' && isset($_POST['post_id'])) {
        $post_id = intval($_POST['post_id']);
        check_admin_referer('export_accordion_csv', 'export_accordion_csv_nonce');

        $accordion = get_post($post_id);

        if ($accordion->post_type === 'accordion') {
            $filename = 'accordion_' . $post_id . '.csv';

            // Set the CSV delimiter and line endings.
            $delimiter = ',';
            $line_ending = "\r\n";

            // Output CSV headers.
            header('Content-Type: text/csv; charset=utf-8');
            header("Content-Disposition: attachment; filename=$filename");

            // Open output stream.
            $output = fopen('php://output', 'w');

            // Output CSV column headers.
            fputcsv($output, array( 'Title', 'Content'), $delimiter);
$accordionContent = ((get_post_meta($accordion->ID, 'parameters_accordion', true)));

$accordionContent = unserialize( preg_replace_callback ('/(?<=^|\{|;)s:(\d+):\"(.*?)\";(?=[asbdiO]\:\d|N;|\}|$)/s',
    function($m){
        return 's:' . strlen($m[2]) . ':"' . $m[2] . '";';
    },$accordionContent ));
foreach($accordionContent as $accordion_panel_data){
                $row = array(
                $accordion_panel_data['caption_accordion'],
                str_replace('&nbsp;', ' ',strip_tags(stripslashes(htmlspecialchars_decode($accordion_panel_data['explanation_accordion'])))),
            );

            fputcsv($output, $row, $delimiter);
}
            // Output CSV row for the current accordion.


            // Close output stream.
            fclose($output);

            // Stop WordPress from generating additional output.
            exit();
        }
    }
}
add_action('admin_post_export_accordion_csv', 'accordion_csv_export');

// Enqueue JavaScript for handling the CSV Export button click.
function enqueue_accordion_csv_export_script() {
    $screen = get_current_screen();
    if ($screen->post_type === 'accordion' && $screen->base === 'post') {
        wp_enqueue_script('accordion-csv-export', plugin_dir_url(__FILE__) . 'assets/js/accordion-csv-export.js', array('jquery'), '1.0', true);
global $post;
        // Pass admin URL to JavaScript.
        wp_localize_script('accordion-csv-export', 'accordionExportVars', array(
            'adminUrl' => admin_url('admin-post.php'),
            'exportNonce' => wp_create_nonce('export_accordion_csv'),
            'postId' => $post->ID,
        ));
    }
}
add_action('admin_enqueue_scripts', 'enqueue_accordion_csv_export_script');

// Export accordion data to CSV.
