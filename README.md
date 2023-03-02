![moon](https://github.com/moon-inj/moon/raw/main/packages/moon-assets/banner/banner.png)

_an attempt to prepare for the worst_

[![wakatime](https://wakatime.com/badge/github/moon-inj/moon.svg)](https://wakatime.com/badge/github/moon-inj/moon)

## What is moon?

moon is a new generation client mod built to be essentially bulletproof.

Its development was sparked by the death of many client mods and the blow
to all others that was Discord's switch to SWC.

You can read much more about this event [here](https://cumcord.com/an-exercise-in-futility).

It is developed by ex-members of the old Cumcord Team, under moon-inj.network.

## What plugins has it got?

Its early days at the moment, but there are a couple.

Check the githubs of moon-inj members or search for `moon-plugins`.

## How do I install it?

### Desktop

- Download this repo.
- Find your discord install folder (`%LocalAppData%` for Windows) and go into `resources/` - if theres a file called `app.asar` youre probably in the right place.
- make the folder `resources/app/`
- copy the contents of `moon/injectors/desktop/app/` into it
- rename `app.asar` to `original.asar`
- fully close and restart discord

### Firefox

https://addons.mozilla.org/en-GB/firefox/addon/moon-injector/

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

Possibly not.

This is a much smaller project right now than Cumcord was at the time of its death.

Please do not expect a huge ecosystem,
but we do want to have a comfortable dev and user experience.

Keep an eye on the moon-inj gh org or our Discord server
to see what we _are_ working on, inside and outside of the client modding space. :)
