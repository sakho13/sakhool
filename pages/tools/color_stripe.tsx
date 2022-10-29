import type { NextPage } from "next"
import { useState, MouseEvent } from "react"
import ChevronDoubleLeft from "@/components/icons/ChevronDoubleLeft"
import ChevronDoubleRight from "@/components/icons/ChevronDoubleRight"
import { designPaths } from "@/statics/design_paths"
import styles from "@/styles/tools/color_stripe.module.scss"

const ColorStripe: NextPage = () => {
  // 色ストライプ
  const [colors, setColors] = useState<(string | 1)[]>([
    1,
    "#50d71e",
    1,
    "#bada55",
    1,
  ])

  // 色ストライプ追加モーダル関係
  const addColorModalSize = {
    vertical: 400,
    horizontal: 300,
  }
  const [addColorModal, setAddColorModal] = useState<null | number>(null)
  const [colorModalPosition, setColorModalPosition] = useState<{
    vertical: number
    horizontal: number
  } | null>(null)

  // 色ストライプ編集モーダル関係
  const [editColorModal, setEditColorModal] = useState<null | number>(null)

  // ホバーされている要素
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const [color, setColor] = useState<string>("")

  /**
   * 色ストライプ追加
   * @param index
   * @param e
   */
  const openAddColorModal = (
    index: number,
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    if (editColorModal !== null) setEditColorModal(null)

    setColor("")
    // console.log("add: ", index)
    console.log(e)
    console.log(document.body.clientWidth, document.body.clientHeight)
    const h =
      document.body.clientWidth > e.pageX + addColorModalSize.horizontal
        ? e.pageX
        : e.pageX - addColorModalSize.horizontal
    const v =
      document.body.clientHeight > e.pageY + addColorModalSize.vertical
        ? e.pageY
        : e.pageY - addColorModalSize.vertical
    setAddColorModal(index)
    setColorModalPosition({
      vertical: v,
      horizontal: h,
    })
  }

  const openEditColorModal = (
    index: number,
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    if (addColorModal !== null) setAddColorModal(null)

    setColor("")
    console.log("edit: ", index)
    const c = colors[index]
    if (c !== 1) {
      setColor(c)

      const h =
        document.body.clientWidth > e.pageX + addColorModalSize.horizontal
          ? e.pageX
          : e.pageX - addColorModalSize.horizontal
      const v =
        document.body.clientHeight > e.pageY + addColorModalSize.vertical
          ? e.pageY
          : e.pageY - addColorModalSize.vertical
      setEditColorModal(index)
      setColorModalPosition({
        vertical: v,
        horizontal: h,
      })
    }
  }

  const closeColorModal = () => {
    setColorModalPosition(null)
    setAddColorModal(null)
    setEditColorModal(null)
  }

  return (
    <>
      <div className={`w-[100%]` + ` flex` + ` ml-[5px] mr-[5px]`}>
        {colors.map((color, i) => {
          if (color !== 1) {
            return (
              <div
                key={`c-${i}`}
                className={`w-[100%]` + ` cursor-pointer`}
                style={{ backgroundColor: `${color}` }}
                onClick={(e) => {
                  openEditColorModal(i, e)
                }}
                onMouseEnter={() => {
                  setHoveredIndex(i)
                }}
              >
                <p>{color}</p>
              </div>
            )
          } else {
            return (
              <div
                key={`a-${i}`}
                className={
                  `w-[5px] hover:w-[20px]` +
                  ` hover:bg-gray-400` +
                  ` cursor-pointer`
                }
                onClick={(e) => {
                  openAddColorModal(i, e)
                }}
                onMouseEnter={() => {
                  setHoveredIndex(i)
                }}
              >
                {/* {i === hoveredIndex ? <div>hovered</div> : <></>} */}
              </div>
            )
          }
        })}
      </div>

      {colorModalPosition !== null ? (
        <div
          className={
            styles.AddColorModalContainer +
            ` absolute z-100` +
            ` dark:bg-header-dark bg-white` +
            ` rounded-[8px]` +
            ` p-[10px]`
          }
          style={{
            top: `${colorModalPosition.vertical}px`,
            left: `${colorModalPosition.horizontal}px`,
            width: `${addColorModalSize.horizontal}px`,
            height: `${addColorModalSize.vertical}px`,
          }}
          // onClick={() => {
          //   closeColorModal()
          // }}
        >
          <p>
            {addColorModal}/{editColorModal}
          </p>

          <p>
            {colorModalPosition.vertical}, {colorModalPosition.horizontal}
          </p>

          <input
            className={
              `text-black` +
              ` dark:bg-gray-200` +
              ` rounded-[10px] border-4 border-body dark:border-gray-900 focus:border-4`
            }
            type="text"
            name="rgb_color"
            value={color}
          />
        </div>
      ) : undefined}
    </>
  )
}

export default ColorStripe
