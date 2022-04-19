import React from "react";
import './Gradient.css'
import Accordion from 'flowbite-react'

const AccordionList = ({ items }) => {
    const renderedItems = items.map(item => {
        return (
            <Accordion>
                <Accordion.Panel open={true}>
                    <Accordion.Title arrowIcon={undefined}>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>{item.content}</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        )
    })

    return (
        <div className="ui styled accordion" >
            {renderedItems}
        </div>

    )
}

export default AccordionList