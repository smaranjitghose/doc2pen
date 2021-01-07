import Settings from "../Settings/Settings";
import Output from "../OutputComponent/Output";

const MainContainer = () => {
  return (
    <div className="row col-12 px-0 mx-0 mt-auto" style={{ height: "100%" }}>
      <div className="col-12 col-lg-6 px-0">
        <Settings />
      </div>
      <div className="col-12 col-lg-6 px-0">
        <Output />
      </div>
    </div>
  );
};
export default MainContainer;
