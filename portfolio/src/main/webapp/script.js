async function showFunFact() {
    const responseFromServer = await fetch('/fun-fact');
    const funFactObject = await responseFromServer.json();
    const funFact = funFactObject[Math.floor(Math.random() * funFactObject.length)];

    const factContainer = document.getElementById('fun-fact-message');
    factContainer.innerText = funFact;
  
}

async function requestTranslation() {
    var text = document.getElementsByClassName('Text');
    const languageCode = document.getElementById('language').value;

    var resultContainer = document.getElementsByClassName('Text');

    for (var i=0, len=text.length|0; i<len; i=i+1|0) {
        const params = new URLSearchParams();
        params.append('text', text[i].textContent);
        params.append('languageCode', languageCode);

        await fetch('/translate', {
            method: 'POST',
            body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
            resultContainer[i].textContent = translatedMessage;
        }); 
    }
}
