{
    const shadow = document.querySelector('.shadow-open-host')
        .attachShadow({ mode: 'open' });

    const block = document.createElement('div');
    block.classList.add('inside-shadow');
    block.textContent = 'Div inside Shadow DOM';
    shadow.append(block);

    const style = document.createElement('style');
    style.textContent = `
        :host{
            background: yellow;
        }

        div {
            width: 200px;
            height: 200px;
            background: blue;
            padding: 20px;
            text-align: center;
            margin: 8px;
        }
    `;

    shadow.prepend(style);

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', './style-shadow.css');
    shadow.prepend(link);
}