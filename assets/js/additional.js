function clearFields(inputId, fieldId) {
    var fieldId = document.getElementById(fieldId);
    var inputId = document.getElementById(inputId);

    inputId.value = "";
    fieldId.innerHTML = "";
}

function onlyNumeric(event) {
    var code = event.keyCode || event.which;

    if ((code <= 44 || code >= 58) && code != 8)
    {
        event.preventDefault();
        return false;
    }
}

function convertToTextual(number, fieldName) {
    var originalNumber = document.getElementById(number).value;

    var results = Number2TextJS(originalNumber);
    var area = document.getElementById(fieldName);

    area.setAttribute("style", "display: normal");

    if (results.error) {
        area.innerHTML = "Maximum 450 digits accepted..";
    } else {
        area.innerHTML = ' \
            <i class="icons fa fa-angle-double-right"></i> Original Number <a> <i class="redC">('+results.digits+' digits)</i> '+results.original+'</a> \
            <br> \
            <i class="icons fa fa-angle-double-right"></i> Textual Format <a>'+results.textual+'</a> \
            <br> \
            <!-- \
            <i class="icons fa fa-strikethrough"></i> Text as Voice \
            <a href="javascript:;" onclick="document.getElementById(\'speak\').play();"> \
                <audio id="speak" src="_tts.php?lang=tr&amp;tts='+results.textual+'"></audio> \
                <img title="Listen -'+results.textual+'-" alt="Listen -'+results.textual+'-" class="el" src="assets/img/play.png" /> \
            </a> \
            --> \
            <hr class="divider" /> \
        ';
    }
}
