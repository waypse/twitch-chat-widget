import { writable } from "svelte/store";

export const messages = writable([
  {
    service: "twitch",
    data: {
      time: Date.now(),
      tags: {
        badges: {
          broadcaster: "3",
        },
        color: "#00FF00",
        "display-name": "MielCrapouille",
        broadcaster: "3",
      },
      badges: [
        { type: "broadcaster", version: "1", description: "Broadcaster" },
      ],
      nick: "subuser1",
      userId: "100000002",
      displayName: "MielCrapouille",
      displayColor: "#00FF00",
      text: "Salut ! Ceci est un message de test !",
      msgId: "msgid2",
    },
    renderedText: "Salut ! Ceci est un message de test !",
  },
]);
