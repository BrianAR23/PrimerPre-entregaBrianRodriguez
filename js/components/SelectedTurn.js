
export const SelectedTurn = () => {
    const userData = JSON.parse(localStorage.getItem('userTurn'));

    const div = document.createElement('div');
    div.setAttribute('class', 'reserva container');

    div.innerHTML = `

    <div class="paseo-content">
        <div class="parseo-content-left">
            <h2>Turno Reservado</h2>
            <h3>Solicitant: ${userData.name}</h3>
            <p>Contacto: ${userData.email}</p>
            <p>Dia del Turno: ${userData.day}</p>
        </div>
        <div class="parseo-content-right>
        </div>
    </div>
    `;

    return div;
}