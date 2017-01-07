const text = '[i][/i][b][/b]<br><br>This is a test, all html tags<br>should not workin<br>g';
//const text = 'This is a [i]test[/i], all html tags should <b>not</b> working';
//const text = 'This is a [b]test[/b], all html tags should <b>not</b> working';

document.getElementById("btnSubmit").addEventListener("click", function(){

	if(isB(text) && !isI(text)) {
		onlyB(text);
	} else if(!isB(text) && isI(text)) {
		onlyI(text);
	} else if(isB(text) && isI(text)) {
		bAndI(text);
	} else {
		addText(text);
	}
});

function addText(text) {
	const part = document.createTextNode(text);
	document.getElementById("main").appendChild(part);
}

function addElement(text, type) {
	var element = document.createElement(type);
	var part = document.createTextNode(text);
	element.appendChild(part);
	document.getElementById("main").appendChild(element);
}

function addElementBr() {
	var element = document.createElement('br');
	document.getElementById("main").appendChild(element);
}

function test(text) {
	console.log(text);
}

function isB(text) {
	return text.includes('[b]') && text.includes('[/b]');
}

function isI(text) {
	return text.includes('[i]') && text.includes('[/i]');
}

function bAndI(text) {
	let allText = text;
	let beg, end = 0;
	let part = ''; 

	beg = allText.indexOf('<br>');
	part = allText.slice(0, beg);
	addText(part);
	allText = allText.slice(beg, allText.length);

	while(allText.includes('<br>')) {

		beg = 4;
		end = allText.indexOf('<br>');
		part = allText.slice(beg, end);
		addElementBr();
		allText = allText.slice(end+4, allText.length);

		if(allText.includes('<br>')) {
			beg = allText.indexOf('<br>');
			part = allText.slice(0, beg);
			addText(part);
			allText = allText.slice(beg, allText.length);
		}
	}

	part = allText.slice(0, allText.length);
	addText(part);

	test(text);
}

function onlyB(text) {
	let allText = text;
	let beg, end, begBR, endBR = 0;
	let part = ''; 


	while(allText.includes('[b]') && allText.includes('[/b]') || allText.includes('<br>')) {
		if(!allText.includes('<br>')) {
			beg = allText.indexOf('[b]');
			part = allText.slice(0, beg);
			addText(part);
			allText = allText.slice(beg, allText.length);
console.log('1');
			while(allText.includes('[b]') && allText.includes('[/b]')) {

				beg = 3;
				end = allText.indexOf('[/b]');
				part = allText.slice(beg, end);
				addElement(part, 'B');
				allText = allText.slice(end+4, allText.length);
console.log('2');
				if(allText.includes('[b]') && allText.includes('[/b]')) {
					beg = allText.indexOf('[b]');
					part = allText.slice(0, beg);
					addText(part);
					allText = allText.slice(beg, allText.length);
console.log('3');
				}
			}

			part = allText.slice(0, allText.length);
			addText(part);
		} else {
			if(allText.includes('[b]') && allText.includes('[/b]')) {
				beg = allText.indexOf('[b]');
				begBR = allText.indexOf('<br>');

				if(begBR < beg) {
					part = allText.slice(0, begBR);
					console.log(allText);
					addText(part);
					allText = allText.slice(begBR+4, allText.length);
console.log('4');
					endBR = 4;
					part = allText.slice(0, endBR);
					addElementBr();
					allText = allText.slice(end, allText.length);
console.log('5');
				} else {
					part = allText.slice(0, beg);
					addText(part);
					allText = allText.slice(beg, allText.length);
console.log('6');
					beg = 3;
					end = allText.indexOf('[/b]');
					part = allText.slice(beg, end);
					addElement(part, 'B');
					allText = allText.slice(end+4, allText.length);
console.log('7');
				}
			} else {
				while(allText.includes('<br>')) {
console.log(allText);
					begBR = allText.indexOf('<br>');
					part = allText.slice(0, begBR);
					addText(part);
					allText = allText.slice(begBR, allText.length);
console.log('8');

console.log(allText);

					if(allText.includes('<br>')) {
console.log(allText);
						endBR = 4;
						allText = allText.slice(endBR, allText.length);
console.log(allText);
						addElementBr();
						addText(allText);
console.log(allText);
console.log('9');
					}
				}
			}
		}
	}


	//addText(allText);
console.log('10');
}

function onlyI(text) {
	let allText = text;
	let beg, end = 0;
	let part = ''; 

	beg = allText.indexOf('[i]');
	part = allText.slice(0, beg);
	addText(part);
	allText = allText.slice(beg, allText.length);

	while(allText.includes('[i]') && allText.includes('[/i]')) {

		beg = 3;
		end = allText.indexOf('[/i]');
		part = allText.slice(beg, end);
		addElement(part, 'I');
		allText = allText.slice(end+4, allText.length);

		if(allText.includes('[i]') && allText.includes('[/i]')) {
			beg = allText.indexOf('[i]');
			part = allText.slice(0, beg);
			addText(part);
			allText = allText.slice(beg, allText.length);
		}
	}

	part = allText.slice(0, allText.length);
	addText(part);
}