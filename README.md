![moon](https://github.com/moon-inj/moon/raw/main/packages/moon-assets/banner/banner.png)

_ Your favourite breach of Discord's ToS! _

[![wakatime](https://wakatime.com/badge/github/moon-inj/moon.svg)](https://wakatime.com/badge/github/moon-inj/moon)

## What is moon?

moon is a 'new-gen" Discord client mod, built to be essentially 'unpatchable'.

Its development was sparked by the death of many client mods and the blow
to all others that was Discord's switch to SWC.

You can read much more about this event with Cumcord's team [here](https://cumcord.com/an-exercise-in-futility).


## What plugins has it got?

Ha! you're funny.

## How do I install it?

### Desktop

- Download this repo.
- Find your discord install folder (`%LocalAppData%` for Windows) and go into `resources/` - if theres a file called `app.asar` youre probably in the right place.
- make the folder `resources/app/`
- copy the contents of `moon/injectors/desktop/app/` into it
- rename `app.asar` to `original.asar`
- fully close and restart discord

### Firefox

coming soon tm

### Chromium based browser

- Grab the latest MV2 release from this repo
- Drag and drop the zip file onto the Chromium extensions page.
- Ignore the MV2 error (see CHROME.md for more details)

You can also do the same with the MV3 release.
This will not throw an error about MV2 however there are a couple of
caveats - more jank and less thorough CSP removal.

## How do I make a plugin?

See [DOCS.md](DOCS.md)

## Is there a plugin repo / website / build tool / etc.?

No.
This is just a side project. nothing more.
