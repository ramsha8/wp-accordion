
function addNewCol(){
	let down=document.querySelector('.fa-downClass').value;
let fs=document.querySelector('input[name="fa-fontsize"]').value;
let iconColor=document.querySelector('input[name="fa-iconColor"]').value;
var index = document.querySelectorAll('.openPopup > i').length;
		jQuery('.sec-col').toggleClass('d-none');
		if (jQuery('.sec-col').hasClass('d-none') ){
			jQuery('.sec-col').empty();
			jQuery('input[name=colum-1]').val("1");
		}
		else{
			jQuery('.sec-col').append('<div type="button" class="accordion title-text "> <textarea type="text" id="caption_accordion[]" name="caption_accordion[]" onChange="removeWhitespace(this)" placeholder="'+tStrings.heading+'">'+tStrings.heading+'</textarea><span class="fa-solid fa-trash cursor-pointer mt-5" onClick="openPopup.call(this,2,false,0)"></span><button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="accordToggle(this)"><i class="fa-solid color-white jump ml-1em '+down+'" style="font-size: '+fs+';color:'+iconColor+'" ></i></button></div>') ;
 			jQuery('.sec-col').append('<div class="panel"> <div class="editor-toolbar p-9-5" onClick="accordToggle(this,true)"> <div> <button type="button" class="editor-button" onclick="format(\'bold\')" > <i class="fa-solid fa-bold"></i></button> <button type="button" class="editor-button" onclick="format(\'italic\')"> <i class="fa-solid fa-italic"></i></button> <button type="button" class="editor-button" onclick="format(\'insertUnorderedList\')"> <i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="format(\'insertOrderedList\')"> <i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-list-ul"></i></button> <select class="font-size-select ml-left-2em " onchange="changeFontSize.call(this,this.value)"> <option class="select-option" disabled selected value="">'+tStrings.fontsize+'</option> <option class="select-option" value="1">'+tStrings.esmall+'</option> <option class="select-option"  value="2">'+tStrings.small+'</option> <option class="select-option" value="3">'+tStrings.normal+'</option> <option class="select-option" value="4">'+tStrings.large+'</option> <option class="select-option" value="5">'+tStrings.elarge+'</option> <option class="select-option" value="6">'+tStrings.huge+'</option> </select> <button type="button" onClick="sourceEditorClick.call(this)" class="editor-button">'+tStrings.sourceEditor+'</button></div> </div> <div class="editor-container"> <button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button d-none mt-0">'+tStrings.richTextEditor+'</button> <div class="output-panel"> <div class="output" oninput="outputHtmlRender.call(this)"  contenteditable="true">' +tStrings.detail+'</div> </div> <div class="editor-panel"> <textarea  id="explanation_accordion[]" name="explanation_accordion[]" value="" class="html-input" style="display:none;" oninput="textHtmlRender.call(this)" placeholder="'+tStrings.detail+'"> '+tStrings.detail+'</textarea> </div> </div> </div>');
 			jQuery('.column-2>div:nth-child(2)').after('<div class="openPopup text-center" data-column="2"><i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="openPopup.call(this,2,true,0)"></i></div>');
	
			jQuery('.sec-col').append('<div type="button" class="accordion title-text "> <textarea type="text" id="caption_accordion[]" name="caption_accordion[]" onChange="removeWhitespace(this)" placeholder="'+tStrings.heading+'">'+tStrings.heading+'</textarea><span class="fa-solid fa-trash cursor-pointer mt-5" onClick="openPopup.call(this,2,false,1)"></span><button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="accordToggle(this)"><i class="fa-solid color-white jump ml-1em  '+down+'" style="font-size: '+fs+';color:'+iconColor+'" ></i></button></div>') ;
			jQuery('.sec-col').append('<div class="panel"> <div class="editor-toolbar p-9-5" onClick="accordToggle(this,true)"> <div> <button type="button" class="editor-button" onclick="format(\'bold\')" > <i class="fa-solid fa-bold"></i></button> <button type="button" class="editor-button" onclick="format(\'italic\')"> <i class="fa-solid fa-italic"></i></button> <button type="button" class="editor-button" onclick="format(\'insertUnorderedList\')"> <i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="format(\'insertOrderedList\')"> <i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-list-ul"></i></button> <select class="font-size-select ml-left-2em " onchange="changeFontSize.call(this,this.value)"> <option class="select-option" disabled selected value="">'+tStrings.fontsize+'</option> <option class="select-option" value="1">'+tStrings.esmall+'</option> <option class="select-option"  value="2">'+tStrings.small+'</option> <option class="select-option" value="3">'+tStrings.normal+'</option> <option class="select-option" value="4">'+tStrings.large+'</option> <option class="select-option" value="5">'+tStrings.elarge+'</option> <option class="select-option" value="6">'+tStrings.huge+'</option> </select> <button type="button" onClick="sourceEditorClick.call(this)" class="editor-button">'+tStrings.sourceEditor+'</button></div> </div> <div class="editor-container"> <button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button d-none mt-0">'+tStrings.richTextEditor+'</button> <div class="output-panel"> <div class="output" oninput="outputHtmlRender.call(this)"  contenteditable="true">' +tStrings.detail+'</div> </div> <div class="editor-panel"> <textarea  id="explanation_accordion[]" name="explanation_accordion[]" value="" class="html-input" style="display:none;" oninput="textHtmlRender.call(this)" placeholder="'+tStrings.detail+'"> '+tStrings.detail+'</textarea> </div> </div> </div>');			
			jQuery('.column-2>div:nth-child(5)').after('<div class="openPopup text-center" data-column="2"><i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="openPopup.call(this,2,true,1)"></i></div>');
	
			jQuery('.sec-col').append('<div type="button" class="accordion title-text "> <textarea type="text" id="caption_accordion[]" name="caption_accordion[]" onChange="removeWhitespace(this)" placeholder="'+tStrings.heading+'">'+tStrings.heading+'</textarea><span class="fa-solid fa-trash cursor-pointer mt-5" onClick="openPopup.call(this,2,false,2)"></span><button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="accordToggle(this)"><i class="fa-solid color-white jump ml-1em  '+down+'" style="font-size: '+fs+';color:'+iconColor+'"></i></button></div>') ;
			jQuery('.sec-col').append('<div class="panel"> <div class="editor-toolbar p-9-5" onClick="accordToggle(this,true)"> <div> <button type="button" class="editor-button" onclick="format(\'bold\')" > <i class="fa-solid fa-bold"></i></button> <button type="button" class="editor-button" onclick="format(\'italic\')"> <i class="fa-solid fa-italic"></i></button> <button type="button" class="editor-button" onclick="format(\'insertUnorderedList\')"> <i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="format(\'insertOrderedList\')"> <i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-list-ul"></i></button> <select class="font-size-select ml-left-2em " onchange="changeFontSize.call(this,this.value)"> <option class="select-option" disabled selected value="">'+tStrings.fontsize+'</option> <option class="select-option" value="1">'+tStrings.esmall+'</option> <option class="select-option"  value="2">'+tStrings.small+'</option> <option class="select-option" value="3">'+tStrings.normal+'</option> <option class="select-option" value="4">'+tStrings.large+'</option> <option class="select-option" value="5">'+tStrings.elarge+'</option> <option class="select-option" value="6">'+tStrings.huge+'</option> </select> <button type="button" onClick="sourceEditorClick.call(this)" class="editor-button">'+tStrings.sourceEditor+'</button></div> </div> <div class="editor-container"> <button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button d-none mt-0">'+tStrings.richTextEditor+'</button> <div class="output-panel"> <div class="output" oninput="outputHtmlRender.call(this)"  contenteditable="true">' +tStrings.detail+'</div> </div> <div class="editor-panel"> <textarea  id="explanation_accordion[]" name="explanation_accordion[]" value="" class="html-input" style="display:none;" oninput="textHtmlRender.call(this)" placeholder="'+tStrings.detail+'"> '+tStrings.detail+'</textarea> </div> </div> </div>');	
			jQuery('.column-2>div:nth-child(8)').after('<div class="openPopup text-center" data-column="2"><i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="openPopup.call(this,2,true,2)"></i></div>');
			
	 		jQuery('input[name=colum-1]').val("0");
	}
		changePanelColor();changeTitleColor();changePanelColorBg();changeTitleColorBg();
}

function changeAccordColor(id){
	event.stopPropagation();
	jQuery(id).click();
}

function changeTitleColorBg(){
jQuery('.accordion').css("background-color",jQuery('#titlebg').val());
jQuery('.accordion>textarea').css("background-color",jQuery('#titlebg').val());

}

function changePanelColorBg(){
jQuery('.panel').css("background-color",jQuery('#panelbg').val());
jQuery('.panel textarea').css("background-color",jQuery('#panelbg').val());
}

function changeTitleColor(){		
	jQuery('.accordion>textarea').css("color",jQuery('#titlecolor').val());
}

function changePanelColor(){
	jQuery('.panel textarea').css("color",jQuery('#panelcolor').val());
	jQuery('.panel').css("color",jQuery('#panelcolor').val());
}

function clipboard(){
 var copyText = jQuery(".result-shortcode");  
 copyText.select();
 navigator.clipboard.writeText(copyText.text());
 copyText.blur();
 jQuery('.tooltiptext').text(tStrings.copied);
  setTimeout(()=>jQuery('.tooltiptext').text(tStrings.copytoClipboard), 3000 );

}
function accordToggle(el){
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
			jQuery('.column-1').append('<span class="error" style="color:red;">'+tStrings.errorMsg+'</span>');
		}
	}
}


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
  var url = prompt(tStrings.addURL,"https://");
  if (url) {
    format("createLink", url);
  }
}


// Toggle the visibility of the panels when the button is clicked
function toggleButtonfunc() {
this.classList.add('d-none');
this.parentNode.previousElementSibling.style.display='block';

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
	popup.querySelector('h1').innerHTML=tStrings.accIconUpdatedTitle;
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
	if(customClass){popupcss.querySelector('h1').innerHTML=tStrings.addCustomClasses;
popupcss.querySelector('input[name="custom_class"]').style.display='block';
popupcss.querySelector('textarea[name="adjustcss"]').style.display='none';

	}
  else {popupcss.querySelector('h1').innerHTML= tStrings.addCustomCSS;
popupcss.querySelector('input[name="custom_class"]').style.display='none';
popupcss.querySelector('textarea[name="adjustcss"]').style.display='block';

  }

}
function closeCss(){
	document.querySelector('.popupcss').style.display='none';

}

function openPopup(colNum,add=false,index){ 
var popup= document.getElementById("popup");
   popup.querySelector('.success-icon').style.display='none';
if(add){
	popup.querySelector('h1').innerHTML=tStrings.addAcc;
	popup.querySelector('p').innerHTML=tStrings.addAcc2;
	popup.querySelector('.popup-yes').onclick=function() {addPanelIndex(colNum,index);}
}
else{
		popup.querySelector('h1').innerHTML=tStrings.delAcc;
	popup.querySelector('p').innerHTML=tStrings.delAcc2;	
	popup.querySelector('.popup-yes').onclick=function() {
  handleDelete(colNum,index);
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
	 addRichTextEditor(colNum,index);

 }
 function addRichTextEditor(colNum,index=false){
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
	successM.querySelector(':nth-child(2)').innerHTML=tStrings.accPanelAdd;
	let icon=document.querySelector('input.fa-downClass').value;
	let color=document.querySelector('input[name="fa-iconColor"]').value;
	let size=document.querySelector('input[name="fa-fontsize"]').value;

		jQuery('.column-'+colNum+'>div:nth-child('+actualIndex+')').after('<div class="accordion title-text" > <textarea type="text" oninput="verticalHeight.call(this)" placeholder="'+tStrings.heading+'" onChange="removeWhitespace(this)" id="caption_accordion[]" name="caption_accordion[]" >'+tStrings.heading+'</textarea><span class="mt-5 fa-solid fa-trash cursor-pointer" onClick="openPopup.call(this,'+colNum+',false,'+index+')"></span> <button type="button" class="b-none border-none cursor-pointer mr-halfem" onClick="accordToggle(this)"> <i class="fa-solid color-white jump ml-1em '+icon+'" style="color:'+color+';font-size:'+size+';"></i></button> </div>');
			actualIndex++;
jQuery('.column-'+colNum+'>div:nth-child('+actualIndex+')').after ('<div class="panel"> <div class="editor-toolbar p-9-5"> <div> <button type="button" class="editor-button" onclick="format(\'bold\')" > <i class="fa-solid fa-bold"></i></button> <button type="button" class="editor-button" onclick="format(\'italic\')"><i class="fa-solid fa-italic"></i></button> <button type="button" class="editor-button" onclick="format(\'insertUnorderedList\')"><i class="fa-solid fa-list-ul"></i> </button> <button type="button" class="editor-button" onclick="format(\'insertOrderedList\')"> <i class="fa-solid fa-list-ul"></i></button> <button type="button" class="editor-button" onclick="insertLink()"><i class="fa-solid fa-list-ul"></i></button> <select class="font-size-select ml-left-2em " onchange="changeFontSize.call(this,this.value)"> <option class="select-option" disabled selected value="">Font Size</option> <option class="select-option" value="1">Extra small</option> <option class="select-option"  value="2">Small</option> <option class="select-option" value="3">Normal</option> <option class="select-option" value="4">Large</option> <option class="select-option" value="5">Extra large</option> <option class="select-option" value="6">Huge</option> </select> <button type="button" onClick="sourceEditorClick.call(this)" class="editor-button">Source Editor</button> </div> </div><div class="editor-container"> <button type="button" onClick="toggleButtonfunc.call(this)" class="toggle-button d-none mt-0">Rich Text Editor</button> <div class="output-panel"> <div class="output" oninput="outputHtmlRender.call(this)" contenteditable="true">' +tStrings.detail+'</div> </div> <div class="editor-panel"> <textarea  id="explanation_accordion[]" name="explanation_accordion[]" value="" class="html-input" style="display:none;" oninput="textHtmlRender.call(this)" placeholder="'+tStrings.detail+'"> '+tStrings.detail+'</textarea> </div> </div> </div>');
actualIndex++;
		jQuery('.column-'+colNum+'>div:nth-child('+actualIndex+')').after('<div class="openPopup text-center" data-column="'+colNum+'"><i class="fa-solid fa-circle-plus fs-16px mt-5 cursor-pointer" onclick="openPopup.call(this,'+colNum+',true,'+(index+1)+')"></i></div>');
index++;
			changePanelColor();changeTitleColor();changePanelColorBg();changeTitleColorBg();
			correctIndexes(index,colNum);correctIndexesDelete(colNum,index);
}
function correctIndexes(index,colNum){
	let column = document.querySelector('.column-' + colNum);
  let allbtns = column.querySelectorAll('.openPopup[data-column="' + colNum + '"] > i');

let elementsAfterIndex = Array.from(allbtns).slice(index);

  elementsAfterIndex.forEach(function(element, i) {
    (function(index) {
      element.onclick = function() {
        openPopup.call(this, colNum, true, (index));
      };
    })(index);
    index++;
  });
}
function handleDelete(colNum,index){ 	
	jQuery('.error').remove();
	var popup = document.getElementById('popup');
	let actualIndex=(3*index);
	let	total= (jQuery('.column-'+colNum).children().length)-3;
	if(!(total>1) && index=="0"&& colNum==1){
		jQuery('.error').remove();
		jQuery('.column-1').children().eq(jQuery('.column-'+colNum).children().length-3).after('<div class="error ml-halfem" style="color:red;">'+tStrings.errorMsg+'</div>');
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
			successM.querySelector(':nth-child(2)').innerHTML=tStrings.accPanelDel;
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
        openPopup.call(this, colNum, false, (index));
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
	function mobileMenu(){ let nextElement=jQuery(this).next();
let css=nextElement.css('display');
		if( css==='block'){ 
			nextElement.css('display','none');
		}
		else{
		 nextElement.css('display','block');
		}
	}
function sourceEditorClick() {
  var grandparentNode = this.parentNode.parentNode;
  grandparentNode.style.display = 'none';
  grandparentNode.nextElementSibling.style.display = 'block';
  if (grandparentNode && grandparentNode.nextElementSibling && grandparentNode.nextElementSibling.firstElementChild) {
    var buttonElement = grandparentNode.nextElementSibling.querySelector('button.toggle-button');

    if (buttonElement) {
      buttonElement.classList.remove('d-none')
    }
  }
}