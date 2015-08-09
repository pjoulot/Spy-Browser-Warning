function spy_browser_warning_create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
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
	var fragment = spy_browser_warning_create(spy_browser_warning_get_content_warning());
	document.body.insertBefore(fragment, document.body.childNodes[0]);
	
	var closeButton = document.getElementById("spy-browser-warning-close-button");
	closeButton.addEventListener("click", function(){
		document.getElementById("spy-browser-warning").remove();
	});
}