<div class="editor-toolbar p-9-5">
  <div>
  <button type="button" class="editor-button" onclick="format('bold')" ><i class="fa-solid fa-bold"></i></button>
  <button type="button" class="editor-button" onclick="format('italic')"><i class="fa-solid fa-italic"></i></button>
  <button type="button" class="editor-button" onclick="format('insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button type="button" class="editor-button" onclick="format('insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-link"></i></button>
<select class="font-size-select" onchange="changeFontSize.call(this,this.value)">
  <option class="select-option" disabled selected value="">Font Size</option>
  <option class="select-option" value="1">Extra small</option>
  <option class="select-option"  value="2">Small</option>
  <option class="select-option" value="3">Normal</option>
  <option class="select-option" value="4">Large</option>
  <option class="select-option" value="5">Extra large</option>
  <option class="select-option" value="6">Huge</option>
</select>
<button type="button" onClick="sourceEditorClick.call(this )" class="editor-button">Source Editor</button>
</div>
</div>  

<div class="editor-container">
<button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button d-none mt-0">Rich Text Editor</button>

    <div class="output-panel">
    <div class="output pt-1-6em" oninput="outputHtmlRender.call(this)"  contenteditable="true"><?php echo isset($accordion_explanation)?stripslashes(htmlspecialchars_decode($accordion_explanation)): $detail; ?></div>
  </div>
  <div class="editor-panel">
      <textarea  onChange="removeWhitespace(this)" id='explanation_accordion[]' name='explanation_accordion[]' value='' class="html-input " style="display:none;" oninput="textHtmlRender.call(this)" placeholder="<?php echo $detail; ?>"><?php echo isset($accordion_explanation)?stripslashes($accordion_explanation): $detail;  ?></textarea>
  </div>
</div>
