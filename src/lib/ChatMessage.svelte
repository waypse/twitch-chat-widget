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

<!-- , 
{
  service: "twitch",
  data: {
      time: Date.now(),
      tags: {
          "badge-info": "",
          badges: "moderator/1,partner/1",
          color: "#5B99FF",
          "display-name": "StreamElements",
          emotes: "25:46-50",
          flags: "",
          id: "43285909-412c-4eee-b80d-89f72ba53142",
          mod: "1",
          "room-id": "85827806",
          subscriber: "0",
          "tmi-sent-ts": "1579444549265",
          turbo: "0",
          "user-id": "100135110",
          "user-type": "mod"
      },
      nick: channelName,
      userId: "100135110",
      displayName: channelName,
      displayColor: "#5B99FF",
      badges: [{
          type: "moderator",
          version: "1",
          url: "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
          description: "Moderator"
      }, {
          type: "partner",
          version: "1",
          url: "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
          description: "Verified"
      }],
      channel: channelName,
      text: "Howdy! My name is Bill and I am here to serve Kappa",
      isAction: !1,
      emotes: [{
          type: "twitch",
          name: "Kappa",
          id: "25",
          gif: !1,
          urls: {
              1: "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
              2: "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
              4: "https://static-cdn.jtvnw.net/emoticons/v1/25/3.0"
          },
          start: 46,
          end: 50
      }],
      msgId: "43285909-412c-4eee-b80d-89f72ba53142"
  },
  renderedText: 'Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">'
} -->

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
