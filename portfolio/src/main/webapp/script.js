async function showFunFact() {
  const responseFromServer = await fetch('/fun-fact');
  const textFromResponse = await responseFromServer.text();

  const factContainer = document.getElementById('fun-fact-message');
  factContainer.innerText = textFromResponse;
}
