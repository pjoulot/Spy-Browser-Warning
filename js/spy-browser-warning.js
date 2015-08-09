function spy_browser_warning_create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function spy_browser_warning_get_browser() {
	var ua= navigator.userAgent, tem,
	M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1])){
		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+(tem[1] || '');
	}
	if(M[1]=== 'Chrome'){
		tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
		if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	}
	M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	return M.join(' ');
}

function spy_browser_warning_get_content_warning() {
    var html = '<div id="spy-browser-warning">';
	html += '<div class="spy-browser-warning-content">';
	html += '<div class="spy-browser-warning-firefox"></div>';
	html += '<p>Nous avons détecté que votre navigateur récolte vos données personnelles au profit de son entreprise créatrice. Cet avertissement est là pour vous en informer. Si vous en êtes pleinement conscients, fermez simplement ce message. Dans le cas contraire, nous vous suggérons d\'utiliser un navigateur repectueux de votre vie privée tel que Firefox.</p>';
	html += '<p>Firefox est un navigateur mis au point par des milliers de bénévoles du monde entier qui croient en un Internet libre et qui vous permet de garder le contrôle de vos données personnelles.</p>';
	html += '<div class="spy-browser-warning-buttons">';
	html += '<a href="https://www.mozilla.org/fr/firefox/new/?scene=2#download-fx" class="spy-browser-warning-button">Télécharger Firefox</a><span class="spy-browser-warning-button" id="spy-browser-warning-close-button">Fermer</span>';
	html += '</div>';
    html += '</div>';
	html += '</div>';
	return html;
}

window.onload = function() {
    var spy_browser_warning_browser = spy_browser_warning_get_browser();
	if(spy_browser_warning_browser.indexOf("Chrome") > -1 || spy_browser_warning_browser.indexOf("IE") > -1 || spy_browser_warning_browser.indexOf("Safari") > -1 || spy_browser_warning_browser.indexOf("Edge") > -1 ) {
		var fragment = spy_browser_warning_create(spy_browser_warning_get_content_warning());
		document.body.insertBefore(fragment, document.body.childNodes[0]);
		
		var closeButton = document.getElementById("spy-browser-warning-close-button");
		closeButton.addEventListener("click", function(){
			document.getElementById("spy-browser-warning").remove();
		});
	}
}