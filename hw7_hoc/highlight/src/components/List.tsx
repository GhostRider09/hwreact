import { TItemList } from "../Types";
import Article from "./Article";
import New from "./New";
import Popular from "./Popular";
import Video from "./Video";


function withHighlight(Component: React.ComponentType<TItemList>) {
  const displayName = Component.displayName || Component.name || "Component";

  const c = (props: TItemList) => {
    if ( props.views >= 1000 ) {
      return <Popular><Component {...props} /></Popular>;
    } 
    
    if ( props.views <= 100 ) {
      return <New><Component {...props} /></New>;
    }

    return <Component {...props} />
  }
  
  c.displayName = `withHighlight(${displayName}WithHighlight)`;

  return c;
}

const VideoWithHighlight = withHighlight(Video);
const ArticleWithHighlight = withHighlight(Article);

export default function List({ list }: { list: TItemList[] }) {
  return list.map((item, idx) => {
    switch (item.type) {
      case 'video':
        return <VideoWithHighlight {...item} key={idx} />

      case 'article':
        return <ArticleWithHighlight {...item} key={idx} />
    }
  });
};