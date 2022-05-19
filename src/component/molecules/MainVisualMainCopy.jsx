import { H1 } from 'src/component/atoms/H1'

export function MainVisualMainCopy() {
  return (
    <div className="absolute m-auto w-fullscreen left-1/4 bottom-1/2 right-0 z-10 text-white text-center">
      <div className="text-left">
        <H1>
          {/* TODO:キャッチコピー画像によって変える　色彩心理学 */}
          <span>維新の時代から栄えた <span className="text-blue-600">萩の海と、</span></span><br/>
          <span>やさしい味わいの <span className="text-blue-600">海の幸。</span></span>
        </H1>
      </div>
    </div>
  )
}
