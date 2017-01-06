const text = 'This is a [b]test[/b], all [b]html[/b] tags should <b>not</b> working';

document.getElementById("btnSubmit").addEventListener("click", function(){

	if(!text.includes('[b]') || !text.includes('[/b]')) {
		addText(text);
	} else {
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
			addElement(part);
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

		test(allText);
	}
});

function addText(text) {
	const part = document.createTextNode(text);
	document.getElementById("main").appendChild(part);
}

function addElement(text) {
    var element = document.createElement("B");
    var part = document.createTextNode(text);
    element.appendChild(part);
    document.getElementById("main").appendChild(element);
}

function test(text) {
	console.log(text);
}