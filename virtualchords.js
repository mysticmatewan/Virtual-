var myvari = ""
var myvarb = ""
var ips = 0
var incr2= 0

if (document.images) {
  var blank = new Image()
  blank.src = "http://www.piano-play-it.com/images/vpcblank.gif"

  var select = new Image()
  select.src = "http://www.piano-play-it.com/images/vpcselect.gif"

  var scalfil = new Image()
  scalfil.src = "http://www.piano-play-it.com/images/vpcscalfil.gif"

  var black = new Image()
  black.src = "http://www.piano-play-it.com/images/vpcblack.gif"

}

function go() {
ips = 0
	if (document.keyform.cordscal[0].checked == 1) {
		x = document.keyform.formula.options.selectedIndex;
		chordcode = document.keyform.formula.options[x].value;
	dispch(chordcode);
        myvari = chordcode
        myvarb = chordcode
	}
	else if (document.keyform.cordscal[1].checked == 1) {
	scalecalc();
	}
	else if (document.keyform.cordscal[2].checked == 1) {
			if (document.keyform.notesnum[2].checked == 1) {
			scalecalc();
			}
			else {
                        ConvertInput();
			dispch(chordcode);
                        myvari = chordcode
                        myvarb = chordcode
			}
	}

}

function dispch(formulatext) {

z = document.keyform.root.options.selectedIndex;
root = document.keyform.root.options[z].value;

if (document.keyform.notesnum[2].checked != 1) {
	if (formulatext.charAt(0) != "1") {
	userinput = document.keyform.forminput.value;
		if (document.keyform.cordscal[2].checked == 1) {
				if (userinput.charAt(0) != "1") {
				a = Number.NaN
				}
		}
		else {
		a = parseFloat(root) + 12
		}
	}
	else {
	a = Number.NaN
	}
}
formstring = ""
inact();

playnote(a);

if (document.keyform.cordscal[2].checked == 1) {
	if (document.keyform.notesnum[1].checked != 1) {
		a = parseFloat(root) + 12
	}
	else {
			a = 13
	}
}
else {
	a = parseFloat(root) + 12
}

b = 0

d = formulatext.length / 2

for (var i = 0; i < d; i++) {
b = formulatext.indexOf(",")
myvar = parseFloat(formulatext.substring(0, b)) + a - 1
playnote(myvar);
formulatext = formulatext.substring(b + 1 , formulatext.length)
}

dispstring = formstring.substring(0, (formstring.length - 1));
document.keyform.formdisp.value = dispstring;
}

function playnote(note) {
  if (document.images){
	  if (note == 1){
	  playkey(1)
	  formstring = formstring + 'C,'
	  }
	  if (note == 2){
	  playsharp(1)
	  formstring = formstring + 'C#,'
	  }
	  if (note == 3){
	  formstring = formstring + 'D,'
	  playkey(2)
	  }
	  if (note == 4){
	  formstring = formstring + 'Eb,'
	  playsharp(2)
	  }
	  if (note == 5){
	  formstring = formstring + 'E,'
	  playkey(3)
	  }
	  if (note == 6){
	  formstring = formstring + 'F,'
	  playkey(4)
	  }
	  if (note == 7){
	  playsharp(3)
	  }
	  if (note == 8){
	  formstring = formstring + 'G,'
	  playkey(5)
	  }
	  if (note == 9){
	  formstring = formstring + 'G#,'
	  playsharp(4)
	  }
	  if (note == 10){
	  formstring = formstring + 'A,'
	  playkey(6)
	  }
	  if (note == 11){
	  formstring = formstring + 'A#,'
	  playsharp(5)
	  }
	  if (note == 12){
	  formstring = formstring + 'B,'
	  playkey(7)
	  }
	  if (note == 13){
	  formstring = formstring + 'C,'
	  playkey(8)
	  }
	  if (note == 14){
	  formstring = formstring + 'C#,'
	  playsharp(6)
	  }
	  if (note == 15){
	  formstring = formstring + 'D,'
	  playkey(9)
	  }
	  if (note == 16){
	  formstring = formstring + 'Eb,'
	  playsharp(7)
	  }
	  if (note == 17){
	  formstring = formstring + 'E,'
	  playkey(10)
	  }
	  if (note == 18){
	  formstring = formstring + 'F,'
	  playkey(11)
	  }
	  if (note == 19){
	  formstring = formstring + 'F#,'
	  playsharp(8)
	  }
	  if (note == 20){
	  formstring = formstring + 'G,'
	  playkey(12)
	  }
	  if (note == 21){
	  formstring = formstring + 'G#,'
	  playsharp(9)
	  }
	  if (note == 22){
	  formstring = formstring + 'A,'
	  playkey(13)
	  }
	  if (note == 23){
	  formstring = formstring + 'A#,'
	  playsharp(10)
	  }
	  if (note == 24){
	  formstring = formstring + 'B,'
	  playkey(14)
	  }
	  if (note == 25){
	  formstring = formstring + 'C,'
	  playkey(15)
	  }
	  if (note == 26){
	  formstring = formstring + 'C#,'
	  playsharp(11)
	  }
	  if (note == 27){
	  formstring = formstring + 'D,'
	  playkey(16)
	  }
	  if (note == 28){
	  formstring = formstring + 'Eb,'
	  playsharp(12)
	  }
	  if (note == 29){
	  formstring = formstring + 'E,'
	  playkey(17)
	  }
	  if (note == 30){
	  formstring = formstring + 'F,'
	  playkey(18)
	  }
	  if (note == 31){
	  formstring = formstring + 'F#,'
	  playsharp(13)
	  }
	  if (note == 32){
	  formstring = formstring + 'G,'
	  playkey(19)
	  }
	  if (note == 33){
	  formstring = formstring + 'G#,'
	  playsharp(14)
	  }
	  if (note == 34){
	  formstring = formstring + 'A,'
	  playkey(20)
	  }
	  if (note == 35){
	  formstring = formstring + 'A#,'
	  playsharp(15)
	  }
	  if (note == 36){
	  formstring = formstring + 'B'
	  playkey(21)
	  }
   }
}

function playkey(note){
	if (document.keyform.cordscal[1].checked == 1) {
	  document.images['t' + note +''].src = eval('scalfil.src')
	  document.images['m' + note +''].src = eval('scalfil.src')
	  document.images['b' + note +''].src = eval('scalfil.src')
	}
        else if (document.keyform.cordscal[2].checked == 1) {
             if (document.keyform.notesnum[2].checked == 1) {
              document.images['t' + note +''].src = eval('scalfil.src')
	      document.images['m' + note +''].src = eval('scalfil.src')
	      document.images['b' + note +''].src = eval('scalfil.src')  
             }
             else {
	      document.images['t' + note +''].src = eval('select.src')
	      document.images['m' + note +''].src = eval('select.src')
	      document.images['b' + note +''].src = eval('select.src')    
             }
        }
        else {
	      document.images['t' + note +''].src = eval('select.src')
	      document.images['m' + note +''].src = eval('select.src')
	      document.images['b' + note +''].src = eval('select.src')    
        }
}

function playsharp(note){
	if (document.keyform.cordscal[1].checked == 1) {
	  document.images['s' + note +'b1'].src = eval('scalfil.src')
	  document.images['s' + note +'b2'].src = eval('scalfil.src')
	  document.images['s' + note +'b3'].src = eval('scalfil.src')
	}
        else if (document.keyform.cordscal[2].checked == 1) {
             if (document.keyform.notesnum[2].checked == 1) {
              document.images['s' + note +'b1'].src = eval('scalfil.src')
              document.images['s' + note +'b2'].src = eval('scalfil.src')
	      document.images['s' + note +'b3'].src = eval('scalfil.src')
              }
             else {
	      document.images['s' + note +'b1'].src = eval('select.src')
	      document.images['s' + note +'b2'].src = eval('select.src')
              document.images['s' + note +'b3'].src = eval('select.src')
             }
        }
             else {
	      document.images['s' + note +'b1'].src = eval('select.src')
	      document.images['s' + note +'b2'].src = eval('select.src')
              document.images['s' + note +'b3'].src = eval('select.src')
             }

}

function inact() {
  if (document.images){
	for (var i = 1; i < 22; i++) {
		if (document.images['t' + i +''].src != blank.src) {
	  document.images['t' + i +''].src = eval('blank.src')
	  document.images['m' + i +''].src = eval('blank.src')
	  document.images['b' + i +''].src = eval('blank.src')
		}
	}
	for (var i = 1; i < 16; i++) {
		if (document.images['s' + i +'b1'].src != black.src) {
	  document.images['s' + i +'b1'].src = eval('black.src')
	  document.images['s' + i +'b2'].src = eval('black.src')
	  document.images['s' + i +'b3'].src = eval('black.src')
		}
	}

   }
}

function ConvertInput() {

formulastring = ""

userinput = document.keyform.forminput.value;

	if (userinput.indexOf(",", 0) != -1) {
		if (userinput.charAt(userinput.length - 1) != ",") {
			userinput = userinput + ",";
		}

	getValue(userinput);

	}
	else {
		error();
	}
	chordcode = formulastring + ","
dispch(chordcode);
}

function error() {
alert ("You did not enter the formula correctly");
}

function getValue(inputvar) {
	if (inputvar.indexOf(",", 0) != -1) {
		value = inputvar.substring(0, inputvar.indexOf(",", 0))
		valueb = inputvar.substring((inputvar.indexOf(",", 0) + 1), inputvar.length)
		changeValue(value);
		getValue(valueb)
	}
}

function changeValue(value) {
	if (value.length != 1) {
		if (value.indexOf("b", 0) != -1) {
		comp = -1
		}
		else if (value.indexOf("#", 0) != -1) {
		comp = 1
		}
	}
	else {
	   comp = 0
	}

if (document.keyform.notesnum[0].checked == 1) {
   if (value.length <= 2) {
	if (value.indexOf("1", 0) != -1) {
		if (value.indexOf("10", 0) != -1) {
		keypress = 17 + comp
		formulastring = formulastring + keypress + ",";
		}
		else if (value.indexOf("11", 0) != -1) {
		keypress = 18 + comp
		formulastring = formulastring + keypress + ",";
		}
		else if (value.indexOf("12", 0) != -1) {
		keypress = 20 + comp
		formulastring = formulastring + keypress + ",";
		}
		else if (value.indexOf("13", 0) != -1) {
		keypress = 21 + comp
		formulastring = formulastring + keypress + ",";
		}
		else {
		keypress = 1 + comp
		formulastring = formulastring + keypress + ",";
		}
	}
	else if (value.indexOf("2", 0) != -1) {
	keypress = 3 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("3", 0) != -1) {
	keypress = 5 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("4", 0) != -1) {
	keypress = 6 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("5", 0) != -1) {
	keypress = 8 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("6", 0) != -1) {
	keypress = 10 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("7", 0) != -1) {
	keypress = 12 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("8", 0) != -1) {
	keypress = 13 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("9", 0) != -1) {
	keypress = 15 + comp
	formulastring = formulastring + keypress + ",";
	}
   }
}
else {
	a = 0
	if (value.indexOf("1", 0) != -1) {
	a = a - 12
	}
	else if (value.indexOf("3", 0) != -1) {
	a = a + 12
	}
	comp= comp + a
	if (value.indexOf("C", 0) != -1) {
	keypress = 1 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("D", 0) != -1) {
	keypress = 3 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("E", 0) != -1) {
	keypress = 5 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("F", 0) != -1) {
	keypress = 6 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("G", 0) != -1) {
	keypress = 8 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("A", 0) != -1) {
	keypress = 10 + comp
	formulastring = formulastring + keypress + ",";
	}
	else if (value.indexOf("B", 0) != -1) {
	keypress = 12 + comp
	formulastring = formulastring + keypress + ",";
	}
	comp = 0
}
}

function openhelp() {
  remote = window.open("help.html","remotewin","width=350,height=400,scrollbars=yes");
}

function scalecalc(){

scaletext = "";
scaletext1 = "";
scaletext2 = "";
scaletext3 = "";

u = 1
t = 0
i = 0

if (document.keyform.cordscal[1].checked == 1) {
x = document.keyform.scale.options.selectedIndex;
scalevalue = document.keyform.scale.options[x].value.toUpperCase()
}
else if (document.keyform.cordscal[2].checked == 1) {
		if (document.keyform.notesnum[2].checked == 1) {
		scalevalue = document.keyform.forminput.value.toUpperCase()
		}
		else {
		scalevalue = document.keyform.forminput.value.toUpperCase()
		}
}

for (var y = 0; y < scalevalue.length; y++) {
	if (scalevalue.charAt(y) == "1") {
	t = 1 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
	else if (scalevalue.charAt(y) == "2") {
	t = 2 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
	else if (scalevalue.charAt(y) == "3") {
	t = 3 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
	else if (scalevalue.charAt(y) == "4") {
	t = 4 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
	else if (scalevalue.charAt(y) == "5") {
	t = 5 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
	else if (scalevalue.charAt(y) == "6") {
	t = 6 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
	else if (scalevalue.charAt(y) == "7") {
	t = 7 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
	else if (scalevalue.charAt(y) == "8") {
	t = 8 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
	else if (scalevalue.charAt(y) == "9") {
	t = 9 + u
	scaletext = scaletext +  t + ",";
       	scaletext1 = scaletext1 +  (t - 12) + ",";
       	scaletext2 = scaletext2 +  (t + 12) + ",";
       	scaletext3 = scaletext3 +  (t - 24) + ",";
	}
u = t
}

if (document.keyform.lingerscal.checked == 1) {
totalscale =  scaletext + scaletext1 + scaletext3 + scaletext2 
}
else {
totalscale = scaletext
}
dispch(totalscale);
}

function inverter() {
ndums = (ips*2) + incr2
      if (ndums >= myvarb.length) {
      ndums = 0
      ips = -1
      myvari = myvarb
      incr2= 0
      }
      else {
           if (myvarb.charAt(ndums +1) != ","){
              chartf = myvarb.substring(ndums, (myvarb.indexOf(",")+ ndums +1))
              incr = 2
              incr2= 1
           }
           else {
              chartf = myvarb.substring(ndums, (myvarb.indexOf(",")+ ndums))
              incr = 1
              incr2= 0
           }
           tochange = parseFloat(chartf) 
           myvari = myvarb.substring(0, ndums) + (tochange - 12) + myvarb.substring((ndums + incr), myvarb.length)
      }
dispch(myvari);
ips ++
}
