
export const Book = (plazos) => {
    const form = document.querySelector('#form');
    const formContainer = document.querySelector('.form-container-inputs')

    const saveData = () => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const day = document.querySelector('#day').value;

        if(name && email && day) {
            const data ={
                name,
                email,
                day,

            }
            localStorage.setItem('userturn', JSON.stringify(data));
        }
    }

    formContainer.innerHTML = `
    <div>
        <label for="name">Nombre:</label>
        <input id="name" placeholder="ingresa tu nombre" type="text">
    </div>
    <div>
        <label for="email">Email:</label>
        <input id="email" placeholder="ingrese su email" type="email">
    </div>
    <div>
        <label for="day">Dia</label>
        <input id="day" placeholder="" type="date">
    </div>
    <button id="save-button">RESERVAR TURNO.</button>
    `;

    const saveButton = document.querySelector('#save-button')
    saveButton.addEventListener('click', saveData)

    form.appendChild(formContainer);

    return form;
}