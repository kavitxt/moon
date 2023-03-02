import { Divider, injectCss, Header, HeaderTags, SwitchItem } from "moon-ui";
import { dbStore } from "../storage";
import { classes, css } from "./Settings.tsx.scss";
import MoonLogo from "./MoonLogo";
import Plugins from "./Plugins";

let injectedCss = false;

export default () => {
  if (!injectedCss) {
    injectCss(css);
    injectedCss = true;
  }

  return (
    <>
      <Header tag={HeaderTags.H1} class={`${classes.row} ${classes.slogan}`}>
        <MoonLogo />- an attempt to prepare for the worst
      </Header>
      <Divider mt mb />
      <div class={classes.column} style={{ padding: "0.25rem" }}>
        <SwitchItem value={dbStore.logDispatch} onChange={(v) => (dbStore.logDispatch = v)}>
          Log FluxDispatcher events to the console
        </SwitchItem>

        <Plugins />
      </div>
    </>
  );
};
