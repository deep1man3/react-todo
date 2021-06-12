import React, {FC} from "react";


const SmartRouter: FC = ({appRoute, layout: Layout, route}) => {
  return <Layout Page={appRoute.page} route={route}/>;
};

export default SmartRouter;