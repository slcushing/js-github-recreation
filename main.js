(function() {
    'use strict';

    const base_url = 'https://api.github.com/users/slcushing';

    const generateHTML = (data) => {
        const source = document.querySelector('#bio-template').innerHTML;
        const template = Handlebars.compile(source);
        const html = template(data);
        document.querySelector('.container').innerHTML = html;
    }

     const generateRepos = (data) => {
        const source = document.querySelector('#repos-template').innerHTML;
        const template = Handlebars.compile(source);
        const html = template({data});
        document.querySelector('.container').innerHTML = html;
    }


Promise.all([
    
    fetch(`${base_url}`)
        .then(response => response.json())
        .then(data => generateHTML(data)),
        
    fetch(`${base_url}/repos`)
        .then(response => response.json())
        .then(data => generateRepos(data))

]);






})();