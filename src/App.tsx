import ButtonGradient from "./assets/svg/button-gradient"
import Header from "./components/header"
import Hero from "./components/hero"

export default function App() {

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
    </div>

    <ButtonGradient />
    </>
  )
}