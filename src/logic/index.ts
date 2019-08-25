// Emojihad ©️ Connor Bryan 2019. All rights reserved.
import { IGame, Map } from '../types'

const map: Map = [
  [
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔴",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔴",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔴",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": true, "⬅️": false }
    }
  ],
  [
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": true, "➡️": false, "⬇️": false, "⬅️": false }
    },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    { "⚫️": "⚪️" },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": true, "⬅️": false }
    }
  ],
  [
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": true, "➡️": false, "⬇️": false, "⬅️": false }
    },
    {
      "⚫️": "🔴",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔴",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔴",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      "⚫️": "🔵",
      "🧭": { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    }
  ]
];

export default {
  "🕑": 0,
  "🗺️": map,
  "👥": {
    all: [],
    byId: {}
  },
  "💟": {
    all: [],
    byId: {}
  },
  "🛠": {
    all: [],
    byId: {}
  }
} as IGame;
