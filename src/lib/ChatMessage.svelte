<script>
  export let message;

  const data = message.data;

  function getBadge(badge) {
    const badgeUrls = {
      moderator: "https://i.ibb.co/Lt29fvf/mod.png",
      broadcaster: "https://i.ibb.co/qDY25Qv/streamer.png",
      subscriber: "https://i.ibb.co/d2KBwV4/sub.png",
    };
    const description = badge.description;

    return {
      src: badgeUrls[badge.type],
      description,
    };
  }
</script>

<div class="chat-message">
  <div class="name">
    <span>@{data.displayName}</span>
    <div class="badges">
      {#each data.badges as b}
        {@const badge = getBadge(b)}
        <img src={badge.src} alt={badge.description} />
      {/each}
    </div>
  </div>
  <div class="void" />
  <div class="message {data.tags['user-type']}">
    <div>
      {@html message.renderedText}
    </div>
  </div>
  <div class="custom-elements"></div>
</div>

<style>
  .chat-message {
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
      "name void"
      "message custom-elements";

    row-gap: 5px;
    column-gap: 10px;
    padding-right: 15px;
  }

  .name {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    grid-area: name;
    gap: 15px;
    font-size: 12px;
  }

  .badges {
    display: flex;
    gap: 5px;
  }

  .badges img {
    width: 20px;
    height: 20px;
  }
</style>
