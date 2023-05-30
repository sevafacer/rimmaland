var messageElement = document.querySelector('.cookie-notification');

if (!Cookies.get('agreement')) {
		showMessage();
} else {
		initCounter();
}

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");



function addClass (o, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
		if (!o || re.test(o.className)) {
				return;
		}
		o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
}

function removeClass (o, c) {
		var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
		if (!o) {
				return;
		}
		o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
}

function hideMessage () {
		addClass(messageElement, 'cookie-notification_hidden_yes');
}

function showMessage () {
		removeClass(messageElement, 'cookie-notification_hidden_yes');
}
function saveAnswer () {
		hideMessage();

		Cookies.set('agreement', '1');
}
function initCounter () {
	ym(93762633, "init", {
		clickmap:true,
		trackLinks:true,
		accurateTrackBounce:true,
		webvisor:true,
		ecommerce:"dataLayer"
});
		saveAnswer();
}


document.querySelector('#yes').addEventListener('click', function () {
		initCounter();
});