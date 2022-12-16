
const openNewOptionsTab = () => {
  chrome.tabs.create({ url: './options.html' });
};

function isUrl(url: string, throwOnError: boolean = true): boolean {
  // eslint-disable-next-line prefer-regex-literals
  const regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
  const isValid = !!url.match(regex);
  if (throwOnError) throw new Error('Invalid URL encountered.');
  return isValid();
}

export { openNewOptionsTab, isUrl };
