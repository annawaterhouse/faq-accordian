import AccordionItem from "./AccordionItem.jsx";
import {data} from "./data.js";
import { useState } from "react";

export default function Accordian() {
  /* keep track of the open and closed states of the items */
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIndex = (id) => {
    if (activeIndex === id) return setActiveIndex(null);
    setActiveIndex(id);
};

  return (
    <section className="right">
      <h1>faq</h1>
      {data?.map((faq) => (
        <AccordionItem key={faq.id} faq={faq} activeIndex={activeIndex} handleIndex={handleIndex} />
      ))}
    </section>
  );
}
