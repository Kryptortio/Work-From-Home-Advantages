const translations = ['se'];
var fuse;
var lang;

function render(p_item) {
	let item = p_item.item || p_item; 
	let score = p_item.score ? 1 - p_item.score : '';
	let opacity = score/latestMaxScore;

	let tagDots = '';
	item.tags.forEach(tagId => {
		let borderCss = document.querySelector('#tag_'+tagId).checked ? '2px solid ffffff80' : 'none';
		let extraClass = document.querySelector('#tag_'+tagId).checked ? 'pulse' : '';

		if(tags[tagId]) tagDots += `<span class="dot ${extraClass}" onclick="document.getElementById('tag_${tagId}').click();" title="${tags[tagId].title}" 	>${tags[tagId].icon}</span>`;
	});

	return `<span style="opacity:${Math.max(opacity-0.2,0.15)}" class="item" title="${Math.round(score*100)}/100 match">${item.title} ${tagDots}</span>`;
}

let latestMaxScore;
function search() {
	let searchInput = sIn.value.length > 0 ? sIn.value : ' ';
	sOut.innerHTML = "";

	let selectedTags = [];
	
	// Collect slected tags
	document.querySelectorAll('.tag').forEach( el => { 
		if(el.checked) selectedTags.push({tags:el.dataset.key}) 
	});
	
	// Setup search options
	let searchArray = [
			{
				$path: ['title'],
				$val: searchInput
			}
	];
	searchArray = searchArray.concat(selectedTags);

	// Search
	let searchResult = fuse.search({ $and:searchArray })
	
	// Find best match
	latestMaxScore = 0;
	searchResult.forEach( el => {latestMaxScore = Math.max(latestMaxScore, 1-el.score)});
	
	// Render each advantage
	searchResult.forEach( el => {sOut.innerHTML += render(el);});

	// Show all matches if nothing was found
	if(sOut.innerHTML == "") index.forEach( el => {sOut.innerHTML += render(el);});
}

function init() {
	
	const fuseOptions = {
	  // isCaseSensitive: false,
	   includeScore: true,
	  // shouldSort: true,
	   includeMatches: true,
	   findAllMatches: true,
	  // minMatchCharLength: 1,
	  // location: 0,
	   threshold: 1.0,
	   //distance: 1000,
	  // useExtendedSearch: false,
	   ignoreLocation: true,
	   ignoreFieldNorm: true,
	  // fieldNormWeight: 1,
	  keys: [
		"title",
		"tags"
	  ]
	};
	
	fuse = new Fuse(index, fuseOptions);
	
	// Render tags
	Object.keys(tags).forEach(function(key,index) {
		let el = tags[key];
		let tagContainer = document.createElement('span');
		let tagCheckbox = document.createElement('input');
		let checkboxId = 'tag_'+key;
		tagContainer.class = 'tag-container';
		tagContainer.innerHTML = `<label for="${checkboxId}">${el.title}${el.icon}</label>`;
		tagCheckbox.className = 'tag';
		tagCheckbox.type = 'checkbox';
		tagCheckbox.id = checkboxId;
		tagCheckbox.dataset.key = key;
		tagCheckbox.onclick = search;
		tagContainer.appendChild(tagCheckbox);
		taglist.appendChild(tagContainer);
	});
	
	// Translate texts
	if(lang) {
		document.getElementById('furtherReading').innerHTML = texts.furtherReading;
		document.getElementById('shareText').innerHTML = texts.shareText;
		document.querySelector('#suggestions span').innerHTML = texts.suggestions;
		document.getElementById('header').innerHTML = texts.pageTitle;
		document.title = texts.pageTitle;
		let selectedLang = document.getElementById('selectedLang');
		selectedLang.classList.remove("usFlag");
		selectedLang.classList.add(lang + "Flag");
		Array.from(document.getElementsByClassName('share-link')).forEach(el => { el.href = el.href.replace("https%3A%2F%2Fcutt.ly%2FWork-From-Home-Advantages", encodeURIComponent(texts.shortUrl)	); });
		let qrShare = document.querySelector('.share-link.qr');
		qrShare.href = qrShare.href.replace('qr', 'qr' + lang);	
	}
	
	// Render list
	search('');
}


document.addEventListener("DOMContentLoaded", function(event) { 
	const urlParams = new URLSearchParams(window.location.search);
	let langParam = urlParams.get('l');

	// Perpare to load data
	let head = document.getElementsByTagName('head')[0];
	let dataPath = 'data.js';
	let dataScriptElem = document.createElement('script');
	dataScriptElem.addEventListener('load', function() {
		init();
	});
	
	// Do we need to load a translation?
	if(langParam) {
		langParam = langParam.toLowerCase();
		
		// Valid transaltion?
		if(translations.includes(langParam)) {
			lang = langParam;
			dataPath = `data_${langParam}.js`;
		}		
	}
	
	dataScriptElem.src = dataPath;
	head.appendChild(dataScriptElem);
});