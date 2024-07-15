/**
 * @typedef {Object} ChatMessage
 * @property {string} service
 * @property {ChatMessageData} data
 * @property {string} renderedText
 */

/**
 * @typedef {Object} Tags
 * @property {string} badgeInfo
 * @property {string} badges
 * @property {string} color
 * @property {string} displayName
 * @property {string} emotes
 * @property {string} flags
 * @property {string} id
 * @property {string} mod
 * @property {string} roomId
 * @property {string | number} subscriber
 * @property {string} tmiSentTs
 * @property {string} turbo
 * @property {string} userId
 * @property {string} userType
 * @property {string} emote-only
 */

/**
 * @typedef {Object} Badge
 * @property {UserType} type
 * @property {string} version
 * @property {string} url
 * @property {string} description
 */

/**
 * @typedef {Object} Emote
 * @property {string} type
 * @property {string} name
 * @property {string} id
 * @property {boolean} gif
 * @property {Object} urls
 * @property {number} start
 * @property {number} end
 */

/**
 * @typedef {Object} ChatMessageData
 * @property {number} time
 * @property {Tags} tags
 * @property {string} nick
 * @property {string} userId
 * @property {string} displayName
 * @property {string} displayColor
 * @property {Badge[]} badges
 * @property {string} channel
 * @property {string} text
 * @property {boolean} isAction
 * @property {Emote[]} emotes
 * @property {string} msgId
 */

/**
 * @typedef {"moderator" | "broadcaster" | "vip" | "partner" | "artist" | "subscriber"} UserType
 */

export default "This file is only used for TypeScript";
