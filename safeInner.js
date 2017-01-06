const text = 'This is a [i]test[/i], all [b]html[/b] tags<br>should <b>not</b> working';
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
	let begB, endB, begI, endI = 0;
	let part = ''; 

















	test(text);
}

function onlyB(text) {
	let allText = text;
	let beg, end = 0;
	let part = ''; 

	beg = allText.indexOf('[b]');
	part = allText.slice(0, beg);
	addText(part);
	allText = allText.slice(beg, allText.length);

	while(allText.includes('[b]') && allText.includes('[/b]')) {

		beg = 3;
		end = allText.indexOf('[/b]');
		part = allText.slice(beg, end);
		addElement(part, 'B');
		allText = allText.slice(end+4, allText.length);

		if(allText.includes('[b]') && allText.includes('[/b]')) {
			beg = allText.indexOf('[b]');
			part = allText.slice(0, beg);
			addText(part);
			allText = allText.slice(beg, allText.length);
		}
	}

	part = allText.slice(0, allText.length);
	addText(part);
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