<script>
  import {
    getStyles,
    getUserTypes,
    badgeUrls,
    pinUrls,
  } from "../lib/chatStyles";

  export let message;

  const data = message.data;

  const { isBroadcaster, isMod, isSub } = getUserTypes(data);

  const userType = isBroadcaster
    ? "broadcaster"
    : isMod
      ? "mod"
      : isSub
        ? "sub"
        : "regular";

  const emoteOnly = data.tags["emote-only"] === "1";

  // Twitch has a ton of badges, we don't want to show all of them, so we filter them out
  const filteredBadges = data.badges.filter((badge) =>
    Object.keys(badgeUrls).includes(badge.type)
  );
</script>

<div class="chat-message" style={getStyles(data)}>
  <div class="name">
    <span>@{data.displayName}</span>
    <div class="badges">
      {#each filteredBadges as badge}
        <img src={badgeUrls[badge.type]} alt={badge.description} />
      {/each}
    </div>
  </div>
  <div class="void" />
  <div class="message">
    {#if isSub || isBroadcaster}
      <img
        class="pin"
        class:broadcaster={userType === "broadcaster"}
        src={pinUrls[userType]}
        alt="pin"
      />
    {/if}
    <div
      class="text-box"
      class:emoteOnly
      class:broadcaster={isBroadcaster}
      class:col-1={userType === "regular"}
    >
      {#if userType !== "regular"}
        <div class="sub-bar"></div>
      {/if}
      <p>{@html message.renderedText}</p>
    </div>
  </div>
  <div class="custom-elements">
    <div class="long-bar" />
    <div class="star" />
  </div>
</div>

<style>
  p {
    margin: 0;
  }

  .chat-message {
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-rows: 45px 1fr;
    grid-template-areas:
      "name void"
      "message custom-elements";

    column-gap: 15px;
    padding-right: 15px;
  }

  .name {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    grid-area: name;
    gap: 20px;
    font-size: 17px;
    color: var(--name-color);
  }

  .badges {
    display: flex;
    gap: 12px;
  }

  .badges img {
    width: 15px;
    height: 15px;
  }

  .message {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.825rem;
  }

  .text-box {
    display: grid;
    grid-template-columns: 10px 1fr;
    border-radius: 12px;
    font-size: 20px;
    background-color: var(--message-bg);
    border: 2px solid var(--message-border);
    color: var(--message-color);
    background-image: var(--message-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    box-sizing: border-box;
    position: relative;
  }

  .col-1 {
    grid-template-columns: 1fr;
  }

  .text-box p {
    padding: 16px 25px;
    word-break: break-all;
    hyphens: auto;
  }

  .sub-bar {
    width: 10px;
    background-color: var(--side-bar);
    border-radius: 12px 0 0 12px;
    border-left: 1px solid var(--side-bar);
  }

  .custom-elements {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: custom-elements;
    gap: 5px;
  }

  .long-bar {
    height: 80%;
    width: 4px;
    border-radius: 12px;
    background-color: var(--message-bg);
    border: 1px solid var(--message-border);
  }

  .star {
    width: 15px;
    height: 15px;
    background-image: var(--star-image);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .pin {
    position: relative;
    left: 20px;
    width: 4.44rem;
    height: auto;
    z-index: 2;
  }
  .pin.broadcaster {
    width: 4rem;
  }

  :global(.emote) {
    width: 18px;
    vertical-align: middle;
  }
  :global(.emoteOnly .emote) {
    width: 30px;
  }
</style>
