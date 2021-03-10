async function showFunFact() {
  const responseFromServer = await fetch('/fun-fact');
  const funFactObject = await responseFromServer.json();
  const funFact = funFactObject[Math.floor(Math.random() * funFactObject.length)];

  const factContainer = document.getElementById('fun-fact-message');
  factContainer.innerText = funFact
  
}

function requestTranslation() {
        const text = document.getElementById('Text').innerText;
        const languageCode = document.getElementById('language').value;

        const resultContainer = document.getElementById('Text');

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);

        fetch('/translate', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
        });
      }