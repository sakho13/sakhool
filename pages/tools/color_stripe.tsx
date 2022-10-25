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

    console.log("edit: ", index)
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
                className={`w-[100%]`}
                style={{ backgroundColor: `${color}` }}
                onClick={(e) => {
                  openEditColorModal(i, e)
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
                  `w-[2px] hover:w-[20px]` +
                  ` hover:bg-gray-400` +
                  ` cursor-pointer`
                }
                onClick={(e) => {
                  openAddColorModal(i, e)
                }}
              ></div>
            )
          }
        })}
      </div>

      {colorModalPosition !== null ? (
        <div
          className={
            styles.AddColorModalContainer +
            ` absolute z-100` +
            ` w-[${addColorModalSize.horizontal}px] h-[${addColorModalSize.vertical}px]` +
            ` bg-black`
          }
          style={{
            top: `${colorModalPosition.vertical}px`,
            left: `${colorModalPosition.horizontal}px`,
          }}
          onClick={() => {
            closeColorModal()
          }}
        >
          <p>
            {addColorModal}/{editColorModal}
          </p>

          <p>
            {colorModalPosition.vertical}, {colorModalPosition.horizontal}
          </p>
        </div>
      ) : undefined}
    </>
  )
}

export default ColorStripe
