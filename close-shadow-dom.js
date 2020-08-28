{
    const shadow = document.querySelector('.shadow-close-host').attachShadow({ mode: 'closed' });

    const block = document.createElement('div');
    block.classList.add('inside-shadow');
    block.textContent = 'Div inside Shadow DOM';
    shadow.append(block);

    const style = document.createElement('style');
    style.textContent = `
        div {
            width: 200px;
            height: 200px;
            background: red;
            padding: 20px;
            text-align: center;
            margin: 8px;
        }
    `;

    shadow.prepend(style);
}