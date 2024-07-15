<script>
  import { getStyles, getUserTypes, pinUrls } from "../lib/chatStyles";
  import Moderator from "../components/icons/Moderator.svelte";
  import Broadcaster from "../components/icons/Broadcaster.svelte";
  import Subscriber from "../components/icons/Sub.svelte";
  import Partner from "../components/icons/Partner.svelte";
  import Vip from "../components/icons/Vip.svelte";
  import Artist from "../components/icons/Artist.svelte";

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

  const badgeComponents = {
    moderator: Moderator,
    broadcaster: Broadcaster,
    vip: Vip,
    partner: Partner,
    artist: Artist,
    subscriber: Subscriber,
  };

  // Twitch has a ton of badges, we don't want to show all of them, so we filter them out
  const filteredBadges = data.badges.filter((badge) =>
    Object.keys(badgeComponents).includes(badge.type)
  );
</script>

<div class="chat-message" style={getStyles(data)}>
  <div class="name">
    <span>@{data.displayName}</span>
    <div class="badges">
      {#each filteredBadges as badge}
        <svelte:component
          this={badgeComponents[badge.type]}
          fill="var(--name-color)"
        />
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
        <div class="side-bar"></div>
      {/if}
      <p>{@html message.renderedText}</p>
    </div>
  </div>
  <div class="custom-elements">
    <div class="long-bar" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      class="star"
    >
      <path
        d="M40.3223 5.41135L48.7832 19.961C49.5678 21.3102 50.6898 22.4322 52.039 23.2168L66.5886 31.6777C69.904 33.6056 69.904 38.3944 66.5887 40.3223L52.039 48.7832C50.6898 49.5678 49.5678 50.6898 48.7832 52.039L40.3223 66.5886C38.3944 69.904 33.6056 69.904 31.6777 66.5887L23.2168 52.039C22.4322 50.6898 21.3102 49.5678 19.961 48.7832L5.41136 40.3223C2.09601 38.3944 2.09601 33.6056 5.41135 31.6777L19.961 23.2168C21.3102 22.4322 22.4322 21.3102 23.2168 19.961L31.6777 5.41136C33.6056 2.09601 38.3944 2.09601 40.3223 5.41135Z"
        fill="var(--message-bg)"
        stroke="var(--message-border)"
        stroke-width="4"
      />
    </svg>
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

  :global(.badges > *) {
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
    box-shadow: var(--glow);
  }

  .col-1 {
    grid-template-columns: 1fr;
  }

  .text-box p {
    padding: 16px 25px;
    word-break: break-all;
    hyphens: auto;
  }

  .side-bar {
    width: 15px;
    background-color: var(--side-bar);
    border-radius: 8px 0 0 8px;
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
