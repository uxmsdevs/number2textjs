/*!
 * Creates textual equivalent of given numbers which as long as 450 digits (in Turkish)
 */
/*!
 * Verilen bir sayiyinin turkce olarak metinsel okunusunu verir
 */
function Number2TextJS (inputId, textArea) {
    originalNumber = document.getElementById(inputId).value;
    area = document.getElementById(textArea);

    reFormedNumber = originalNumber;
    steps = [];
    newNumber = [];

    if (originalNumber.length > 450) {
        area.innerHTML = "Maximum 450 digits accepted..";
        return false;
    }

    numberLength = reFormedNumber.length;

    unitsDigits = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
    tensDigits = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
    biggerDigits = ["", "yüz", "bin", "milyon", "milyar", "trilyon", "katrilyon", "kentilyon", "seksilyon", "septilyon",
        "oktilyon", "nonilyon", "desilyon", "undesilyon", "dodesilyon", "tredesilyon", "kattuordesilyon", "kendesilyon",
        "sexdesilyon", "septendesilyon", "oktodesilyon", "novemdesilyon", "vigintilyon", "unvigintilyon", "dovigintilyon",
        "trevigintilyon", "kattuorvigintilyon", "kenvigintilyon", "sexvigintilyon", "septenvigintilyon", "oktovigintilyon",
        "novemvigintilyon", "trigintilyon", "untrigintilyon", "dotrigintilyon", "tretrigintilyon", "kattuortrigintilyon",
        "kentrigintilyon", "sextrigintilyon", "septentrigintilyon", "oktotrigintilyon", "novemtrigintilyon",
        "katragintilyon", "unkatragintilyon", "dokatragintilyon", "trekatragintilyon", "kattuorkatragintilyon",
        "kenkatragintilyon", "sexkatragintilyon", "septenkatragintilyon", "oktokatragintilyon", "novemkatragintilyon",
        "kenquagintilyon", "unkenquagintilyon", "dokenquagintilyon", "trekenquagintilyon", "kattuorkenquagintilyon",
        "kenkenquagintilyon", "sexkenquagintilyon", "septenkenquagintilyon", "oktokenquagintilyon", "novemkenquagintilyon",
        "sexagintilyon", "unsexagintilyon", "dosexagintilyon", "tresexagintilyon", "kattuorsexagintilyon",
        "kensexagintilyon", "sexsexagintilyon", "septensexagintilyon", "oktosexagintilyon", "novemsexagintilyon",
        "septuagintilyon", "unseptuagintilyon", "doseptuagintilyon", "treseptuagintilyon", "kattuorseptuagintilyon",
        "kenseptuagintilyon", "sexseptuagintilyon", "septenseptuagintilyon", "oktoseptuagintilyon", "novemseptuagintilyon",
        "oktogintilyon", "unoktogintilyon", "dooktogintilyon", "treoktogintilyon", "kattuoroktogintilyon",
        "kenoktogintilyon", "sexoktogintilyon", "septenoktogintilyon", "oktooktogintilyon", "novemoktogintilyon",
        "nonagintilyon", "unnonagintilyon", "dononagintilyon", "trenonagintilyon", "kattuornonagintilyon",
        "kennonagintilyon", "sexnonagintilyon", "septennonagintilyon", "oktononagintilyon", "novemnonagintilyon",
        "sentilyon", "senuntilyon", "sendotilyon", "sentretilyon", "senkattuortilyon", "senkentilyon", "sensextilyon",
        "senseptentilyon", "senoktotilyon", "sennovemtilyon", "sendesilyon", "senundesilyon", "sendodesilyon",
        "sentredesilyon", "senkattuordesilyon", "senkendesilyon", "sensexdesilyon", "senseptendesilyon", "senoktodesilyon",
        "sennovemdesilyon", "senvigintilyon", "senunvigintilyon", "sendovigintilyon", "sentrevigintilyon",
        "senkattuorvigintilyon", "senkenvigintilyon", "sensexvigintilyon", "senseptenvigintilyon", "senoktovigintilyon",
        "sennovemvigintilyon", "sentrigintilyon", "senuntrigintilyon", "sendotrigintilyon", "sentretrigintilyon",
        "senkattuortrigintilyon", "senkentrigintilyon", "sensextrigintilyon", "senseptentrigintilyon", "senoktotrigintilyon",
        "sennovemtrigintilyon", "senkatragintilyon", "senunkatragintilyon", "sendokatragintilyon", "sentrekatragintilyon",
        "senkattuorkatragintilyon", "senkenkatragintilyon", "sensexkatragintilyon", "senseptenkatragintilyon",
        "senoktokatragintilyon"
    ];

    if (numberLength % 3 == 0) {
        basamak_sayisi = parseInt(numberLength / 3);
    } else {
        basamak_sayisi = parseInt(numberLength / 3 + 1);
    }


    if (numberLength % 3 == 1) {
        reFormedNumber = "00" + reFormedNumber;
    } else if (numberLength % 3 == 2) {
        reFormedNumber = "0" + reFormedNumber;
    };


    for (var i = 0, j = 1; i < basamak_sayisi; i++) {
        steps[i] = reFormedNumber.substr(j - 1, 3);
        j = j + 3;
    };

    negatif = "";
    if (originalNumber.charAt(0) == "-") {
        negatif = "Eksi ";
    };


    for (var i = 0, j = basamak_sayisi; i < j; i++){
        if (steps[i][0] > 0 ) {
            newNumber += (steps[i][0] > 1 ? unitsDigits[steps[i][0]]+'' : '')+biggerDigits[1]+" ";
        };

        if (steps[i][1] > 0 ) {
            newNumber += tensDigits[steps[i][1]]+" ";
        };

        if (steps[i][2] > 0 && !(basamak_sayisi == 2 && steps[i][0] == 0 && steps[i][1] == 0 && steps[i][2] == 1)) {
            newNumber += unitsDigits[steps[i][2]]+" ";
        };

        if(basamak_sayisi > 1 && (steps[i][0] > 0 || steps[i][1] > 0 || steps[i][2] > 0) ) {
            newNumber += biggerDigits[basamak_sayisi]+" ";
        };

        --basamak_sayisi;
    };

    document.getElementById(textArea).setAttribute("style", "display: normal");

    area.innerHTML = '\
        <i class="icons fa fa-angle-double-right"></i> GİRİLEN SAYI <a> <i class="redC">('+originalNumber.length()+' harf)</i> '+originalNumber+'</a> \
        <br> \
        <i class="icons fa fa-angle-double-right"></i> SAYININ OKUNUŞU <a>'+negatif+newNumber+'</a> \
        <br> \
        <i class="icons fa fa-strikethrough"></i> SESLİ OKUNUŞU <i class="redC">(Sesli okuma için internet gereklidir)</i> \
        <a onclick="document.getElementById(\'oku\').play();">\
            <audio id="oku" src="_tts.php?lang=tr&amp;tts='+negatif+newNumber+'"></audio>\
            <img title="'+negatif+newNumber+' okunuşunu dinle.." alt="'+negatif+newNumber+' okunuşunu dinle.." class="el" src="assets/img/play.png" />\
        </a> \
        <hr class="divider" />\
    ';
}
