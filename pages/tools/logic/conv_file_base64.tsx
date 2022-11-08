import type { NextPage } from "next"
import { ChangeEvent, useEffect, useState } from "react"
import { toolPaths } from "@/statics/tool_paths"
import styles from "@/styles/tools/conv_base64.module.scss"

const ConvFileBase64: NextPage = () => {
  const textareaStyle =
    styles.TextArea +
    ` text-black dark:bg-gray-200` +
    ` rounded-[10px] border-4 border-body dark:border-gray-900 focus:border-4` +
    ` appearance-none block` +
    ` md:w-[300px] md:h-[100%] w-[calc(100%_-_20px)] mr-[10px] ml-[10px]` +
    ` p-[5px]`

  const [text, setText] = useState("")
  const [base64, setBase64] = useState("")
  const [toBase64, setToBase64] = useState(true)

  /**
   * 素テキストを変更した時に呼び出し
   * @param e
   */
  const setTextData = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("text: ", e.target.value)

    if (toBase64 == false) return

    const txt = e.target.value
    setText(txt)
    setBase64(Buffer.from(txt).toString("base64"))
  }

  /**
   * Base64テキストを変更した時に呼び出し
   * @param e
   */
  const setBase64Data = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("base64: ", e.target.value)

    if (toBase64 == true) return

    const txt = e.target.value
    setBase64(txt)
    setText(Buffer.from(txt, "base64").toString("utf-8"))
  }

  /**
   * テキストエリアにあるデータをコピー
   * @param isBase64
   */
  const copyData = (isBase64: boolean) => {
    if (isBase64) {
      // console.log("copied: ", base64)
      navigator.clipboard.writeText(base64)
    } else {
      // console.log("copied: ", text)
      navigator.clipboard.writeText(text)
    }
  }

  useEffect(() => {
    // console.log("changed: ", toBase64)
    if (toBase64 === false) {
      // console.log("to plane")
      setBase64("")
    } else {
      setText("")
    }
  }, [toBase64])

  return (
    <div
      className={
        `md:min-w-[700px] md:max-w-[1000px] md:ml-0 md:mr-0` +
        ` mt-[30px] mb-[30px] ml-[10px] mr-[10px] max-w-[1000px] min-w-[100%]`
      }
    >
      <h1 className={`text-[30px] mb-[10px]`}>{toolPaths[1].title}</h1>

      <div
        className={
          `md:h-[calc(100%_-_50px)] h-[700px]` +
          ` flex justify-around md:flex-row flex-col`
        }
      >
        {/* <div className={`h-[100%]`}>
          <div
            className={`flex justify-between mb-[5px] md:m-0 mr-[30px] ml-[30px]`}
          >
            <h2 className={`cursor-default`}>プレーン</h2>
            <p
              className={`cursor-pointer`}
              onClick={() => {
                copyData(false)
              }}
            >
              COPY
            </p>
          </div>

          <textarea
            className={textareaStyle}
            name="text"
            placeholder="プレーンテキスト"
            value={text}
            onChange={(e) => {
              setTextData(e)
            }}
          />
        </div> */}

        {/* <div
          className={
            styles.ConvArrowIconDiv +
            ` cursor-pointer md:h-[100%] md:w-[40px] w-[100%] h-[40px] justify-center`
          }
          onClick={() => {
            setToBase64(!toBase64)
          }}
        >
          <button
            className={
              styles.ConvArrowIcon +
              ` hover:bg-black hover:text-white` +
              ` dark:hover:bg-white dark:hover:text-black`
            }
          >
            {toBase64 ? <ChevronDoubleRightIcon /> : <ChevronDoubleLeftIcon />}
          </button>
        </div> */}

        {/* <div className={`h-[100%]`}>
          <div
            className={`flex justify-between mb-[5px] md:m-0 mr-[30px] ml-[30px]`}
          >
            <h2 className={`cursor-default`}>Base64</h2>
            <p
              className={`cursor-pointer`}
              onClick={() => {
                copyData(true)
              }}
            >
              COPY
            </p>
          </div>

          <textarea
            className={textareaStyle}
            name="base64"
            placeholder="Base64済みテキスト"
            value={base64}
            onChange={(e) => {
              setBase64Data(e)
            }}
          />
        </div> */}
      </div>
    </div>
  )
}

export default ConvFileBase64
