import { TVideo } from "../Types";
import DateTimePretty from "./DateTimePretty";

export default function Video(props:TVideo) {
  return (
      <div className="video">
          <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <DateTimePretty date={props.date} />
      </div>
  )
}