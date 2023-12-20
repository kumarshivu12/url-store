const button = document.getElementById("storeURL");
button.addEventListener("click", () => {
  console.log("button clicked");
  const currentURL = window.location.href;
  console.log("Current URL:", currentURL);
  let storedURLs = localStorage.getItem('visitedURLs');
  storedURLs = storedURLs ? JSON.parse(storedURLs) : [];
  storedURLs.push(currentURL);
  localStorage.setItem('visitedURLs', JSON.stringify(storedURLs));
});
