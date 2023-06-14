
function addNewCol(title,description,add,remove){
	let down=document.querySelector('.fa-downClass').value;
let fs=document.querySelector('input[name="fa-fontsize"]').value;
let iconColor=document.querySelector('input[name="fa-iconColor"]').value;
var index = document.querySelectorAll('.addnewnew > i').length;
		jQuery('.sec-col').toggleClass('d-none');
		if (jQuery('.sec-col').hasClass('d-none') ){
			jQuery('.sec-col').empty();
			jQuery('input[name=colum-1]').val("1");
		}
		else{
			jQuery('.sec-col').append('<div type="button" class="accordion title-text "> <textarea type="text" id="caption_accordion[]" name="caption_accordion[]" onChange="removeWhitespace(this)" placeholder="'+title+'">'+title+'</textarea><span class="fa-solid fa-trash cursor-pointer mt-5" onClick="addnewnew.call(this,2,false,0)"></span><button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="changeText(this)"><i class="fa-solid color-white ml-1em '+down+'" style="font-size: '+fs+';color:'+iconColor+'" ></i></button></div>') ;
 			jQuery('.sec-col').append('<div class="panel"> <div class="editor-toolbar p-9-5" onClick="changeText(this,true)"> <button type="button" class="editor-button" onclick="format(\'bold\')" ><i class="fa-solid fa-bold"></i></button> <button type="button" class="editor-button" onclick="format(\'italic\')"><i class="fa-solid fa-italic"></i></button> <button type="button" class="editor-button" onclick="format(\'insertUnorderedList\')"><i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="format(\'insertOrderedList\')"><i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-list-ul"></i></button> <select class="font-size-select ml-left-2em " onchange="changeFontSize.call(this,this.value)"> <option class="select-option" disabled selected value="">Font Size</option> <option class="select-option" value="1">Extra small</option> <option class="select-option"  value="2">Small</option> <option class="select-option" value="3">Normal</option> <option class="select-option" value="4">Large</option> <option class="select-option" value="5">Extra large</option> <option class="select-option" value="6">Huge</option> </select> </div> <div class="editor-container"> <button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button">Source Editor</button> <div class="output-panel"> <div class="output" oninput="outputHtmlRender.call(this)"  contenteditable="true">' +description+'</div> </div> <div class="editor-panel"> <textarea  id="explanation_accordion[]" name="explanation_accordion[]" value="" class="html-input" style="display:none;" oninput="textHtmlRender.call(this)" placeholder="'+description+'"> '+description+'</textarea> </div> </div> </div>');
	 	jQuery('.column-2>div:nth-child(2)').after('<div class="addnewnew text-center" data-column="2"><i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="addnewnew.call(this,2,true,0)"></i></div>');
	
			jQuery('.sec-col').append('<div type="button" class="accordion title-text "> <textarea type="text" id="caption_accordion[]" name="caption_accordion[]" onChange="removeWhitespace(this)" placeholder="'+title+'">'+title+'</textarea><span class="fa-solid fa-trash cursor-pointer mt-5" onClick="addnewnew.call(this,2,false,1)"></span><button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="changeText(this)"><i class="fa-solid color-white ml-1em  '+down+'" style="font-size: '+fs+';color:'+iconColor+'" ></i></button></div>') ;
 			jQuery('.sec-col').append('<div class="panel"> <div class="editor-toolbar p-9-5" onClick="changeText(this,true)"> <button type="button" class="editor-button" onclick="format(\'bold\')" ><i class="fa-solid fa-bold"></i></button> <button type="button" class="editor-button" onclick="format(\'italic\')"><i class="fa-solid fa-italic"></i></button> <button type="button" class="editor-button" onclick="format(\'insertUnorderedList\')"><i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="format(\'insertOrderedList\')"><i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-list-ul"></i></button> <select class="font-size-select ml-left-2em " onchange="changeFontSize.call(this,this.value)"> <option class="select-option" disabled selected value="">Font Size</option> <option class="select-option" value="1">Extra small</option> <option class="select-option"  value="2">Small</option> <option class="select-option" value="3">Normal</option> <option class="select-option" value="4">Large</option> <option class="select-option" value="5">Extra large</option> <option class="select-option" value="6">Huge</option> </select> </div> <div class="editor-container"> <button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button">Source Editor</button> <div class="output-panel"> <div class="output" oninput="outputHtmlRender.call(this)"  contenteditable="true">' +description+'</div> </div> <div class="editor-panel"> <textarea  id="explanation_accordion[]" name="explanation_accordion[]" value="" class="html-input" style="display:none;" oninput="textHtmlRender.call(this)" placeholder="'+description+'"> '+description+'</textarea> </div> </div> </div>');
				jQuery('.column-2>div:nth-child(5)').after('<div class="addnewnew text-center" data-column="2"><i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="addnewnew.call(this,2,true,1)"></i></div>');
	
			jQuery('.sec-col').append('<div type="button" class="accordion title-text "> <textarea type="text" id="caption_accordion[]" name="caption_accordion[]" onChange="removeWhitespace(this)" placeholder="'+title+'">'+title+'</textarea><span class="fa-solid fa-trash cursor-pointer mt-5" onClick="addnewnew.call(this,2,false,2)"></span><button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="changeText(this)"><i class="fa-solid color-white ml-1em  '+down+'" style="font-size: '+fs+';color:'+iconColor+'"></i></button></div>') ;
 	 		jQuery('.sec-col').append('<div class="panel"> <div class="editor-toolbar p-9-5" onClick="changeText(this,true)"> <button type="button" class="editor-button" onclick="format(\'bold\')" ><i class="fa-solid fa-bold"></i></button> <button type="button" class="editor-button" onclick="format(\'italic\')"><i class="fa-solid fa-italic"></i></button> <button type="button" class="editor-button" onclick="format(\'insertUnorderedList\')"><i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="format(\'insertOrderedList\')"><i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-list-ul"></i></button> <select class="font-size-select ml-left-2em " onchange="changeFontSize.call(this,this.value)"> <option class="select-option" disabled selected value="">Font Size</option> <option class="select-option" value="1">Extra small</option> <option class="select-option"  value="2">Small</option> <option class="select-option" value="3">Normal</option> <option class="select-option" value="4">Large</option> <option class="select-option" value="5">Extra large</option> <option class="select-option" value="6">Huge</option> </select> </div> <div class="editor-container"> <button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button">Source Editor</button> <div class="output-panel"> <div class="output" oninput="outputHtmlRender.call(this)"  contenteditable="true">' +description +'</div> </div> <div class="editor-panel"> <textarea  id="explanation_accordion[]" name="explanation_accordion[]" value="" class="html-input" style="display:none;" oninput="textHtmlRender.call(this)" placeholder="'+description+'"> '+description+'</textarea> </div> </div> </div>');
	 	jQuery('.column-2>div:nth-child(8)').after('<div class="addnewnew text-center" data-column="2"><i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="addnewnew.call(this,2,true,2)"></i></div>');
			
	 		jQuery('input[name=colum-1]').val("0");
		}
		changePanelColor();changeTitleColor();changePanelColorBg();changeTitleColorBg();
	}
function clickTitleBg(){event.stopPropagation();
	jQuery('#titlebg').click();
}
function clickPanelBg(){event.stopPropagation();
	jQuery('#panelbg').click();
}
function changeTitleColorBg(){
jQuery('.accordion').css("background-color",jQuery('#titlebg').val());
jQuery('.accordion>textarea').css("background-color",jQuery('#titlebg').val());
//generateParams();

}
function changePanelColorBg(){

jQuery('.panel').css("background-color",jQuery('#panelbg').val());
jQuery('.panel textarea').css("background-color",jQuery('#panelbg').val());

//generateParams();

}
// ==============
function clickTileColor(){event.stopPropagation();
	jQuery('#titlecolor').click();
} 
function changeTitleColor(){		
	jQuery('.accordion>textarea').css("color",jQuery('#titlecolor').val());

	//generateParams();
}
function clickPanelColor(){event.stopPropagation();
	jQuery('#panelcolor').click();
}
function changePanelColor(){
	jQuery('.panel textarea').css("color",jQuery('#panelcolor').val());
	jQuery('.panel').css("color",jQuery('#panelcolor').val());

}

// function clickTileHover(){
// 	jQuery('#tilehover').click();
// }
// function changeTileHover(){
// 	jQuery('.panel').css("color",jQuery('#panelcolor').val());
// }
// function TitleHoverColor(){
// 	jQuery(this).css("background-color",jQuery('#tilehover').val());
// }
function clipboard(){
 var copyText = jQuery(".result-shortcode");  
 copyText.select();
 navigator.clipboard.writeText(copyText.text());
 copyText.blur();
 jQuery('.tooltiptext').text("Copied!");
  setTimeout(()=>jQuery('.tooltiptext').text("Copy to Clipboard"), 3000 );

}
function changeText(el,textarea=false){
 el.parentNode.classList.toggle("active");
    var panel = el.parentNode.nextElementSibling;	
   let up= document.querySelector('.fa-upClass').value ;
   let down= document.querySelector('.fa-downClass').value ;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
       	el.querySelector('.fa-solid').classList.remove(up);
    	el.querySelector('.fa-solid').classList.add(down); 
    } else {
     	el.querySelector('.fa-solid').classList.remove(down);
      el.querySelector('.fa-solid').classList.add(up); 
      panel.style.maxHeight = panel.scrollHeight + "px";
}

}

function addNewPanel(colNum,caption,detail,add,remove){
	addRichTextEditor(colNum,caption,detail,add,remove);

}
function remPanel(colNum){
	let	indexToRemove= (jQuery('.column-'+colNum).children().length)-3;
	if(indexToRemove>1){
	if (!(jQuery('.column-' + colNum).find('.error').length)){	
		jQuery('.column-'+colNum).children().eq(indexToRemove).remove();
		jQuery('.column-'+colNum).children().eq(indexToRemove-1).remove();
	}

} else {

if(colNum=='2'){
	jQuery('.column-2').empty();
			jQuery('input[name=colum-1]').val("1");
			jQuery('.column-2').addClass("d-none");
}else{
jQuery('.error').remove();
jQuery('.column-1').children().eq(jQuery('.column-1').children().length-3).after('<div class="error ml-halfem" style="color:red;">Atleast 1 panel is required.</div>');

	}
	
}

}
function removeWhitespace(el){
el.value=el.value.trim();	 verticalHeight.call(el);
}
function remPanelRes(){
	if (jQuery('.column-2').children().length > 2) {
			let	indexToRemove= (jQuery('.column-2').children().length)-3;
			jQuery('.column-2').children().eq(indexToRemove).remove();
			jQuery('.column-2').children().eq(indexToRemove-1).remove();
	}
	else{	
		let	indexToRemove= (jQuery('.column-1').children().length)-3;
		if(indexToRemove>1){
			if (!(jQuery('.column-1').find('.error').length)){	
				jQuery('.column-1').children().eq(indexToRemove).remove();
				jQuery('.column-1').children().eq(indexToRemove-1).remove();
			}
		}
		else{	
			jQuery('.column-1').append('<span class="error" style="color:red;">Atleast 1 panel is required.</span>');
		}
	}
}
function addNewPanelRes(caption,detail){
jQuery('.column-2').removeClass('d-none');
	jQuery('.error').remove();	
	jQuery('.add-col-2').remove();
	jQuery('.rem-col-2').remove();
jQuery('.column-2').append('<button type="button" class="accordion title-text" onclick="changeText(this)"><textarea type="text" id="caption_accordion[]" name="caption_accordion[]" onChange="removeWhitespace(this)" exist="true" placeholder="'+caption+'">'+caption+'</textarea></button>');
 jQuery('.column-2').append('<div class="panel"><p class="p-0-12px" onClick="changeText(this,true)"><textarea onChange="removeWhitespace(this)" id="explanation_accordion[]" name="explanation_accordion[]" exist="true" row="3" placeholder="'+detail+'">'+detail+'</textarea></p></div>');
jQuery('.column-2').append('<button type="button" class=" res-d-none add-col-2"></button>');
jQuery('.column-2').append(' <button type="button" class="res-d-none rem-col-2"></button>');
changePanelColor();changeTitleColor();changePanelColorBg();changeTitleColorBg();
}
// 

  // wusiwug editor start

function changeFontSize(value) {

    var selectedOption = this.options[this.selectedIndex];
    for (var i = 0; i < this.options.length; i++) {
        this.options[i].classList.remove('d-none');
    }
    selectedOption.classList.add('d-none');

    format('fontSize', value);
}
	  function format(command, value = null) {
      if (command === "fontSize") {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('fontSize', false, value);
         }else{  
          document.execCommand(command, false, value);
          }

}

function insertLink() {
  var url = prompt("Enter the URL:","https://");
  if (url) {
    format("createLink", url);
  }
}


// Toggle the visibility of the panels when the button is clicked
function toggleButtonfunc() {

const htmlInput = this.parentNode.querySelector('.html-input');
const output = this.parentNode.querySelector('.output');
const editorPanel = this.parentNode.querySelector('.editor-panel');
const editorToolbar= this.parentNode.previousElementSibling;
  if (htmlInput.style.display === 'none') {
    htmlInput.style.display = 'block';
    output.style.display = 'none';
    this.textContent = 'Rich Text Editor';
    editorPanel.style.display='block';
	editorToolbar.style.display = 'none';this.style.marginTop="-20px";
  } else {
    htmlInput.style.display = 'none';
    output.style.display = 'block';
    this.textContent = 'Source Editor';
    editorToolbar.style.display = 'block';
    renderOutput.call(this);
    this.style.marginTop="-2.5em";
  }
}

// Update output content and render output when HTML input changes
function textHtmlRender() {
  renderOutput.call(this);
}

// Function to render the output based on the HTML input
function renderOutput() {
 const output = this.parentNode.parentNode.querySelector('.output');

const htmlInput=this.parentNode.querySelector('.html-input');

  const htmlCode = htmlInput.value;
  output.innerHTML = htmlCode;
}
// r start
// Update HTML editor value when output changes
function outputHtmlRender() {
  updateHtmlEditorValue.call(this);
}


// Function to update HTML editor value when output changes
function updateHtmlEditorValue() {
  const outputContent = this.innerHTML;
  const htmlInput=this.parentNode.parentNode.querySelector('.html-input');
  htmlInput.value = outputContent;
}
  // wusiwug editor end

function verticalHeight(){
	  this.style.height = "";
  this.style.height = Math.min(this.scrollHeight, 250) + "px";
}


jQuery( document ).ready(function() {
   (function() {
			 jQuery('.accordion>textarea').each(function() {
  		verticalHeight.call(this); 	})
		})();
});

 function openPop(colNum,add=false){
 
   var popup= document.getElementById("popup");
   popup.querySelector('.success-icon').style.display='none';
if(add){
	popup.querySelector('h1').innerHTML="Add Accordion Panel";
	popup.querySelector('p').innerHTML="Are you sure you want to add a new panel?";
	popup.querySelector('.popup-yes').onclick=function() {addPanelIndex(colNum);}
}
else{
		popup.querySelector('h1').innerHTML="Delete Accordion Panel";
	popup.querySelector('p').innerHTML="Are you sure you want to delete this panel?";	
	popup.querySelector('.popup-yes').onclick=function() {
  handleYes(colNum);
};

}

	var buttonContainer = popup.querySelector('.button-container');
	buttonContainer.style.display='block';
	buttonContainer.previousElementSibling.style.display='block';
	popup.querySelector('.success-message').style.display='none';
   // stylings end
	let total = this.parentNode.parentNode.childElementCount;
	let parentnode = this.parentNode;
	let index = -1;
	let sibling = parentnode.parentNode.firstElementChild;

	while (sibling) {
	  index++;
	  if (sibling === parentnode) {
	    break;
	  }
	  sibling = sibling.nextElementSibling;
	}
  popup.style.display='flex';
	popup.querySelector('input').value = index;
 }
function closePop(){
	document.getElementById("popup").style.display='none';
}

function toggleIcons() {  
	const caretIcon = this.querySelector('.vertical-up-down');  
	caretIcon.classList.toggle('fa-caret-up');
  caretIcon.classList.toggle('fa-caret-down');
  const iconsContainer = document.querySelector('.iconsContainer');
  iconsContainer.classList.toggle('show');
  closeDropdown();
}

function changeIcon(el,twin=false){
		var popup=document.getElementById('popup');
	popup.style.display='flex';
	popup.querySelector('h1').innerHTML='Accordion Icon Updated';
	popup.querySelector('.success-icon').style.display='block';
	popup.querySelector('.popup-header').nextElementSibling.innerHTML='';
	popup.querySelector('.button-container').style.display='none';
	popup.querySelector('.success-message').style.display='none';
	let down = el.className.match(/fa-(?!solid\b)\w+(?:-\w+)*\b/g);
	let up = 	twin?down:el.nextElementSibling.className.match(/fa-(?!solid\b)\w+(?:-\w+)*\b/g);
	let acc = document.querySelectorAll('.accordion');
	acc.forEach(function(element) {
  let faElement = element.querySelector('.fa-solid.jump');
  let classNames = faElement.className.replace(/fa-(?!solid\b)\w+(?:-\w+)*\b/g, '');
    faElement.className = classNames;
   if(element.className.match('active')){
 			faElement.classList.add(up);
				}
   else{
   	faElement.classList.add(down);
   }

	});
	document.querySelector('.fa-upClass').value  = up;
	document.querySelector('.fa-downClass').value  = down;

	}
function changeIconColor(){
	let color=this.value;
	var allAccordions = document.querySelectorAll('.accordion i.fa-solid');
	for(let i=0;i<allAccordions.length;i++){
	allAccordions[i].style.color=color;
	}
	document.querySelector('input[name="fa-iconColor"]').value=color;
}

function colorPickerShow(){  
	event.stopPropagation();
this.querySelector('input').click();
}
function iconFont(){
	event.stopPropagation();
	if(this.value!=""){
	let fs=this.value;
	var allAccordions = document.querySelectorAll('.accordion i.fa-solid');
		for(let i=0;i<allAccordions.length;i++){
		allAccordions[i].style.fontSize=fs;
		}
	document.querySelector('input[name="fa-fontsize"]').value=fs;
	}

}
function cssPopup(customClass=false){
	   let popupcss= document.querySelector('.popupcss');
	   popupcss.style.display='flex';
	if(customClass){popupcss.querySelector('h1').innerHTML='Add Custom Classes';
popupcss.querySelector('input[name="custom_class"]').style.display='block';
popupcss.querySelector('textarea[name="adjustcss"]').style.display='none';

	}
  else {popupcss.querySelector('h1').innerHTML='Add Custom CSS';
popupcss.querySelector('input[name="custom_class"]').style.display='none';
popupcss.querySelector('textarea[name="adjustcss"]').style.display='block';

  }

}
function closeCss(){
	document.querySelector('.popupcss').style.display='none';

}

function addnewnew(colNum,add=false,index){ 
var popup= document.getElementById("popup");
   popup.querySelector('.success-icon').style.display='none';
if(add){
	popup.querySelector('h1').innerHTML="Add Accordion Panel";
	popup.querySelector('p').innerHTML="Are you sure you want to add a new panel?";
	popup.querySelector('.popup-yes').onclick=function() {addPanelIndex(colNum,index);}
}
else{
		popup.querySelector('h1').innerHTML="Delete Accordion Panel";
	popup.querySelector('p').innerHTML="Are you sure you want to delete this panel?";	
	popup.querySelector('.popup-yes').onclick=function() {
  handleYes(colNum,index);
};

}

	var buttonContainer = popup.querySelector('.button-container');
	buttonContainer.style.display='block';
	buttonContainer.previousElementSibling.style.display='block';
	popup.querySelector('.success-message').style.display='none';
  popup.style.display='flex';
	popup.querySelector('input').value = (index);
	
}

 function addPanelIndex(colNum,index){
	 var langWords= document.querySelector('.lang-words');
	 addRichTextEditor(colNum,
	 	langWords.querySelector('.heading-lang').innerHTML,
	 	langWords.querySelector('.detail-lang').innerHTML,
	 	langWords.querySelector('.addNew-lang').innerHTML,
	 	langWords.querySelector('.remove-lang').innerHTML,
	 	index);
	 //colNum,caption,detail,add,remove){
 }
 function addRichTextEditor(colNum,caption,detail,add,remove,index=false){
			jQuery('.error').remove();
			var col=jQuery('.column-'+colNum);
			var popup = document.getElementById('popup');	
			let successM = popup.querySelector('.success-message');
			successM.style.display='block';

actualIndex=3*(index)+3;
				   // stylings start
	var buttonContainer = popup.querySelector('.button-container');
	buttonContainer.style.display='none';
	buttonContainer.previousElementSibling.style.display='none';
	successM.querySelector(':nth-child(2)').innerHTML='Accordion Panel Added Successfully!';
	let icon=document.querySelector('input.fa-downClass').value;
	let color=document.querySelector('input[name="fa-iconColor"]').value;
	let size=document.querySelector('input[name="fa-fontsize"]').value;

		jQuery('.column-'+colNum+'>div:nth-child('+actualIndex+')').after('<div class="accordion title-text" > <textarea type="text" oninput="verticalHeight.call(this)" placeholder="'+caption+'" onChange="removeWhitespace(this)" id="caption_accordion[]" name="caption_accordion[]" >'+caption+'</textarea><span class="mt-5 fa-solid fa-trash cursor-pointer" onClick="addnewnew.call(this,'+colNum+',false,'+index+')"></span> <button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="changeText(this)"> <i class="fa-solid color-white ml-1em '+icon+'" style="color:'+color+';font-size:'+size+';"></i></button> </div>');
			actualIndex++;
		jQuery('.column-'+colNum+'>div:nth-child('+actualIndex+')').after('<div class="panel"> <div class="editor-toolbar p-9-5" onClick="changeText(this,true)"> <button type="button" class="editor-button" onclick="format(\'bold\')" ><i class="fa-solid fa-bold"></i></button> <button type="button" class="editor-button" onclick="format(\'italic\')"><i class="fa-solid fa-italic"></i></button> <button type="button" class="editor-button" onclick="format(\'insertUnorderedList\')"><i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="format(\'insertOrderedList\')"><i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-list-ul"></i></button> <select class="font-size-select ml-left-2em " onchange="changeFontSize.call(this,this.value)"> <option class="select-option" disabled selected value="">Font Size</option> <option class="select-option" value="1">Extra small</option> <option class="select-option"  value="2">Small</option> <option class="select-option" value="3">Normal</option> <option class="select-option" value="4">Large</option> <option class="select-option" value="5">Extra large</option> <option class="select-option" value="6">Huge</option> </select> </div> <div class="editor-container"> <button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button">Source Editor</button> <div class="output-panel"> <div class="output" oninput="outputHtmlRender.call(this)"  contenteditable="true">' +detail+'</div> </div> <div class="editor-panel"> <textarea  id="explanation_accordion[]" name="explanation_accordion[]" value="" class="html-input" style="display:none;" oninput="textHtmlRender.call(this)" placeholder="'+detail+'"> '+detail+'</textarea> </div> </div> </div>');
	actualIndex++;
		jQuery('.column-'+colNum+'>div:nth-child('+actualIndex+')').after('<div class="addnewnew text-center" data-column="'+colNum+'"><i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="addnewnew.call(this,'+colNum+',true,'+(index+1)+')"></i></div>');
index++;
			changePanelColor();changeTitleColor();changePanelColorBg();changeTitleColorBg();
			correctIndexes(index,colNum);correctIndexesDelete(colNum,index);
}
function correctIndexes(index,colNum){
	let column = document.querySelector('.column-' + colNum);
  let allbtns = column.querySelectorAll('.addnewnew[data-column="' + colNum + '"] > i');

let elementsAfterIndex = Array.from(allbtns).slice(index);

  elementsAfterIndex.forEach(function(element, i) {
    (function(index) {
      element.onclick = function() {
        addnewnew.call(this, colNum, true, (index));
      };
    })(index);
    index++;
  });
}
function handleYes(colNum,index){ 	
	jQuery('.error').remove();
	var popup = document.getElementById('popup');
	let actualIndex=(3*index);
	let	total= (jQuery('.column-'+colNum).children().length)-3;
	if(!(total>1) && index=="0"&& colNum==1){
		jQuery('.error').remove();
		jQuery('.column-1').children().eq(jQuery('.column-'+colNum).children().length-3).after('<div class="error ml-halfem" style="color:red;">Atleast 1 panel is required.</div>');
		popup.style.display='none';
	}
	 else{
			const col = document.querySelector('.column-' + colNum);
			let children = col.children;
			let childAtIndex = children[actualIndex];
			col.removeChild(childAtIndex);
			 childAtIndex = children[actualIndex];
			col.removeChild(childAtIndex);			 
			childAtIndex = children[actualIndex];
			col.removeChild(childAtIndex);
			correctIndexesDelete(colNum,index);correctIndexes(index,colNum);
			var buttonContainer = popup.querySelector('.button-container');
			buttonContainer.style.display='none';
			buttonContainer.previousElementSibling.style.display='none';
			let successM = popup.querySelector('.success-message');
			successM.querySelector(':nth-child(2)').innerHTML='Accordion panel deleted successfully!';
			popup.querySelector('.success-message').style.display='block';
			if(col.children.length===0){
				col.classList.add('d-none');
			}
		}
}
function correctIndexesDelete(colNum,index){
let column=document.querySelector('.column-'+colNum);
  let allbtns = column.querySelectorAll('div.accordion > span.fa-solid.fa-trash ');
let elementsAfterIndex = Array.from(allbtns).slice(index);
  elementsAfterIndex.forEach(function(element, i) {
    (function(index) {
   
      element.onclick = function() {
        addnewnew.call(this, colNum, false, (index));
      };
    })(index);
    index++;
  });
}
 function accordionDropdown() {
 	var dropdown = this.querySelector('.dropdown-accordion');
  	var dropdownContent = this.querySelector('.dropdown-acontent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
let icon=this.querySelector('.plummet');
	  	icon.classList.toggle('fa-caret-up');	
		  icon.classList.toggle('fa-caret-down');  toggleIconShow();
  }
  function closeDropdown(){  	
  	var dropdownContent = document.querySelector('.dropdown-acontent');
  	if (dropdownContent.style.display === 'block') {
		  dropdownContent.style.display = 'none';
		  let icon=dropdownContent.previousElementSibling.querySelector('.plummet');
		  icon.classList.remove('fa-caret-up');	
		  icon.classList.add('fa-caret-down');
		} 
    
  }
  function toggleIconShow(){
	  const iconsContainer = document.querySelector('.iconsContainer');
	  if(iconsContainer.classList.contains('show')){	  
	  	let icon=iconsContainer.previousElementSibling.querySelector('.vertical-up-down');
	  	icon.classList.remove('fa-caret-up');	
		  icon.classList.add('fa-caret-down');
		  iconsContainer.classList.remove('show');
		}

	}