import modbg from "../assets/mod-bg.txt?raw";
import broadcasterbg from "../assets/broadcaster-bg.txt?raw";
import defaultbg from "../assets/default-bg.txt?raw";
import subheart from "../assets/subheart.txt?raw";
import modheart from "../assets/modheart.txt?raw";
import badgestreamer from "../assets/badge-streamer.txt?raw";

const styles = {
  broadcaster: {
    "--name-color": "var(--broadcaster-name)",
    "--message-bg": "var(--broadcaster-bg)",
    "--message-color": "var(--broadcaster-text)",
    "--message-border": "var(--broadcaster-border)",
    "--message-image": `url('${broadcasterbg}')`,
    "--side-bar": "var(--broadcaster-sidebar)",
    "--glow": "var(--broadcaster-glow)",
  },
  mod: {
    "--name-color": "var(--mod-name)",
    "--message-bg": "var(--mod-bg)",
    "--message-color": "var(--mod-text)",
    "--message-border": "var(--mod-border)",
    "--message-image": `url('${modbg}')`,
    "--side-bar": "var(--mod-sidebar)",
    "--glow": "var(--mod-glow)",
  },
  subscriber: {
    "--name-color": "var(--sub-name)",
    "--message-bg": "var(--sub-bg)",
    "--message-color": "var(--sub-text)",
    "--message-border": "var(--sub-border)",
    "--message-image": `url('${defaultbg}')`,
    "--side-bar": "var(--sub-sidebar)",
    "--glow": "var(--sub-glow)",
  },
  regular: {
    "--name-color": "var(--regular-name)",
    "--message-bg": "var(--regular-bg)",
    "--message-color": "var(--regular-text)",
    "--message-border": "var(--regular-border)",
    "--message-image": `url('${defaultbg}')`,
    "--side-bar": "var(--regular-bg)",
    "--glow": "var(--regular-glow)",
  },
};

export const pinUrls = {
  mod: modheart,
  sub: subheart,
  broadcaster: badgestreamer,
};

export const getUserTypes = (data) => {
  /** @type {boolean} */
  const isBroadcaster = data.badges.some(
    (badge) => badge.type === "broadcaster"
  );
  /** @type {boolean} */
  const isMod = data.badges.some((badge) => badge.type === "moderator");
  const isSub = data.tags.subscriber == 1;

  return {
    isBroadcaster,
    isMod,
    isSub,
  };
};

export const getStyles = (data) => {
  const { isBroadcaster, isMod, isSub } = getUserTypes(data);

  const res = isBroadcaster
    ? styles.broadcaster
    : isMod
    ? styles.mod
    : isSub
    ? styles.subscriber
    : styles.regular;

  return Object.entries(res).reduce(
    (acc, [key, value]) => `${acc}${key}: ${value};`,
    ""
  );
};
