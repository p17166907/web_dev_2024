import { useState } from "react";

export function Accordion({ faqs }) {
    console.log(faqs);
    return (
        <>
            {<div className=" faq-group"> {faqs.map((faqEl, index) => <AccordionItem key={index} title={faqEl.title} answer={faqEl.text} />)}</div >}
        </>
    )
}

export function AccordionItem({ title, answer }) {
    const [open, setIsOpen] = useState(true)
    const handleClick = () => { setIsOpen(!open) }
    console.log('AccordionItem component - open', open);
    return (
        <div className="faq-group" onClick={handleClick}>
            <div className="faq-group-header">
                <h4 className="text-md">{title}</h4>
                {(open) ? (<i className="fas fa-minus" />) : (<i className="fas fa-plus" />)}

            </div>
            <div className="faq-group-body open">{(open) ? (<p>{answer}</p>) : (null)} </div>
        </div>)
}