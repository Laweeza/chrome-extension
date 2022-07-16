let imagePath = chrome.runtime.getURL('assets/pusheen.png');

window.onload = function () {
  document.body.style.cursor = `url(${imagePath}), pointer`;
};
