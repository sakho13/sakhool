export type ToolInfo = {
  path: string
} & ToolInfoText

export type ToolInfoText = {
  title: string
  description: string
}

// 一旦 多言語対応は無視

export const SupportedLanguages = ["Japanese", "English"] as const

export type SupportedLanguages = typeof SupportedLanguages[number]

export type LanguageInfo = {
  lang: SupportedLanguages
  short: string
}
