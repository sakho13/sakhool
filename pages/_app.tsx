import "@/styles/globals.css"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
// import MoonIcon from "@/components/icons/MoonIcon"
// import SunIcon from "@/components/icons/SunIcon"
import styles from "@/styles/App.module.scss"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("sakhool_darkmode") === "ON"
    if (isDarkMode) {
      setIsDark(true)
    }
  }, [isDark])

  /**
   * モード切り替え
   */
  const toggleDark = () => {
    if (!isDark) {
      localStorage.setItem("sakhool_darkmode", "ON")
    } else {
      localStorage.removeItem("sakhool_darkmode")
    }
    setIsDark(!isDark)
  }

  /**
   * トップページに遷移
   */
  const jumpTopPage = () => {
    router.push("/")
  }

  return (
    <div className={`${isDark ? "dark" : "light"} min-h-[100vh] font-yasashii`}>
      <Head>
        <title>Sakool -Utility Tools-</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        className={`${styles.Header}` + ` dark:bg-header-dark dark:text-white`}
      >
        <h1 className="text-2xl cursor-default" onClick={jumpTopPage}>
          Sakool
        </h1>
        <button
          onClick={toggleDark}
          className={
            styles.DarkModeToggleButton +
            ` hover:bg-black hover:text-white` +
            ` dark:hover:bg-white dark:hover:text-black`
          }
        >
          {isDark ? (
            <SunIcon className="w-[80%] h-[80%] align-none inline" />
          ) : (
            <MoonIcon className="w-[80%] h-[80%] align-none inline" />
          )}
        </button>
      </header>

      <main
        className={
          styles.Main + ` dark:bg-body-dark dark:text-white flex justify-center`
        }
      >
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
