import {Card} from "./Card.js";

export const CardContainer = (props) => {
    
    let {plazos} = props;
    let section = document.createElement('section');

    section.setAttribute('class', 'card-container')
    plazos.forEach(plazos => {
        const card = Card(plazos)
        section.append(card);
    });

    return section;
}