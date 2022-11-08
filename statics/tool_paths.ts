import { ToolInfo } from "./types/tool_info"

/**
 * ツールの情報
 */
export const toolPaths: ToolInfo[] = [
  {
    path: "conv_base64",
    title: "テキストのBase64エンコード/デコード",
    description: "テキストをBase64エンコード/デコードします",
  },
  {
    path: "_conv_file_base64",
    title: "ファイルのBase64エンコード",
    description: "ファイルをBase64エンコードします",
  },
  {
    path: "_encrypt",
    title: "暗号化",
    description: "テキストを暗号化します",
  },
  {
    path: "_reg",
    title: "正規表現",
    description: "正規表現のテストをします",
  },
]
