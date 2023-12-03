import Banner from "./Banner"
import Column from "./Column"
import Section from "./Section"
import SectionLinks from "./SectionLinks"
import Wether from "./Wether"
import Panel from "./Panel"
import News from "./News/News.tsx"
import Promo from "./Promo"
import Search from "./Search"
import SearchForm from "./SearchForm"
import QuickLinks from "./QuickLinks"
import TVButton from "./Buttons/TVButton"
import {TLink, THotLink, THotNewsItem, TCurrency, TPromoLinkProps} from "../Types.ts"


const popularLinks: TLink[] = [
  {
    title: "Недвижимость",
    url: "#",
    hint: "о сталинках",
    type: "popular"
  }
]

const mediaLinks: TLink[] = [
  {
    title: "Управление как искусство",
    url: "#",
    hint: "Успех",
    type: "media"
  }
]

const tvLinks: TLink[] = [
  {
    title: "ТНТ. Best",
    url: "#",
    hint: "ТНТ International",
    type: "tv",
    time: "02:00",
  },
  {
    title: "Comedy Club",
    url: "#",
    hint: "ТНТ International",
    type: "tv",
    time: "03:00",
  }
]

const simpleLinks: TLink[] = [
  {
    title: "Расписание",
    url: "#"
  }
]

const quickLinks: TLink[] = [
  { title: "Видео", url: "#" },
  { title: "Картинки", url: "#" },
  { title: "Новости", url: "#" },
]

const hotLinks: THotLink[] = [{
  title: "Сейчас в СМИ",
  url: "#",
  active: 1
},{
  title: "в Германии",
  url: "#",
  active: 0
},{
  title: "Рекомендуем",
  url: "#",
  active: 0
}]

const hotNews: THotNewsItem[] = [{
  title: "Путин упростил получение автомобильных номеров",
  url: "#",
  icon: "/img/news-icon.jpg"
},{
  title: "Путин упростил получение автомобильных номеров",
  url: "#",
  icon: "/img/news-icon.jpg"
}]

const courses: TCurrency[] = [{
  title: "USD MOEX",
  value: 63.52,
  change: "+0.09"
},{
  title: "USD MOEX",
  value: 63.52,
  change: "+0.09"
}]

const promo: TPromoLinkProps = {
  title: "Работа над ошибками",
  url: "#",
  desc: "Смотрите на Яндексе и запоминайте",
  image: "/img/banner.jpg"
}

export default function Page () {
  return (
    <div className="page">
      <Panel>
        <News
          hotLinks={hotLinks}
          hotNews={hotNews}
          currencies={courses} />
        <Promo {...promo} />
      </Panel>
      <Search>
        <QuickLinks links={quickLinks} />
        <SearchForm />
      </Search>
      <Banner >
        <img src="https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_656b3d5183225d541b4ef755_656b3d5183225d541b4ef756/scale_2400" alt="banner" />
      </Banner>
      <div className="rows">
        <Column>
          <Section title="Погода">
            <Wether />
          </Section>
          <Section title="Посещаемое">
            <SectionLinks links={popularLinks} />
          </Section>
        </Column>
        <Column>
          <Section title="Карта Германии">
            <SectionLinks links={simpleLinks} />
          </Section>
          <Section title="Телепрограмма">
            <TVButton url="#" />
            <SectionLinks links={tvLinks} />
          </Section>
        </Column>
        <Column>
          <Section title="Эфир">
            <SectionLinks links={mediaLinks} />
          </Section>
        </Column>
      </div>
    </div>
  )
}