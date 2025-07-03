fetch("{{site.url}}{{site.baseurl}}/img/icons.svg")
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        var div = document.createElement('div');
        div.innerHTML = text;
        document.body.insertBefore(div, document.body.childNodes[0]);
    });