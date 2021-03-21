import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import { ReactComponent as Bee } from 'assets/images/bee.svg';
import './biodiversity.scss';

const Biodiversity = () => {


  return (
    <Widget className="biodiversity">
      <WidgetHeader>
        <span className="title">Biodiversiteit</span>
      </WidgetHeader>
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