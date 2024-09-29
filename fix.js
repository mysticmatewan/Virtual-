var FIX=FIX||{};FIX.addEventListener=function(el,type,callback){if(typeof el.addEventListener==='function'){el.addEventListener(type,callback,false);}else if(typeof el.attachEvent==='object'&&el.attachEvent!==null){el.attachEvent('on'+type,callback);}};FIX.pageWrapperHeight=0;FIX.designMode="";FIX.passwordProtection="none";FIX.getBoxPropertyValue=function(el,property){var camelProperties={'padding-top':'paddingTop','padding-right':'paddingRight','padding-bottom':'paddingBottom','padding-left':'paddingLeft','border-top-width':'borderTopWidth','border-right-width':'borderRightWidth','border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':'marginTop','margin-right':'marginRight','margin-bottom':'marginBottom','margin-left':'marginLeft'};if(!camelProperties[property]){throw new Error('FIX unknown property "'+property+'".');}var styleValue='';if(typeof window.getComputedStyle==='function'){styleValue=parseInt(window.getComputedStyle(el,null).getPropertyValue(property),10);}else if(typeof el.currentStyle==='object'&&el.currentStyle!==null){styleValue=parseInt(el.currentStyle[camelProperties[property]],10);}if(isNaN(styleValue)){styleValue=0;}return styleValue;};FIX.findLiner=function(parentId){var parent=document.getElementById(parentId);if(!parent){return;}var el=parent.firstChild;while(el){if(/(^|\s)Liner(\s|$)/.test(el.className)){return el;}el=el.nextSibling;}};FIX.isImageBlockImage=function(img){var el=img;while(el){if(/(^|\s)ImageBlock(\s|$)/.test(el.className)){return true;}else if(/(^|\s)Liner(\s|$)/.test(el.className)){return false;}el=el.parentNode;}return false;};FIX.computeHeightForLiner=function(el,height){var verticalPadding=FIX.getBoxPropertyValue(el,'padding-top')+FIX.getBoxPropertyValue(el,'padding-bottom');var verticalBorder=FIX.getBoxPropertyValue(el,'border-top-width')+FIX.getBoxPropertyValue(el,'border-bottom-width');var topMargin=FIX.getBoxPropertyValue(el,'margin-top');return height-verticalPadding-verticalBorder-topMargin;};FIX.computeAvailableWidth=function(el){var horizontalPadding=FIX.getBoxPropertyValue(el,'padding-left')+FIX.getBoxPropertyValue(el,'padding-right');return el.clientWidth-horizontalPadding;};FIX.computeTotalWidth=function(el,availableWidth){var horizontalPadding=FIX.getBoxPropertyValue(el,'padding-left')+FIX.getBoxPropertyValue(el,'padding-right');var horizontalBorder=FIX.getBoxPropertyValue(el,'border-left-width')+FIX.getBoxPropertyValue(el,'border-right-width');var horizontalMargin=FIX.getBoxPropertyValue(el,'margin-left')+FIX.getBoxPropertyValue(el,'margin-right');if(horizontalMargin===(availableWidth-el.width-horizontalBorder)){horizontalMargin=0;}return el.width+horizontalPadding+horizontalMargin+horizontalBorder;};FIX.fixLiners=function(){var pageWrapper=document.getElementById('PageWrapper');var ids=['ContentColumn','NavColumn','ExtraColumn'];var highestLinerHeight=0;var liners=[];var id;var liner;var i,ilen;var linerNewHeight;for(i=0,ilen=ids.length;i<ilen;i++){id=ids[i];liner=FIX.findLiner(id);if(liner){var linerTopMargin=FIX.getBoxPropertyValue(liner,'margin-top');var linerHeight=liner.offsetHeight+linerTopMargin;liners.push(liner);if(linerHeight>highestLinerHeight){highestLinerHeight=linerHeight;}}}for(i=0,ilen=liners.length;i<ilen;i++){liner=liners[i];if(liner){linerNewHeight=FIX.computeHeightForLiner(liner,highestLinerHeight);if(linerNewHeight>0){linerNewHeight=linerNewHeight+'px';if(typeof document.body.style.maxHeight==="undefined"){liner.style.height=linerNewHeight;}else{liner.style.minHeight=linerNewHeight;}}}}FIX.pageWrapperHeight=pageWrapper.offsetHeight;};FIX.getColumnsBlockColumn=function(image){var el=image.parentNode;var columnsBlock=false;while(el){if(/(^|\s)columns_block(\s|$)/.test(el.className)){columnsBlock=true;break;}else if(/(^|\s)Liner(\s|$)/.test(el.className)){return false;}el=el.parentNode;}el=image.parentNode;while(el){if(el.tagName==="TD"){return el;}el=el.parentNode;}return false;};FIX.imageResizer=function(image,maxWidth){var imgTotalWidth;image.style.display="";imgTotalWidth=FIX.computeTotalWidth(image,maxWidth);if(imgTotalWidth>maxWidth){image.width=(image.width-(imgTotalWidth-maxWidth));image.style.height="auto";if(FIX.designMode==="legacy"){if(typeof MOBILE==='undefined'||MOBILE.viewMode!=='mobile'){FIX.fixLiners();}}}};FIX.fixImgs=function(){var ids;var id;var liners=[];var liner;var availableWidth=0;var i,ilen;var images;var image;if(FIX.passwordProtection==="on"){ids=['NavColumn','ExtraColumn','Header','Footer'];}else if(FIX.passwordProtection==="off"){ids=['ContentColumn'];var styleContent='#ContentColumn .ImageBlock img { display: none; }';var head=document.getElementsByTagName("head")[0];var style=document.createElement("style");style.setAttribute('type','text/css');style.setAttribute('id','hideImgs');if(style.styleSheet){style.styleSheet.cssText=styleContent;}else{style.appendChild(document.createTextNode(styleContent));}head.appendChild(style);}else{ids=['ContentColumn','NavColumn','ExtraColumn','Header','Footer'];}var hideImgsStyle=document.getElementById("hideImgs");for(i=0,ilen=ids.length;i<ilen;i++){id=ids[i];liner=FIX.findLiner(id);if(liner){liners.push({element:liner,availableWidth:FIX.computeAvailableWidth(liner),images:liner.getElementsByTagName("img")});}}if(hideImgsStyle){hideImgsStyle.parentNode.removeChild(hideImgsStyle);}for(i=0,ilen=liners.length;i<ilen;i++){images=liners[i].images;for(var j=0,jlen=images.length;j<jlen;j++){image=images[j];if(FIX.isImageBlockImage(image)){image.style.display="none";}}}for(i=0,ilen=liners.length;i<ilen;i++){images=liners[i].images;for(j=0,jlen=images.length;j<jlen;j++){image=images[j];if(FIX.isImageBlockImage(image)){var columnsBlockColumn=FIX.getColumnsBlockColumn(image);if(columnsBlockColumn){availableWidth=columnsBlockColumn.offsetWidth;}else{availableWidth=liners[i].availableWidth;}image.style.display="block";image.style.maxWidth="none";(function(img,width){if(img.complete){FIX.imageResizer(img,width);}else{image.style.display="none";img.onload=function(){FIX.imageResizer(img,width);}}FIX.addEventListener(window,'load',function(){FIX.imageResizer(img,width);});}(image,availableWidth));}}}};FIX.scrollIntoViewHash=function(){var el=document.getElementById(window.location.hash.replace("#",""));if(el){setTimeout(function(){el.scrollIntoView(true);},500);}};FIX.doEndOfHead=function(){document.write('<style id="hideImgs" type="text/css">#PageWrapper .ImageBlock img { display: none; }</style>');};FIX.doEndOfBody=function(){var pageWrapper=document.getElementById('PageWrapper');if(!pageWrapper){return;}var startLoop=function(){var counter=0;var max=120;var delay=500;var loop=function(){counter++;if(counter>max){return;}pageWrapper=document.getElementById('PageWrapper');if(pageWrapper.offsetHeight!==FIX.pageWrapperHeight){FIX.fixLiners();}setTimeout(function(){loop();},delay);};loop();};FIX.fixImgs();if(window.location.hash){FIX.addEventListener(window,'load',FIX.scrollIntoViewHash);}if(FIX.designMode==="legacy"){if(typeof MOBILE==='undefined'||MOBILE.viewMode!=='mobile'){FIX.fixLiners();if(document.readyState==="complete"){startLoop();}else{FIX.addEventListener(window,'load',startLoop);}}}};FIX.track=function(anchorEl){if(/sbi[^.]+.?\.sitesell\.com/.test(window.location.href)){return true;}else{var anchorElHref=/href="(.*?)"/g.exec(anchorEl.outerHTML)[1];var path=anchorElHref.split("/").slice(3).join("/");var matches=anchorElHref.match(/^https?\:\/\/([^\/]+)/);var thisDomain=window.location.hostname.replace(/^www\./,"");if(matches&&(thisDomain!==matches[1].substr(-thisDomain.length))&&(!/google/.test(matches[1]))&&(!/\.mp4|\.avi|\.css|\.doc|\.docx|\.dot|\.dotx|\.exe|\.flv|\.gif|\.jpeg|\.jpg|\.js|\.mov|\.mp3|\.mp4|\.mpeg|\.mpg|\.pdf|\.png|\.potx|\.pps|\.ppsx|\.ppt|\.pptx|\.qt|\.ra|\.ram|\.rm|\.swf|\.tex|\.txt|\.wav|\.wma|\.wmv|\.xls|\.xlsx|\.xlt|\.xltx|\.xml|\.zip/.test(path))){var url='/cgi-bin/counter.pl?url='+encodeURIComponent(anchorElHref)+'&referrer='+encodeURIComponent(window.location);if(anchorEl.target.toLowerCase()==='_blank'){window.open(url);}else{window.location.href=url;}return false;}else{return true;}}};var getMsg=(function(){var original=getMsg;return function(form){var result=original(form);if(document.getElementById('ProtectedContent').style.display==='block'){FIX.passwordProtection="off";FIX.doEndOfBody();}return result;};}());if('ab'.substr(-1)!='b'){String.prototype.substr=function(substr){return function(start,length){if(start<0)start=this.length+start;return substr.call(this,start,length);}}(String.prototype.substr);}
