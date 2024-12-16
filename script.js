const sheltersMap = document.getElementById('shelter-map');

sheltersMap.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
        document.sheltersMap.removeChild('loader');
    })
})