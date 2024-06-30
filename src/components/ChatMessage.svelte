<script>
  import { fly } from "svelte/transition";
  import { getStyles } from "../lib/chatStyles";

  export let message;

  const data = message.data;

  const badgeUrls = {
    moderator: "https://svgshare.com/i/17jb.svg",
    broadcaster: "https://svgshare.com/i/17jc.svg",
    subscriber: "https://svgshare.com/i/17ik.svg",
    partner: "https://svgshare.com/i/17ko.svg",
    vip: "https://svgshare.com/i/17kA.svg",
    artist: "https://svgshare.com/i/17kz.svg",
  };

  const filteredBadges = data.badges.filter((badge) =>
    Object.keys(badgeUrls).includes(badge.type)
  );
</script>

<div class="debug">
  <pre>{JSON.stringify(data, null, 2)}</pre>
</div>
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
    <div class="text-box">
      <p>{@html message.renderedText}</p>
      {#if data.tags.subscriber == 1}
        <div class="sub-bar"></div>
      {/if}
    </div>
  </div>
  <div class="custom-elements">
    <div class="long-bar" />
    <div class="star" />
  </div>
</div>

<style>
  .debug {
    background-color: white;
    padding: 10px;
    color: black;
  }
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

    row-gap: 5px;
    column-gap: 15px;
    padding-right: 15px;
  }

  .name {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    grid-area: name;
    gap: 15px;
    font-size: 16px;
  }

  .badges {
    display: flex;
    gap: 5px;
  }

  .badges img {
    width: 20px;
    height: 20px;
  }

  .message {
    display: flex;
    justify-content: flex-end;
  }

  .text-box {
    display: flex;
    flex-direction: row-reverse;
    border-radius: 12px;
    font-size: 18px;
    background-color: var(--message-bg);
    border: 1px solid var(--message-border);
    color: var(--message-color);
    background-image: var(--message-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    box-sizing: border-box;
  }

  .text-box p {
    padding: 16px 25px;
  }

  .sub-bar {
    width: 10px;
    height: 100%;
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
    width: 6px;
    border-radius: 12px;
    background-color: #362823;
  }

  .star {
    width: 20px;
    height: 20px;
    background-image: var(--star-image);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
