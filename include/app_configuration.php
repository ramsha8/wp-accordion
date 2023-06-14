 <?php  

 $postIndex = $post->ID;
 $parametersAccordion = unserialize(get_post_meta( $postIndex, 'accordion_config', true));
		$preference_list = array(
		"titlebg"  => "0000FF",
        "panelbg"  => "d3d3d3",
        "titlecolor"  => "ffffff",
        "panelcolor"  => "000000",

		);
		

		foreach($preference_list as $preference => $base_choice) {
			if(isset($parametersAccordion[$preference])) 
				${"" . $preference}  = $parametersAccordion[$preference];
			else
				${"" . $preference}  = "#".$base_choice;
		}
  ?>
  <style type="text/css">
  	.accordion{
  		background:<?php echo sanitize_hex_color($titlebg); ?>;
  	
  }
.accordion textarea{background:<?php echo sanitize_hex_color($titlebg); ?>;
color:<?php echo sanitize_hex_color($titlecolor); ?>;
}
  	.panel,.panel textarea{
  		background:<?php echo sanitize_hex_color($panelbg); ?> ;
  		color:<?php echo sanitize_hex_color($panelcolor); ?>;
  	}
  </style>
<?php 
 $heading=__('Write accordion title here.','accordio');
 $detail=__('Write accordion description here.','accordio');
 $addNew=__('Add new','accordio');
 $remove=__('Remove','accordio');
 $funcParams="'$heading','$detail','$addNew','$remove'";
 ?>
 <div class="d-none lang-words">
      <span class="heading-lang"><?php echo $heading; ?></span>
      <span class="detail-lang"><?php echo $detail; ?></span>
      <span class="addNew-lang"><?php echo $addNew; ?></span>
      <span class="remove-lang"><?php echo $remove; ?></span>
</div>
      <div class="accordion-navbar p-10 border-radius">
         <div class="d-flex justify-content-evenly">
            <div class="d-flex flex-flow-col hover-bbbbbb cursor-pointer res-text-center text-center" onClick="addNewCol(<?php echo$funcParams; ?>)">
                 <i class="fa-solid fa-circle-plus fs-27px mt-9px"></i>
               <div class="fs-14px p-9-5 mt-5"><?php _e('Add New Column','accordio'); ?></div>
            </div>
            <div class="dropdown-accordion hover-bbbbbb cursor-pointer  text-center" onclick="accordionDropdown.call(this)">
                  <i class="fa-solid fa-brush font-size-2-8em mt-5"></i>
  <div class="dropbtn fs-14px p-9-5 cursor-pointer">Change Colors<i class="fa-solid fa-caret-down plummet fs-27px  cursor-pointer"></i></div>
  <div class="dropdown-acontent">
   <div class="text-left pl-13px cursor-pointer res-text-center pb-5px" onClick="clickTitleBg()">
  
    <input type="color" class="mt-5 margin-0-auto hide-input h-0" id="titlebg" name="titlebg" value="<?php echo sanitize_hex_color($titlebg); ?>" onclick="event.stopPropagation();" oninput="changeTitleColorBg()">
    <div class="fs-14px cursor-pointer pb-13px"> <?php _e('Change Background color of title','accordio'); ?> </div>
   </div>
   <div class="text-left pl-13px cursor-pointer pb-5px res-text-center" onClick="clickPanelBg()">

    <input type="color" class="mt-5 margin-0-auto hide-input h-0" id="panelbg" name="panelbg" value="<?php echo sanitize_hex_color($panelbg); ?>" oninput="changePanelColorBg()" onclick="event.stopPropagation();">
    <div class="fs-14px pb-13px"> <?php _e('Change Background color of panel','accordio'); ?> </div>
   </div>
   <div class="text-left pl-13px cursor-pointer pb-5px res-text-center" onClick="clickTileColor()">

    <input type="color" class=" hide-input mt-5 margin-0-auto h-0" id="titlecolor" name="titlecolor" value="<?php echo sanitize_hex_color($titlecolor);  ?>" oninput="changeTitleColor()" onclick="event.stopPropagation();">
    <div class="fs-14px cursor-pointer pb-13px"> <?php _e('Change color of title','accordio'); ?> </div>
   </div>
   <div class="text-left pl-13px cursor-pointer pb-5px res-text-center" onClick="clickPanelColor()">
    <!-- <i class="fa-solid fa-paintbrush fs-27px margin-auto"></i> -->
    <input type="color" class="mt-5 margin-0-auto hide-input h-0" id="panelcolor" name="panelcolor" onclick="event.stopPropagation();" value="<?php echo sanitize_hex_color($panelcolor); ?>" oninput="changePanelColor()">
    <div class="fs-14px cursor-pointer pb-13px"> <?php _e('Change color of panel','accordio'); ?> </div>
   </div>
  </div>
</div> 
           <div class="icon-setting hover-bbbbbb cursor-pointer pb-5px" onclick="colorPickerShow.call(this)">

  <label class="fs-14px p-9-5 text-center">Change Icon Color:</label>
  <input type="color" class="iconColor" onclick="toggleIconShow();closeDropdown();" name="iconColor" oninput="changeIconColor.call(this)">
</div>

            <!--ramsha start  -->
<div class="d-flex flex-flow-col hover-bbbbbb cursor-pointer pb-5px res-text-center p-relative text-center dropdown-accordion2" onClick="toggleIcons.call(this)"><i class="fa-solid fa-icons font-size-2-8em mt-5"></i>
               <div class="fs-14px p-9-5 cursor-pointer text-center">Change Icon of Accordion 
                  <i class="fa-solid fa-caret-down fs-27px vertical-up-down"></i>
         
               </div>
               <div class="iconsContainer bg-white">
             

<?php require('fa-icons.php'); ?>
               </div>
           <!-- drop-down end -->
            </div> 
<!-- custom-css start -->
<div class="custom-css cursor-pointer hover-bbbbbb text-center" onclick="cssPopup()">
   <i class="fa-solid fa-file-code font-size-2-8em  mt-5"></i> <div class="popup-css fs-14px p-9-5 ">Add Custom CSS</div>
</div>
<!-- custom-css end -->
<div class="tailor-class cursor-pointer hover-bbbbbb text-center" onclick="cssPopup(true)">
<i class="fa-brands fa-css3-alt fs-3em mt-5"></i>
<div class="popup-css fs-14px p-9-5">Add Custom Classes</div>
</div>
       <div class="icon-size text-center hover-bbbbbb cursor-pointer pb-5px">
  <i class="fa-solid fa-text-height fs-27px pt-5px pb-21px"></i>
<select class="fs-13px " onchange="iconFont.call(this)" onclick="event.stopPropagation();" >
      <option value="">Change Icon Size</option>
    <option value="12px">12px</option>
    <option value="16px">16px</option>    
    <option value="22px">22px</option>
    <option value="24px">24px</option>
    <option value="32px">32px</option>  
    <option value="36px">36px</option>
    <option value="48px">48px</option>
</select>
</div>     
          
         </div>
   </div>
   <input type="hidden" name="process_accordion_data" value="process_accordion_data">
  