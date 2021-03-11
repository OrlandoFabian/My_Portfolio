async function showFunFact() {
  const responseFromServer = await fetch('/fun-fact');
  const funFactObject = await responseFromServer.json();
  const funFact = funFactObject[Math.floor(Math.random() * funFactObject.length)];

  const factContainer = document.getElementById('fun-fact-message');
  factContainer.innerText = funFact
  
}

function requestTranslation() {
        const text = document.getElementsByClassName('Text');
        const languageCode = document.getElementById('language').value;

        const resultContainer = document.getElementsByClassName('Text');

        for (var i = 0; i < text.length; i++) {
            const params = new URLSearchParams();
            params.append('text', text[i].innerText);
            params.append('languageCode', languageCode);
            fetch('/translate', {
                method: 'POST',
                body: params
            }).then(response => response.text())
            .then((translatedMessage) => {
                resultContainer[i].innerText = translatedMessage;
            }); 
        }
      }