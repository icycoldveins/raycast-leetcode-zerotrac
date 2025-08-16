/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Default Sort Order - Choose the default sorting method for problems */
  "defaultSort": "rating-asc" | "rating-desc" | "id-asc" | "id-desc" | "title-asc" | "title-desc"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-problems` command */
  export type SearchProblems = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-problems` command */
  export type SearchProblems = {}
}

