games.custom.title = 'Insurgence';
games.custom.locations = [];

/*
Format for Locations:
{
    "name": "Insert Name Here",
    "value": integer
}
*/

setTimeout(function() {
    var head = document.querySelector('div#gameMenu div.menu');

    document.querySelectorAll('div#gameMenu div.menu .item').forEach((val, key, parent) => {
        if (!val.classList.contains('active')) {
            head.removeChild(val);
        }
    });

    $('div.button').click = null;
    var inputs = $('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].id !== 'dark-theme') {
            inputs[i].disabled = true;
        }
    }

    $('input.search').unbind('click');
    $('input[name=status]').parent().unbind('click');
    $('button').prop('disabled', true);
    $('label#loadData').unbind('click');
}, 100);