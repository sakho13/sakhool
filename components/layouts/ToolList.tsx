import { memo, ReactNode } from "react"
import ToolCard from "./ToolCard"
import styles from "@/components/styles/ToolList.module.scss"
import { designPaths } from "@/statics/design_paths"
import { toolPaths } from "@/statics/tool_paths"

export type ToolListProps = {
  children?: ReactNode
  className?: string
  type: "logic" | "design"
}

const ToolList = (props: ToolListProps) => {
  const subTitleClass = `${styles.Title}` + ` font-bold text-[30px]`

  return (
    <div className={props.className}>
      <h2 className={subTitleClass}>
        {props.type === "logic" ? "ロジック" : "デザイン"}用ツール
      </h2>

      <div className={`flex flex-wrap`}>
        {(props.type === "logic" ? toolPaths : designPaths).map((toolInfo) => {
          return (
            <ToolCard
              key={toolInfo.path}
              type={props.type}
              pathKey={toolInfo.path}
              title={toolInfo.title}
              description={toolInfo.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default memo(ToolList)
