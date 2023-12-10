import { TVideo } from "../Types";
import Video from "./Video";

export default function VideoList({list}:{list: TVideo[]}) {
  return list.map((item, idx) => <Video url={item.url} date={item.date} key={idx} />);
}