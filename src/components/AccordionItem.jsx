import PropTypes from "prop-types";

AccordionItem.propTypes = {
  faq: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
  }),
  activeIndex: PropTypes.number,
  handleIndex: PropTypes.func,
};

export default function AccordionItem({ activeIndex, handleIndex, faq }) {
  const active = activeIndex === faq.id ? "open" : "";
  return (
    <section className={`accordian-item ${active ? "active" : ""}`}>
      <button onClick={() => handleIndex(faq.id)}>
        <h2>{faq.question}</h2>
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
      </button>
      <article className={`${active ? "open" : ""}`}>
        <p>{faq.answer}</p>
      </article>
    </section>
  );
}