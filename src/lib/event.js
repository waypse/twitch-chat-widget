export const defaultMessage = {
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
      mod: "0",
      "room-id": "85827806",
      subscriber: "0",
      "tmi-sent-ts": "1579444549265",
      turbo: "0",
      "user-id": "100135110",
      "user-type": "mod",
    },
    nick: "fFrequence__",
    userId: "100135110",
    displayName: "fFrequence__",
    displayColor: "#5B99FF",
    badges: [
      {
        type: "partner",
        version: "1",
        url: "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
        description: "Verified",
      },
    ],
    channel: "fFrequence__",
    text: "Howdy! My name is Bill and I am here to serve Kappa",
    isAction: !1,
    emotes: [
      {
        type: "twitch",
        name: "Kappa",
        id: "25",
        gif: !1,
        urls: {
          1: "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
          2: "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
          4: "https://static-cdn.jtvnw.net/emoticons/v1/25/3.0",
        },
        start: 46,
        end: 50,
      },
    ],
    msgId: "43285909-412c-4eee-b80d-89f72ba53142",
  },
  renderedText:
    'Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">',
};

export function addMessage(messageType = null) {
  return () => {
    let message;
    switch (messageType) {
      case "emote-only":
        message = {
          ...defaultMessage,
          data: {
            ...defaultMessage.data,
            tags: { ...defaultMessage.data.tags, "emote-only": "1" },
            msgId: Math.random().toString(),
            text: "<img src='https://static-cdn.jtvnw.net/emoticons/v1/25/1.0' srcset='https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x' title='Kappa' class='emote'>",
          },
          renderedText:
            "<img src='https://static-cdn.jtvnw.net/emoticons/v1/25/1.0' srcset='https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x' title='Kappa' class='emote'>",
        };
        break;
      case "mod":
        message = {
          ...defaultMessage,
          data: {
            ...defaultMessage.data,
            msgId: Math.random().toString(),
            badges: [
              ...defaultMessage.data.badges,
              {
                type: "moderator",
                description: "Moderator",
                url: "moderator",
                version: "1",
              },
            ],
          },
        };
        break;
      case "sub":
        message = {
          ...defaultMessage,
          data: {
            ...defaultMessage.data,
            msgId: Math.random().toString(),
            tags: { ...defaultMessage.data.tags, subscriber: "1" },
            badges: [
              ...defaultMessage.data.badges,
              {
                type: "subscriber",
                description: "Subscriber",
                url: "subscriber",
                version: "1",
              },
            ],
          },
        };
        break;
      case "broadcaster":
        message = {
          ...defaultMessage,
          data: {
            ...defaultMessage.data,
            msgId: Math.random().toString(),
            badges: [
              ...defaultMessage.data.badges,
              {
                type: "broadcaster",
                description: "Broadcaster",
                url: "broadcaster",
                version: "1",
              },
            ],
          },
        };
        break;
      default:
        message = {
          ...defaultMessage,
          data: {
            ...defaultMessage.data,
            msgId: Math.random().toString(),
          },
        };
    }

    window.dispatchEvent(
      new CustomEvent("onEventReceived", {
        detail: { listener: "message", event: message },
      })
    );
  };
}

export const sendAlert = () => {
  const alert = {
    messageType: "alert",
    name: "subscriber-latest",
    amount: 1,
    message: "New subscriber",
    gifted: "0",
  };

  window.dispatchEvent(
    new CustomEvent("onEventReceived", {
      detail: {
        listener: "subscriber-latest",
        event: alert,
      },
    })
  );
};
