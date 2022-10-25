import type { NextPage } from "next"
import styles from "../styles/Home.module.scss"
import ToolCard from "@/components/layouts/ToolCard"
import { designPaths } from "@/statics/design_paths"
import { toolPaths } from "@/statics/tool_paths"

const Home: NextPage = () => {
  const subTitleClass = `${styles.Title}` + `font-bold text-[30px]`

  return (
    <div className={`md:min-w-[700px] max-w-[1000px] m-[10px] mb-[40px]`}>
      <div>
        <h2 className={subTitleClass}>ロジック用ツール</h2>

        <div className={`flex flex-wrap`}>
          {toolPaths.map((toolInfo) => {
            return (
              <ToolCard
                key={toolInfo.path}
                pathKey={toolInfo.path}
                title={toolInfo.title}
                description={toolInfo.description}
              />
            )
          })}
        </div>
      </div>

      <div className={`mt-[20px]`}>
        <h2 className={subTitleClass}>デザイン用ツール</h2>

        <div className={`flex flex-wrap`}>
          {designPaths.map((toolInfo) => {
            return (
              <ToolCard
                key={toolInfo.path}
                pathKey={toolInfo.path}
                title={toolInfo.title}
                description={toolInfo.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
