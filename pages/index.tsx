import type { NextPage } from "next"
import styles from "../styles/Home.module.scss"
import ToolList from "@/components/layouts/ToolList"

const Home: NextPage = () => {
  const subTitleClass = `${styles.Title}` + `font-bold text-[30px]`

  return (
    <div className={`md:min-w-[700px] max-w-[1000px] m-[10px] mb-[40px]`}>
      <ToolList type="logic" />

      <ToolList type="design" className={`mt-[20px]`} />
    </div>
  )
}

export default Home
