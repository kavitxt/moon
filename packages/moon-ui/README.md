# moon UI

A set of UI components designed to look identical to Discord's, built entirely in solid.

The API signatures are not identical to Discord's react components.

These components are only expected to work inside Discord.
For use outside of Discord, a solution may or may not be implemented.

## ToC:

- [Utils](#utils)
  - [`<ReactiveRoot>`](#reactiveroot)
  - [`injectCss`](#injectcss)
  - [`genId`](#genid)
  - [`openModal`](#openmodal)
  - [`<ReactInSolidBridge />`](#reactinsolidbridge-)
  - [`SolidInReactBridge`](#solidinreactbridge)
  - [`<ErrorBoundary />`](#errorboundary-)
  - [`niceScrollbarsClass`](#nicescrollbarsclass)
- [Components](#components)
  - [`<Text>`](#text)
  - [`<Header>`](#header)
  - [`<Divider />`](#divider-)
  - [`<Button>`](#button)
  - [`<Switch />`](#switch-)
  - [`<SwitchItem>`](#switchitem)
  - [`<ModalRoot>`](#modalroot)
  - [`<ModalHeader>`](#modalheader)
  - [`<ModalBody>`](#modalbody)
  - [`<ModalFooter>`](#modalfooter)
  - [`<TextBox />`](#textbox-)
  - [`<TextArea />`](#textarea-)
  - [`<Space />`](#space-)

## Utils

Not components, but UI utils used in moon.

### `<ReactiveRoot>`

`ReactiveRoot` creates a solid reactive root, to ensure that `onCleanup` works, and fix some reactivity bugs.

```jsx
elem.append(<ReactiveRoot>{/* ... */}</ReactiveRoot>);
```

### `injectCss`

`injectCss`, as the name says, injects CSS.

It returns a callback which, if passed another string, changes the injected CSS.
If this callback is passed `undefined`, the CSS is removed from the page.
At this point, you cannot pass another string into this callback to re-add some styles.

```js
const modify = injectCss(" .myClass { color: red } ");
modify(" .myClass { color: green } "); // modifies the css
modify(); // removes the css
modify(" .myClass { color: blue } "); // no-op
```

`cleanupCss` is also exported, which removes all injected css.

### `genId`

`genId` generates a random ID.

This is useful in cases where you need to link elements together by ID,
but don't actually need a meaningful ID.

```jsx
export default () => {
  const id = genId();

  return (
    <>
      <label for={id}>A useful input</label>
      <input id={id} />
    </>
  );
};
```

### `openModal`

`openModal` opens the given component in a fullscreen popup modal.

It passes your component one prop, `close`, which is a function that closes the modal.

It returns a function that removes your modal.

```js
const remove = openModal((p) => <button onclick={p}>Hi!</button>);
remove();
```

### `<ReactInSolidBridge />`

Renders a React component in Solid.

```jsx
// this function comes from discord
function Component({ className }) {
  return React.createElement("div", { className }, "yeah uh its a div");
}

<ReactInSolidBridge comp={Component} props={{ className: "reactelem" }} />;
```

### `SolidInReactBridge`

Renders a Solid component in React.
Using this is not recommended as you will need to provide your own React.

```jsx
function Component(props) {
  return <div class={props.className}>yeah uh its a div</div>;
}

React.createElement(SolidInReactBridge, {
  comp: Component,
  props: { className: "solidelem" },
});
```

### `renderSolidInReact`

Just a wrapper to `React.createElement(SolidInReactBridge, {comp, props})`

```jsx
function Component(props) {
  return <div class={props.className}>yeah uh its a div</div>;
}

// Get a Discord component using React fiber

component.render = () => {
  return renderSolidInReact(Component, { className: "solidelem" });
};
```

### `<ErrorBoundary />`

Safely catches any errors that occur, displays the error, and has a button to retry.

### `showToast`

Shows a toast.

```js
// all of these props are optional!
showToast({
  title: "title!",
  content: "a cool toast",
  onClick() {},
  class: "my-cool-toast",
  duration: 3000,
});
```

### `niceScrollbarsClass`

A getter that gets a class to add to an element to give it a nice scrollbar.

```jsx
<div class={`myclass myclass2 ${niceScrollbarsClass()}`} />
```

## Components

### `<Text>`

Text just renders some text, using Discord's current text colour.

```jsx
<Text>This is some text</Text>
```

### `<Header>`

Header is, well, a header. It has three styles, chosen by the `tag` prop.

- **H1**: A nice big header - like the ones at the top of user settings sections.
- **H2**: A slightly smaller header, with allcaps text.
- **H3**: A smaller again header - like "Gifts you purchased" in settings.
- **H4**: Smaller again, allcaps text.
- **H5**: Small, allcaps text, default - like "sms backup authentication" in settings.

```jsx
<Header tag={HeaderTags.H1}>My cool page</Header>
```

### `<Divider />`

Divider renders a grey horizontal divider line.

The `mt` and `mb` props control the top and bottom margin.

By default, there are no margins.
When a string is provided, that is the margin value.
When set true, `20px` is used.

```jsx
<Divider mt mb="30px" />
```

### `<Button>`

Button is a, well, button, using Discord's styles. The props are as follows:

- **look**: A button style from `ButtonLooks` - filled/inverted/outlined - defaults to filled
- **color**: The colour of the button from `ButtonColors` - defaults to brand
- **size**: The size of the button from `ButtonSizes` - defaults to small
- **grow**: When set true, width: auto
- **disabled**: When true, the button cannot be clicked and is greyed out
- **type**: button, reset, submit - defaults to button
- **style**: optionally an object of custom styles to apply
- **class**: optionally some classes to apply
- **onClick**: callback when button is clicked
- **onDoubleClick**: callback when button is double-clicked
- **aria-label**: accessibility helper
- **children**: the button text

### `<Switch />`

A toggle switch.

The `id` prop sets the id of the `<input>`.

`checked`, `disabled`, `onChange` should be pretty self-explanatory.

```jsx
const [switchState, setSwitchState] = createSignal(false);
<Switch checked={switchState} onChange={setSwitchState} />;
```

### `<SwitchItem>`

An item with an option name, a switch, and optionally some extra info.

`value` sets the value of the switch, `disabled` and `onChange` work as you'd expect.

`note`, if passed, sets the extra info to be displayed under the title and switch.

Unless `hideBorder` is set, a `<Divider />` is rendered under the component.

The child elements of the component is the title displayed next to the switch.

```jsx
<SwitchItem note="Does cool things" value={/*...*/}>A cool option</SwitchItem>
```

### `<ModalRoot>`

The root component of a discord-styled modal.

Takes a `size` from `ModalSizes` and some child elements.

`size` defaults to `ModalSizes.SMALL`.

All provided child parts of the modal (header, body, footer) are optional.

```jsx
<ModalRoot size={ModalSizes.SMALL}>
  <ModalHeader /* noClose */ close={closeFn}>My cool modal</ModalHeader>
  <ModalBody>Look mom! I'm on the moon-ui modal!</ModalBody>
  <ModalFooter>Uhhhhh idk this is the footer ig, its a good place for buttons!</ModalFooter>
</ModalRoot>
```

### `<ModalHeader>`

The header of a discord-styled modal.

Takes a prop, `close`, which is the function that closes the modal.

Also has an optional boolean prop `noClose` which hides the close button.

### `<ModalBody>`

The body of a discord-styled modal.

Has nice discord scrollbars and plays well with the header and footer when overflowed.

### `<ModalFooter>`

Takes no props.

The footer of a discord-styled-modal, good for buttons!

### `<TextBox />`

A discord style textbox.

Takes value, placeholder, maxLength, labelledBy, and onInput.

All optional. onInput called every keystroke and passed the full current value.

### `<TextArea />`

Like `<TextBox />` but its a textarea.

Also takes width, height, resize-x, resize-y, and mono.

### `<Space />`

A spacebar character. Useful in flexboxes etc.
