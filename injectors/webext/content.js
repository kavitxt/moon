const MOON_URL = "https://raw.githubusercontent.com/moon-inj/moon-builds/main/moon.js";
async function fetchMoon() {
  const moon = await (await fetch(MOON_URL)).text();

  return `${moon}
//# sourceMappingURL=${MOON_URL}.map`;
}

// why does chrome have to be like this?
// firefox does it fine, be like firefox.
const promisifiedGet = (...a) => new Promise((res) => chrome.storage.local.get(...a, res));

async function updateMoon() {
  const [{ moon: existingMoon }, newMoon] = await Promise.all([promisifiedGet("moon"), fetchMoon()]);

  if (existingMoon === newMoon) return;

  await chrome.storage.local.set({ moon: newMoon });

  location.reload();
}

(async () => {
  try {
    const { moon } = await promisifiedGet("moon");

    if (moon) {
      const scriptTag = document.createElement("script");
      scriptTag.textContent = moon;

      while (!document.head) await new Promise(setTimeout);
      document.head.append(scriptTag);
    }

    await updateMoon();
  } catch (e) {
    console.error("MOON-INJ EXT ERR", e);
  }
})();
