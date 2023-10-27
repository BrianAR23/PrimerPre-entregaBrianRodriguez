
export const Card = (props) => {
    
    let {moneda, tna, tea, id} = props
    let div = document.createElement('div');

    div.setAttribute('class', 'card-content');
    div.innerHTML = `
    <div class="card-body">
        <h2>${moneda}</h2>
        <p><span>TNA: ${tna}</span></p>
        <p><span>TEA: ${tea}</span></p>
    </div>
    `
    return div
}