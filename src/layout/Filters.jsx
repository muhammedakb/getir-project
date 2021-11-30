import { useState } from "react";
import Filter from "../components/Filter";
import Sorting from "../components/Sorting";

const Filters = () => {
  const [selected, setSelected] = useState(null);
  return (
    <section id="filters-group">
      <Sorting select={selected} setSelect={setSelected} />
      <Filter type="brands" />
      <Filter type="tags" />
    </section>
  );
};

export default Filters;
