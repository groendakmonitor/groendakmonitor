import Widget from "../Widget";
import { ReactComponent as Bee } from 'assets/images/bee.svg';
import 'react-circular-progressbar/dist/styles.css';
import './bidiversity.scss';
import WidgetBody from "../Widget/WidgetBody";

const Biodiversity = () => {


  return (
    <Widget className="biodiversity">
      <div className="widget-header">
        <span className="title">Biodiversiteit</span>
      </div>
      <WidgetBody>
        <div className="row">
          <div className="col-6">
            Per week
          </div>
          <div className="col-6">
            <Bee className="bee"/>
          </div>
        </div>
      </WidgetBody>
    </Widget>
  )
}

export default Biodiversity;