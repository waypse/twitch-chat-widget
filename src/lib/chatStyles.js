const styles = {
  broadcaster: {
    "--name-color": "var(--broadcaster-name)",
    "--message-bg": "var(--broadcaster-bg)",
    "--message-color": "var(--broadcaster-text)",
    "--message-border": "var(--broadcaster-border)",
    "--message-image":
      "url('https://i.ibb.co/tKPDmYn/bg-star-broadcaster.png')",
    "--side-bar": "var(--broadcaster-sidebar)",
    "--glow": "var(--broadcaster-glow)",
  },
  mod: {
    "--name-color": "var(--mod-name)",
    "--message-bg": "var(--mod-bg)",
    "--message-color": "var(--mod-text)",
    "--message-border": "var(--mod-border)",
    "--message-image": "url('https://i.ibb.co/4ZHJs0t/bg-star-mod.png')",
    "--side-bar": "var(--mod-sidebar)",
    "--glow": "var(--mod-glow)",
  },
  subscriber: {
    "--name-color": "var(--sub-name)",
    "--message-bg": "var(--sub-bg)",
    "--message-color": "var(--sub-text)",
    "--message-border": "var(--sub-border)",
    "--message-image": "url('https://i.ibb.co/CmfxfJ2/bg-star.png')",
    "--side-bar": "var(--sub-sidebar)",
    "--glow": "var(--sub-glow)",
  },
  regular: {
    "--name-color": "var(--regular-name)",
    "--message-bg": "var(--regular-bg)",
    "--message-color": "var(--regular-text)",
    "--message-border": "var(--regular-border)",
    "--message-image": "url('https://i.ibb.co/CmfxfJ2/bg-star.png')",
    "--side-bar": "var(--regular-bg)",
    "--glow": "var(--regular-glow)",
  },
};

export const badgeUrls = {
  moderator: "https://svgshare.com/i/17jb.svg",
  broadcaster: "https://svgshare.com/i/17jc.svg",
  subscriber: "https://svgshare.com/i/17ik.svg",
  partner: "https://svgshare.com/i/17ko.svg",
  vip: "https://svgshare.com/i/17kA.svg",
  artist: "https://svgshare.com/i/17kz.svg",
};

export const pinUrls = {
  mod: "https://i.ibb.co/G2r41HC/modheart.png",
  sub: "https://i.ibb.co/HPbv8d1/subheart.png",
  broadcaster: "https://i.ibb.co/QdfHVQq/badge-streamer.png",
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
