<div class="editor-toolbar p-9-5">
  <div>
  <button type="button" class="editor-button" onclick="format('bold')" ><i class="fa-solid fa-bold"></i></button>
  <button type="button" class="editor-button" onclick="format('italic')"><i class="fa-solid fa-italic"></i></button>
  <button type="button" class="editor-button" onclick="format('insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button type="button" class="editor-button" onclick="format('insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-link"></i></button>
<select class="font-size-select" onchange="changeFontSize.call(this,this.value)">
  <option class="select-option" disabled selected value="">Font Size</option>
  <option class="select-option" value="1"><?php _e('Extra small','accordio'); ?></option>
  <option class="select-option"  value="2"><?php _e('Small','accordio'); ?></option>
  <option class="select-option" value="3"><?php _e('Normal','accordio'); ?></option>
  <option class="select-option" value="4"><?php _e('Large','accordio'); ?></option>
  <option class="select-option" value="5"><?php _e('Extra large','accordio'); ?></option>
  <option class="select-option" value="6"><?php _e('Huge','accordio'); ?></option>
</select>
<button type="button" onClick="sourceEditorClick.call(this )" class="editor-button"><?php _e('Source Editor','accordio'); ?></button>
</div>
</div>  

<div class="editor-container">
<button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button d-none mt-0"><?php _e('Rich Text Editor','accordio'); ?></button>

    <div class="output-panel">
    <div class="output pt-1-6em" oninput="outputHtmlRender.call(this)"  contenteditable="true"><?php echo isset($accordion_explanation)?stripslashes(htmlspecialchars_decode($accordion_explanation)): $detail; ?></div>
  </div>
  <div class="editor-panel">
      <textarea  onChange="removeWhitespace(this)" id='explanation_accordion[]' name='explanation_accordion[]' value='' class="html-input " style="display:none;" oninput="textHtmlRender.call(this)" placeholder="<?php echo $detail; ?>"><?php echo isset($accordion_explanation)?stripslashes($accordion_explanation): $detail;  ?></textarea>
  </div>
</div>
