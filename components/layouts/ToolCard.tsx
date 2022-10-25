import { useRouter } from "next/router"
import { memo, ReactNode } from "react"

export type ToolCardProps = {
  children?: ReactNode
  pathKey: string
  title: string
  description: string
}

const ToolCard = (props: ToolCardProps) => {
  const router = useRouter()

  const isUndefined = props.pathKey[0] === "_"

  const jump = () => {
    if (isUndefined) {
      return
    }
    router.push(`/tools/${props.pathKey}`)
  }

  return (
    <div
      className={
        `w-[300px] h-[200px] m-[10px] p-[10px]` +
        ` rounded-[10px] border-2 border-body dark:border-white` +
        (!isUndefined
          ? ` cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800`
          : ``)
      }
      onClick={() => {
        jump()
      }}
    >
      <h1
        className={
          `text-[18px]` +
          ` border-black border-b dark:border-white` +
          ` pl-[10px] pr-[10px] pb-[8px] pt-[8px]`
        }
      >
        {props.title + (isUndefined ? "  (未実装)" : "")}
      </h1>

      <div className={`p-[8px]`}>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default memo(ToolCard)
