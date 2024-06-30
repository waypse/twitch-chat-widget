import { writable } from "svelte/store";

export const messages = writable([]);

// {
//   service: "twitch",
//   data: {
//     time: Date.now(),
//     tags: {
//       badges: {
//         broadcaster: "3",
//       },
//       color: "#00FF00",
//       "display-name": "MielCrapouille",
//       broadcaster: "3",
//       "user-type": "mod",
//       subscriber: 1,
//     },
//     badges: [
//       { type: "broadcaster", version: "1", description: "Broadcaster" },
//       { type: "moderator", version: "2", description: "Broadcaster" },
//     ],
//     nick: "subuser1",
//     userId: "100000002",
//     displayName: "MielCrapouille",
//     displayColor: "#00FF00",
//     text: "Salut ! Ceci est un message de test !",
//     msgId: "msgid2",
//   },
//   renderedText: "Salut ! Ceci est un message de test !",
// },
// {
//   service: "twitch",
//   data: {
//     time: Date.now(),
//     tags: {
//       badges: {
//         broadcaster: "3",
//       },
//       color: "#00FF00",
//       "display-name": "MielCrapouille",
//       broadcaster: "3",
//       "user-type": "broadcaster",
//     },
//     badges: [
//       { type: "broadcaster", version: "1", description: "Broadcaster" },
//     ],
//     nick: "subuser1",
//     userId: "100000002",
//     displayName: "MielCrapouille",
//     displayColor: "#00FF00",
//     text: "Salut ! Ceci est un message de test !",
//     msgId: "msgid2",
//   },
//   renderedText:
//     "LLOOOOOOONG LOOOONG BBOYYYYY ! WE GOTTA SEE THEM THROUGH, KORE WA SAIGO NO CHANSU ! KIMI NO SUBETE O KAKETE ! NIGGERS INCOMING",
// },
