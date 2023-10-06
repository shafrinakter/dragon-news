
import FindUsON from "./findUsOn/FindUsON";
import LogingRightSide from "./loginRightSide/logingRightSide";
import Q_Zone from "./q_Zone/Q_Zone";

const RightSideNav = () => {
    return (
        <div>
            <LogingRightSide></LogingRightSide>
            <FindUsON></FindUsON>
            <Q_Zone></Q_Zone>
        </div>
    );
};

export default RightSideNav;