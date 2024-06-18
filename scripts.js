$(document).ready(function() {
    $('#asciiToWordBtn').click(function() {
        var input = $('#inputText').val();
        var output = input.split(' ').map(function(char) {
            return String.fromCharCode(parseInt(char));
        }).join('');
        $('#outputText').val(output);
    });

    $('#wordToAsciiBtn').click(function() {
        var input = $('#inputText').val();
        var output = input.split('').map(function(char) {
            return char.charCodeAt(0);
        }).join(' ');
        $('#outputText').val(output);
    });

    $('#copyOutputBtn').click(function() {
        var outputText = $('#outputText');
        outputText.select();
        document.execCommand('copy');
        alert('Output copied to clipboard!');
    });

    $('#clearInputBtn').click(function() {
        $('#inputText').val('');
    });

    $('#clearOutputBtn').click(function() {
        $('#outputText').val('');
    });
});
