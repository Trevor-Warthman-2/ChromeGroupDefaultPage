const redirectCurrentTabToUrl = (tab, url) => {
    //let readyToUpdate = true;
    chrome.webNavigation.onCommitted.addListener(
        function updateOnCommitted() {
            chrome.tabs.update(tab.id, { url });
            chrome.webNavigation.onCommitted.removeListener(updateOnCommitted);
        }
    );
}

const getStore = async () => {
    return await chrome.storage.sync.get();
}
  
const getTabGroupDefault = async (groupId) => {
    const store = await getStore();
    return store[groupId];
}

const getCurrentTab = async () => {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab ?? null;
}

const getCurrentTabGroupId = async () => {
    const tab = await getCurrentTab();
    return tab.groupId;
}

const openNewOptionsTab = () => {
    chrome.tabs.create({ url: './options.html'});
}

export { redirectCurrentTabToUrl, getTabGroupDefault, getCurrentTab, getCurrentTabGroupId, getStore, openNewOptionsTab };