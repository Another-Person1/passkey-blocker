const script = document.createElement('script');// Inject a script tag into the page to override WebAuthn
script.src = chrome.runtime.getURL('inject.js');
inject.type = "text/javascript";
script.onload = () => script.remove();

(document.head || document.documentElement).appendChild(inject);
inject.remove();