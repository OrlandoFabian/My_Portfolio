async function showFunFact() {
  const responseFromServer = await fetch('/fun-fact');
  const funFactObject = await responseFromServer.json();
  const funFact = funFactObject[Math.floor(Math.random() * funFactObject.length)];

  const factContainer = document.getElementById('fun-fact-message');
  factContainer.innerText = funFact
  
}
