const input = 'This is a test, here Im [i]testing a [b]ne[/i]w[/b] method of safe innering. For egample <p>paragraph tag shouldnt working</p>. <img src=x onerror=alert(1)>';

document.getElementById('btnSubmit').addEventListener('click', function() {

    let text = input;
    text = text.replace(/</g, '&lt;');
    text = text.replace(/>/g, '&gt;');

    text = text.replace(/\[b]/g, '<b>');
    text = text.replace(/\[\/b]/g, '</b>');

    text = text.replace(/\[i]/g, '<i>');
    text = text.replace(/\[\/i]/g, '</i>');

    console.log(text);

    document.getElementById('main').innerHTML = text;
});

document.getElementById('form').addEventListener('change', function() {

    let text = document.getElementById('inbox').value;

    text = text.replace(/</g, '&lt;');
    text = text.replace(/>/g, '&gt;');

    text = text.replace(/\[b]/g, '<b>');
    text = text.replace(/\[\/b]/g, '</b>');

    text = text.replace(/\[i]/g, '<i>');
    text = text.replace(/\[\/i]/g, '</i>');

    text = text.replace(/\r?\n/g, '<br>');

    console.log(text);

    document.getElementById('main').innerHTML = text;
});
