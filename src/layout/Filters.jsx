import Filter from "../components/Filter";
import Sorting from "../components/Sorting";

const Filters = () => {
  return (
    <section id="filters-group">
      <Sorting />
      <Filter type="brands" />
      <Filter type="tags" />
    </section>
  );
};

export default Filters;
