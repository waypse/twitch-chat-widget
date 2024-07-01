<script>
  import { fly } from "svelte/transition";
  import { getStyles, badgeUrls } from "../lib/chatStyles";

  export let message;

  const data = message.data;

  const isBroadcaster = data.badges.some(
    (badge) => badge.type === "broadcaster"
  );

  const isMod = data.badges.some((badge) => badge.type === "moderator");

  const isSub = data.tags.subscriber == 1;

  const filteredBadges = data.badges.filter((badge) =>
    Object.keys(badgeUrls).includes(badge.type)
  );
</script>

<!--<div class="debug">
  <pre>{JSON.stringify(data, null, 2)}</pre>
</div>-->
<div
  class="chat-message"
  style={getStyles(data)}
  transition:fly={{ x: 100, duration: 200 }}
>
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
    {#if isSub}
      <img
        class="mod-heart"
        src="https://i.ibb.co/sFt8kkz/modheart.png"
        alt="mod-heart"
      />
    {/if}
    <div class="text-box" class:padding-broadcaster={isBroadcaster}>
      <p>{@html message.renderedText}</p>
      {#if isSub || isMod}
        <div class="sub-bar"></div>
      {/if}
      {#if isBroadcaster}
        <img
          class="moon-shape"
          src="https://svgshare.com/i/17jf.svg"
          alt="moon-shape"
        />
      {/if}
    </div>
  </div>
  <div class="custom-elements">
    <div class="long-bar" />
    <div class="star" />
  </div>
</div>

<style>
  /* .debug {
    background-color: white;
    padding: 10px;
    color: black;
  } */

  p {
    margin: 0;
  }

  .chat-message {
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
      "name void"
      "message custom-elements";

    column-gap: 15px;
    row-gap: 4px;
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
    display: flex;
    flex-direction: row-reverse;
    border-radius: 12px;
    font-size: 20px;
    background-color: var(--message-bg);
    border: 1px solid var(--message-border);
    color: var(--message-color);
    background-image: var(--message-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    box-sizing: border-box;
    position: relative;
  }

  .padding-broadcaster {
    padding-left: 1.7rem;
  }

  .text-box p {
    padding: 16px 25px;
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

  .moon-shape {
    bottom: -1.63rem;
    left: -1.3rem;
    width: 7rem;
    position: absolute;
  }

  .mod-heart {
    bottom: 0;
    left: -4rem;
    width: 3.5rem;
    height: 3.5rem;
  }

  .sub-heart {
    bottom: -1.63rem;
    left: -1.3rem;
    width: 4rem;
  }
</style>
