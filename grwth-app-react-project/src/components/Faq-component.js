import { Accordion } from './accordion-component'
export function Faq({ faqs }) {
    return (
        <section className="faq bg-light">
            <div className="container-sm">
                <h3 className="text-xl text-center">Frequently Asked Questions</h3>
                <ul className="faq-menu">
                    <li className="active">All</li>
                    <li>Getting started</li>
                    <li>Pricing</li>
                </ul>
                <div className="faq-content"> <Accordion faqs={faqs} /> </div>
            </div>
        </section>
    )
}