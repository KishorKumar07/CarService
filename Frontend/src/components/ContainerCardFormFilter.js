import { useMemo } from "react";
import "./ContainerCardFormFilter.css";
const ContainerCardFormFilter = ({ carDimensions, div2TmpSTop }) => {
  const divpgEwoIcon1Style = useMemo(() => {
    return {
      top: div2TmpSTop,
    };
  }, [div2TmpSTop]);

  return (
    <div className="div-3foey1">
      <div className="div-2tmps4">
        <div className="span-3l0pg4">
          <img className="div-3wrwr-icon1" alt="" src="/undefined15.png" />
          <b className="heading-54">Email</b>
        </div>
        <div className="link-infogomechanicin1">Info@Carservice.in</div>
      </div>
      <div className="div-2tmps5">
        <div className="span-3l0pg4">
          <img
            className="divpgewo-icon1"
            alt=""
            src="/undefined16.png"
            style={divpgEwoIcon1Style}
          />
          <b className="heading-55">Phone Number</b>
        </div>
        <div className="link-93888938881">9388893888</div>
      </div>
      <div className="div-2tmps6">
        <div className="span-3l0pg4">
          <img className="divpgewo-icon1" alt="" src="/undefined17.png" />
          <b className="heading-56">Working Days</b>
        </div>
        <div className="link-infogomechanicin1">Monday - Sunday</div>
      </div>
      <div className="div-2tmps7">
        <div className="span-3l0pg4">
          <img className="div-2x3cu-icon1" alt="" src="/undefined18.png" />
          <b className="heading-57">Working Hours</b>
        </div>
        <div className="am-900pmist1">7:00AM - 9:00PM(IST)</div>
      </div>
      <div className="link-playstorepng-group">
        <img className="link-playstorepng1" alt="" src="/undefined19.png" />
        <img className="link-playstorepng1" alt="" src={carDimensions} />
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
