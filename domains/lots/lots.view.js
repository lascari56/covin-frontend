import React from "react";

import LotsFilters from "./components/filters"

import LayoutLots from "@layouts/lots"

const LotsView = ({lots}) => {
  return (
    <LayoutLots 
      {...lots}
      LeftComponent={<LotsFilters data={lots?.meta?.filters} units={lots?.units} onSubmit={lots?.onFilter} />}
    />
  );
};

export default LotsView;
