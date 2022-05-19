import type { NextPage } from "next";
import { HeaderResponsive } from "src/component/organisms/Header";
import { FooterSocial } from "src/component/organisms/FooterSocial";
import { useMediaQuery } from "src/lib/mantine/useMediaQuery";
import { useViewportSize } from "src/lib/mantine/useViewportSize";
import { MainVisual } from 'src/component/organisms/MainVisual'
import { H3 } from 'src/component/atoms/H3'
import Image from 'next/image'
// import { H3 } from "tabler-icons-react";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");
  const linkList = [{ link: "hoge", label: "会社概要" }, { link: "aaa", label: "商品情報" }, { link: "aaa", label: "NEWS" }, { link: "aaa", label: "お問い合わせ" },]
  return (
    <>
      <HeaderResponsive links={linkList} />
      <MainVisual />
      <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200 mt-10">
      </div>
      <div className="w-10/12 m-auto">
        <ul className="relative h-96">
          <li className="absolute top-0 left-1/2">
            <Image className="" src="/shirasu.jpeg" width={246} height={164} alt="しらす" loading={"lazy"}/>
          </li>
          <li className="absolute top-1/4 left-12">
            <Image className="" src="/fish.jpeg" width={272} height={216} alt="魚" loading={"lazy"}/>
          </li>
          <li className="absolute top-2/4 left-2/4">
            <Image src="/himono.jpeg" width={288} height={202} alt="干物" loading={"lazy"}/>
          </li>
        </ul>
      </div>
      <div className="mt-10 w-10/12 p-4 m-auto">
        <div className="text-center mb-4"><H3>ご挨拶</H3></div>
        <p>魚は生まれて大きくなるまでにいろいろな海を渡り成長していきますが、一つの海で生まれ育った魚が瀬に居つくという意味で「瀬付き」という名前がつきます。<br/><br/>大一商店では萩の瀬付きアジ、瀬付きちりめんをはじめとする全国の干魚をプロの目で選び抜き、味、品質ともにお客様が満足できる物をご提供しています。<br/><br/>
        一度萩の海産物を手に取ってもらい御賞味ください。</p>
      </div>
      <div className="bg-yellow-300 w-10/12 p-4 m-auto">
        <p>会社名：株式会社大一商店<br/>
        所在地：山口県萩市大字山田字東沖田４２０６番１<br/>
        会社設立：昭和３８年<br/>
        創設者：大嶋一蔵<br/>
        代表者：代表取締役社長<br/>
        大嶋直隆 資本金：三千万円<br/>
        社員数：１１名（令和４年３月時点）
        </p>
      </div>
      <FooterSocial/>
    </>
)}
export default Home;
