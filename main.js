(function() {
    'use strict';

    const base_url = 'https://api.github.com/users/slcushing';



    const generateHTML = (data) => {
        const source = document.querySelector('#github-photo').innerHTML;
        const template = Handlebars.compile(source);
        const html = template(data);
        document.querySelector('.container').innerHTML = html;
    }
        

















})();