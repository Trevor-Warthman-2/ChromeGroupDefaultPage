import { getTabGroups, getAllGroupDefaults } from utilities;

const appendGroupDefaults = (tabGroups) => {
  for (item in groups) {
    document.append soem shit
  }
}

const appendEmptyMessage = () => {
  document. append stuff
}

const populateDefaultsList = () => {
  const groupDefaults = getAllGroupDefaults();
  if (tabGroups) {
    appendGroupDefaults(tabGroups);
  } else {
    appendEmptyMessage();
  }
}
get tab groups
const groupListContainer = document.getElementById('defaultTabGroupsList');



populateDefaultsList();

/*document.querySelector('#button').addEventListener('click', await setCurrentPageToDefaultForGroup());


async function setCurrentPageToDefaultForGroup() {
  const group = await getCurrentTabGroup();
  const newDefault = {};
  newDefault[group.id] = window.location.href;
  chrome.storage.sync.set(newDefault);
}

async function getCurrentTabGroup() {
  const tab = await getCurrentTab();
  return (await getTabGroup(tab.id));
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function getTabGroup(groupId) {
  return (await chrome.tabGroups.get(groupId));
}


/*populateFormWithExistingGroups();
populateFormWithStoredDefaults();
const groups = [...document.querySelectorAll('.tabGroups')];
groups.forEach(group => {
    group.childNamedSaveButton.addEventListener('click', group => {
        saveGroupDefaultTab(group.childnamedName.value, group.childnamedURL.value);
    });
});*/

/*let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Reacts to a button click by marking marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color;

    // For each color we were provided…
    for (let buttonColor of buttonColors) {
      // …crate a button with that color…
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      // …mark the currently selected color…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

// Initialize the page by constructing the color options
constructOptions(presetButtonColors);
*/