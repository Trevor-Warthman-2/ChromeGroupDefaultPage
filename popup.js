import { getCurrentTab } from './utilities.js'

document.querySelector('#setAsDefault').addEventListener('click', await setCurrentPageToDefaultForGroup());

async function setCurrentPageToDefaultForGroup() {
  const tab = await getCurrentTab();
  await chrome.storage.sync.set({ [tab.groupId]: tab.url });
}