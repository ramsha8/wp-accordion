<?php $security_accordion = wp_create_nonce( 'handle_accordion_request_securely' ); ?>

<div style=" overflow: hidden;padding: 10px;"onclick="if ((!document.querySelector('.dropdown-accordion').contains(event.target))&&(!document.querySelector('.dropdown-accordion2').contains(event.target))) {closeDropdown();toggleIconShow();}">

 <div class="wrap pr-20px" >
      <h1 class="res-text-center" ><?php _e('Edit Accordion','accordio'); ?></h1>
      <h2 class="res-text-center" > <?php _e('Customize Accordion according to your requirement.','accordio'); ?></h2>
<?php 
// settings separat file
require('app_configuration.php');

            $loopIndex=0;
$accordionContent = ((get_post_meta( $post->ID, 'parameters_accordion', true)));

$accordionContent = unserialize( preg_replace_callback ('/(?<=^|\{|;)s:(\d+):\"(.*?)\";(?=[asbdiO]\:\d|N;|\}|$)/s',
    function($m){
        return 's:' . strlen($m[2]) . ':"' . $m[2] . '";';
    },$accordionContent ));


            $TotalCountOfItems =  get_post_meta( $post->ID, 'aggregate_accordion', true );
            $accordion_context =  unserialize(get_post_meta( $post->ID, 'accordion_context', true ));
            if (isset($accordion_context['accordion_column'])) {
              $colum1=esc_html($accordion_context['accordion_column']);
              $up=esc_attr($accordion_context['accordion_up']);
              $down=esc_attr($accordion_context['accordion_down']);
              $iconColor=esc_attr($accordion_context['accordion_icon_color']);
              $iconSize=esc_attr($accordion_context['accordion_icon_size']);
              $adjustcss=esc_attr($accordion_context['accordion_adjustcss']);
              $custom_class=str_replace('.', '',esc_attr($accordion_context['accordion_custom_class']));
              $custom_class_dot=esc_attr($accordion_context['accordion_custom_class']);
          }
          
             $heading=__('Write accordion title here.','accordio');
 $detail=__('Write accordion description here.','accordio');

?>
 <input type="hidden" class=" fa-upClass" name="up-icon" value="<?php echo isset($up) ? $up : "fa-angle-up";
 ?>">
<input type="hidden" class=" fa-downClass" name="down-icon" value="<?php echo isset($down) ? $down : "fa-angle-down";
 ?>">
<input type="hidden" name="fa-fontsize" value="<?php echo isset($iconSize) ? $iconSize : "15px";?>">
<input type="hidden" name="fa-iconColor" value="<?php echo isset($iconColor) ? $iconColor : "#fff";?>">

 <?php
            if($TotalCountOfItems) 
            {
                if($TotalCountOfItems!=-1)
                { $endDivs="</div></div>";$loopIndex2=0;
                    foreach($accordionContent as $accordion_panel_data)
                    {
                         $caption_accordion = esc_html($accordion_panel_data['caption_accordion']);
                         $accordion_explanation = (wp_kses_post($accordion_panel_data['explanation_accordion']));
                         if(isset($colum1) && !empty($colum1)){$endDivs="";?>
 <?php if(!$loopIndex){ ?>  
              <div class="d-flex mt-1em res-d-block">
                <div class="width-600px column-1 res-text-center">
                      <?php } ?>
  <div class="accordion <?php echo  $custom_class;if(!$loopIndex) echo"active "; echo $custom_class?$custom_class:""; ?>" >
  <textarea type='text' oninput="verticalHeight.call(this)" placeholder="<?php echo $heading; ?>" onChange="removeWhitespace(this)" id='caption_accordion[]' name='caption_accordion[]'  exist='true'><?php echo ($caption_accordion); ?></textarea>

  <span class="fa-solid fa-trash cursor-pointer" onClick="openPopup.call(this,1,false,<?php echo $loopIndex; ?>)"></span>
  <button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="accordToggle(this)">
    <i class="fa-solid color-white ml-1em jump <?php if(!$loopIndex) echo $up;else echo $down; ?> " style="color:<?php echo $iconColor; ?>;font-size:<?php echo $iconSize; ?>;" ></i></button>
  </div>
        <div class="panel" <?php if(!$loopIndex)echo'style="max-height: 230px;"'; ?> >
<?php require('rich_text_editor.php'); ?>

        </div><div class="openPopup text-center" data-column="1">
  <i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="openPopup.call(this,1,true,<?php echo $loopIndex; ?>)"></i>
</div>
        <?php if($loopIndex==($TotalCountOfItems)-1){ 
          ?>

</div><div class="width-600px d-none sec-col column-2 ml-1em res-text-center res-ml-0">

      
    </div>
</div>
        <?php  }  $loopIndex++;}
                          else{
                         if($loopIndex<ceil($TotalCountOfItems/2)){
                        ?>
                        <?php if(!$loopIndex){ ?>  
              <div class="d-flex mt-1em res-d-block"><div class="width-600px column-1 res-text-center">
                      <?php } ?>

  <div class="accordion <?php if(!$loopIndex) echo"active ";  echo $custom_class?$custom_class:""; ?>" >
  <textarea type='text' oninput="verticalHeight.call(this)" placeholder="<?php echo $heading; ?>" onChange="removeWhitespace(this)" id='caption_accordion[]' name='caption_accordion[]' ><?php echo ($caption_accordion); ?></textarea>
  <span class="fa-solid fa-trash cursor-pointer" onClick="openPopup.call(this,1,false,<?php echo $loopIndex; ?>)"></span>
  <button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="accordToggle(this)">
    <i class="fa-solid color-white ml-1em jump <?php if(!$loopIndex) echo $up;else echo $down; ?>"style="color:<?php echo $iconColor; ?>;font-size:<?php echo $iconSize; ?>;" ></i></button>
  </div>
        <div class="panel" <?php if(!$loopIndex)echo'style="max-height: 235px;"'; ?> >
                 
<?php require('rich_text_editor.php'); ?>

        </div>
<div class="openPopup text-center" data-column="1">
  <i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="openPopup.call(this,1,true,<?php echo $loopIndex; ?>)"></i>
</div>
   

<?php  $loopIndex++;
  }//if($loopIndex<ceil($TotalCount/2)
    else { ?>
    <?php if($loopIndex==ceil($TotalCountOfItems/2)){ ?>
            </div><div class="width-600px sec-col column-2 ml-1em res-ml-0 res-text-center">
    <?php } //end $loopIndex==3 ?>
  <div class="accordion <?php echo $custom_class?$custom_class:""; ?>">
  <textarea type='text' oninput="verticalHeight.call(this)" placeholder="<?php echo $heading; ?>" onChange="removeWhitespace(this)" id='caption_accordion[]' name='caption_accordion[]' ><?php echo ($caption_accordion); ?></textarea>
  <span class="fa-solid fa-trash cursor-pointer" onClick="openPopup.call(this,2,false,<?php echo $loopIndex2; ?>)"></span>
  <button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="accordToggle(this)">
    <i class="fa-solid color-white ml-1em jump <?php if(!$loopIndex) echo $up;else echo $down; ?> "  style="color:<?php echo $iconColor; ?>;font-size:<?php echo $iconSize; ?>;"></i></button>
  </div>
        <div class="panel">
<?php require('rich_text_editor.php'); ?>
        </div><div class="openPopup text-center" data-column="2">
  <i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="openPopup.call(this,2,true,<?php echo $loopIndex2; ?> )"></i><?php $loopIndex2++; ?>
</div>
  <?php  $loopIndex++;
}//end else
  }//end 2 separate columns
}// end foreach

}// end if($TotalCountOfItems!=-1)
} // end if($TotalCountOfItems) 
 else{ $TotalCountOfItems=0;$endDivs="";$colum1=1; ?> 

  <div class="d-flex mt-1em res-d-block">
    <div class="width-600px column-1 res-text-center">
      <?php for($k=0;$k<3;$k++){?>
                  <div class="accordion <?php echo $k?'':'active'; ?> title-text" >
  <textarea type='text' oninput="verticalHeight.call(this)" placeholder="<?php echo $heading; ?>" onChange="removeWhitespace(this)" id='caption_accordion[]' name='caption_accordion[]' ><?php echo ($heading); ?></textarea>
  <span class="fa-solid fa-trash cursor-pointer" onClick="openPopup.call(this,1,false,<?php echo$k; ?>)"></span>
  <button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="accordToggle(this)">
    <i class="fa-solid color-white ml-1em fa-angle-<?php echo$k?'down':'up'; ?> jump" ></i></button>
  </div>
        <div class="panel" style="<?php echo$k?'':'max-height: 230px;'; ?>">
      <?php require('rich_text_editor.php'); ?>
        </div>
<div class="openPopup text-center" data-column="1">
  <i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="openPopup.call(this,1,true,<?php echo$k; ?>)"></i>
</div>
  <?php    } ?>
 </div><?php } ?>

    <?php 
     if(($loopIndex==ceil($TotalCountOfItems/2)) || ($loopIndex==0) || ($loopIndex<=ceil($TotalCountOfItems/2))){ ?>
   
    <!-- second column start -->
    <?php if($loopIndex!=0 && $colum1=="0"){ ?></div><?php } 
    global $post;

    if ( is_object( $post ) && $post->post_type === 'accordion' && $post->post_status === 'draft' ) {
 ?></div><?php
}
// 
    ?>

    <div class="width-600px d-none sec-col column-2 res-ml-0 ml-1em res-text-center">

      
    </div>
<?php } if($loopIndex==0 && $colum1=="0"){ ?></div><?php } ?>


   <?php echo$endDivs;
   if ( isset( $_GET['action'] ) && $_GET['action'] === 'edit' ) {
?>

<div class="bg-lightgray p-15 mt-15 d-flex justify-content-between res-flex-dir-col">
 <span class="border-none result-shortcode fs-15px pt-5px">[accordion id='<?php echo get_the_ID(); ?>']</span>

<span class="clipboard f-right cursor-pointer tooltip fs-16px border-radius" onClick="clipboard()"><?php 
_e('Copy to Clipboard','accordio'); ?> 
  <span class="tooltiptext"><?php _e('Copy to Clipboard','accordio'); ?></span>
</span>
</div> 
<?php } ?>
</div> 
<!-- r end -->
<div class="popup-accord" id="popup">
   <div class="popup-content pb-2em">
      <div class="popup-header color-white">
         <span class="close-button" onclick="closePop()">&times;</span>
         <h1 class="color-white text-center"><?php _e('Delete Accordion Panel','accordio'); ?></h1>
      </div>
      <p class="text-center fs-15px pr-20px pl-20px"><?php _e('Are you sure you want to delete this panel?','accordio'); ?></p>
      <div class="button-container text-center">
         <input type="hidden" value="-1">
         <button type="button" class="cursor-pointer popup-yes" onclick="handleYes.call(this)">Yes</button>
         <button type="button" class="ml-1em cursor-pointer" onclick="closePop()">No</button>
      </div>
      <div class="success-message fs-15px pr-20px pl-20px">
         <span class="tick-icon">✓</span>
         <span ><?php _e('Accordion Panel Deleted Successfully!','accordio'); ?></span> <br>
         <button type="button" class="ml-1em cursor-pointer" onclick="closePop()">Ok</button>
      </div>
      <!-- start -->
      <div class="success-icon fs-15px pr-20px pt-15px pl-20px d-none text-center">
         <span class="tick-icon">✓</span>
         <span ><?php _e('Accordion Icon Updated Successfully!','accordio'); ?></span> <br>
         <button type="button" class="ml-1em cursor-pointer" onclick="closePop()">Ok</button>
      </div>
   </div>
</div>
<!-- popup end -->
<div class="popupcss">
  <div class="panel-popupcss width-600px bg-white text-center">      
    <div class="popup-header color-white position-relative">
         <span class="close-button" onclick="closeCss()">&times;</span>
         <h1 class="color-white text-center"><?php _e('Add Custom CSS','accordio'); ?></h1>
      </div>
        <textarea  class='adjustcss  mt-5' name='adjustcss' value='' placeholder="<?php echo "Write your custom css here."; ?>"><?php echo isset($adjustcss)?$adjustcss:"";?></textarea>
        <input type="text" name="custom_class"  value="<?php echo isset($custom_class_dot)?$custom_class_dot:""; ?>" class="d-none mt-1em margin-0-auto mt-9px" placeholder=".red-button .margin-auto"> 
        <button type="button" class="mb-10px" onclick="closeCss()">Ok</button>  
  </div>
</div>
<!-- popup css end -->
  <input type="hidden" name="security_accordion" value="<?php echo esc_attr( $security_accordion ); ?>"> 
  <input type="hidden" name="data_saver_accordion" value="1" />

  <input type="hidden" name="colum-1" value="<?php echo esc_html($colum1); ?>" >
 