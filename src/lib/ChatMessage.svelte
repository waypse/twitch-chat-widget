<script>
  export let message;

  const data = message.data;

  const badgeUrls = {
    moderator: "https://i.ibb.co/Lt29fvf/mod.png",
    broadcaster: "https://i.ibb.co/qDY25Qv/streamer.png",
    subscriber: "https://i.ibb.co/d2KBwV4/sub.png",
  };

  const getStyles = () => {
    const styles = {
      broadcaster: {
        "--message-bg": "var(--broadcaster-bg)",
        "--message-color": "#4b2d15",
        "--message-border": "#4b2d15",
        "--message-image":
          "url('https://i.ibb.co/tKPDmYn/bg-star-broadcaster.png')",
        "--side-bar": "var(--mod-sidebar)",
      },
      mod: {
        "--message-bg": "#742b15",
        "--message-color": "#fffffe",
        "--message-border": "#4b2d15",
        "--message-image": "url('https://i.ibb.co/4ZHJs0t/bg-star-mod.png')",
        "--side-bar": "var(--mod-sidebar)",
      },
      subscriber: {
        "--message-bg": "#362823",
        "--message-color": "#fffffe",
        "--message-border": "#362823",
        "--message-image": "url('https://i.ibb.co/CmfxfJ2/bg-star.png')",
        "--side-bar": "var(--sub-sidebar)",
      },
    };

    const userType = data.tags["user-type"];
    const res =
      styles[userType] || (data.tags.subscriber ? styles.subscriber : {});

    return Object.entries(res).reduce(
      (acc, [key, value]) => `${acc}${key}: ${value};`,
      ""
    );
  };
</script>

<div class="chat-message" style={getStyles()}>
  <div class="name">
    <span>@{data.displayName}</span>
    <div class="badges">
      {#each data.badges as badge}
        <img src={badgeUrls[badge.type]} alt={badge.description} />
      {/each}
    </div>
  </div>
  <div class="void" />
  <div class="message">
    <div class="text-box">
      <p>{@html message.renderedText}</p>
      {#if data.tags.subscriber}
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
    background-image: url("https://i.ibb.co/7z1Zz1v/bg-star.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
