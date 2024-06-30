const styles = {
  broadcaster: {
    "--message-bg": "var(--broadcaster-bg)",
    "--message-color": "var(--broadcaster-text)",
    "--message-border": "var(--brown-border)",
    "--message-image":
      "url('https://i.ibb.co/tKPDmYn/bg-star-broadcaster.png')",
    "--side-bar": "var(--mod-sidebar)",
    "--star-image": "url('https://svgshare.com/i/17ks.svg')",
  },
  mod: {
    "--message-bg": "var(--mod-bg)",
    "--message-color": "var(--white-text)",
    "--message-border": "var(--brown-border)",
    "--message-image": "url('https://i.ibb.co/4ZHJs0t/bg-star-mod.png')",
    "--side-bar": "var(--mod-sidebar)",
    "--star-image": "url('https://svgshare.com/i/17jG.svg ')",
  },
  subscriber: {
    "--message-bg": "var(--regular-bg)",
    "--message-color": "var(--white-text)",
    "--message-border": "var(--sub-border)",
    "--message-image": "url('https://i.ibb.co/CmfxfJ2/bg-star.png')",
    "--side-bar": "var(--sub-sidebar)",
    "--star-image": "url('https://svgshare.com/i/17jt.svg')",
  },
  regular: {
    "--message-bg": "var(--regular-bg)",
    "--message-color": "var(--white-text)",
    "--message-border": "var(--brown-border)",
    "--message-image": "url('https://i.ibb.co/CmfxfJ2/bg-star.png')",
    "--side-bar": "var(--regular-sidebar)",
    "--star-image": "url('https://svgshare.com/i/17jt.svg')",
  },
};

export const getStyles = (data) => {
  const isBroadcaster = data.badges.some(
    (badge) => badge.type === "broadcaster"
  );
  const isMod = data.badges.some((badge) => badge.type === "moderator");
  const isSub = data.tags.subscriber == 1;

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
