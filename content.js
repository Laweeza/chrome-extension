window.onload = () => {
  let imagePath = chrome.runtime.getURL('assets/pusheen.png');
  let imagePath2 = chrome.runtime.getURL('assets/fin.png');
  let array = [imagePath, imagePath2];

  function getRandom() {
    return Math.floor(Math.random() * (2 - 0) + 0);
  }

  document.body.style.cursor = `url(${array[getRandom()]}), auto`;
};
