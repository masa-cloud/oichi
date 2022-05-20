import { MainVisualCorporateName } from 'src/component/molecules/MainVisualCorporateName'
import { MainVisualMainCopy } from 'src/component/molecules/MainVisualMainCopy'
import Image from 'next/image'

export function MainVisual() {
  const randomMainVisual = () => {
    const randomMath = Math.floor(Math.random()*10)

    console.log(randomMath)
    if(randomMath == 1 || randomMath == 2 || randomMath == 3 || randomMath == 4) {
      return <Image className="w-full" src="/kikugahama_blue.jpg"   width={16} height={9} layout={"responsive"} alt="菊ヶ浜" />
    } else if(randomMath == 5 || randomMath == 6 || randomMath == 7 || randomMath == 8) {
      return <Image className="w-full" src="/kikugahama_evening.jpg"   width={16} height={9} layout={"responsive"} alt="菊ヶ浜" />
    } else {
      return <Image className="w-full" src="/kikugahama_sunset.jpg"   width={16} height={9} layout={"responsive"} alt="菊ヶ浜" />
    }
  }

  return (
    <section className="w-full relative">
      <MainVisualMainCopy />
      <MainVisualCorporateName />
      {/* TODO:画像はランダム化して出したい */}
      {randomMainVisual()}
    </section>
  )
}
