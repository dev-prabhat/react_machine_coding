import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Heading 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque maxime vero quod tempore ullam in voluptates ipsum. Nesciunt maiores,  ",
  },
  {
    title: "Heading 2",
    description:
      "Eos dolore quas iste dolores, sunt a ullam aliquam incidunt, cum fugit sequi blanditiis, iure rem animi est! Adipisci ipsa corrupti nisi?",
  },
  {
    title: "Heading 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque maxime vero quod tempore ullam in voluptates ipsum. Nesciunt maiores,  ",
  },
  {
    title: "Heading 4",
    description:
      "Eos dolore quas iste dolores, sunt a ullam aliquam incidunt, cum fugit sequi blanditiis, iure rem animi est! Adipisci ipsa corrupti nisi?",
  },
];
const Accordion = () => {
  return (
    <div>
      {data.map((item) => (
        <AccordionItem key={item.title} {...item}/>
      ))}
    </div>
  );
};

export default Accordion;
