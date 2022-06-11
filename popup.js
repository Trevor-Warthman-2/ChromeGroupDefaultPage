import { getCurrentTab, openNewOptionsTab } from './utilities.js'

document.querySelector('#setAsDefault').addEventListener('click', setCurrentPageToDefaultForGroup);
document.querySelector('#goToOptions').addEventListener('click', openNewOptionsTab);

async function setCurrentPageToDefaultForGroup() {
  const tab = await getCurrentTab();
  await chrome.storage.sync.set({ [tab.groupId]: tab.url });
}