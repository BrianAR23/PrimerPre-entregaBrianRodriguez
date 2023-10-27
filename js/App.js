import { Book } from "./components/Book.js";
import { CardContainer } from "./components/CardContainer.js";
import { SelectedTurn } from "./components/SelectedTurn.js";
import { operaciones } from "./helpers/data.js";

export const App = () => {
    let appRoot = document.querySelector('#root')

    const userData = JSON.parse(localStorage.getItem('userTurn'));
    
    
    appRoot.append(userData ? SelectedTurn() : '');
    appRoot.append(CardContainer({plazos: operaciones}));
    appRoot.append(Book({plazos: operaciones}));
    
}