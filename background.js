chrome.action.onClicked.addListener(() => {
    chrome.windows.create({
      url: "https://motify1.github.io/",
      type: "popup",
      width: 450,
      height: 800
    });
  });