let language = navigator.language;

if (language !== "fr" && language !== "en") {
    language = "en";
}

function translate() {
    //HEADER
    let menu1_header = document.getElementById("menu1_header");
    let menu2_header = document.getElementById("menu2_header");
    let menu3_header = document.getElementById("menu3_header");
    let menu4_header = document.getElementById("menu4_header");

    //ABOUT
    let titre_about = document.getElementById("titre_about");
    let descriptif_about = document.getElementById("descriptif_about");
    let info_about = document.getElementById("info_about");

    //FOOTER
    let menu1_footer = document.getElementById("menu1_footer");
    let menu2_footer = document.getElementById("menu2_footer");
    let menu3_footer = document.getElementById("menu3_footer");
    let menu4_footer = document.getElementById("menu4_footer");
    
    //----------------------------

    //HEADER
    menu1_header.innerHTML = translations[language]["menu1_header"];
    menu2_header.innerHTML = translations[language]["menu2_header"];
    menu3_header.innerHTML = translations[language]["menu3_header"];
    menu4_header.innerHTML = translations[language]["menu4_header"];

    //ABOUT
    titre_about.innerHTML = translations[language]["titre_about"];
    descriptif_about.innerHTML = translations[language]["descriptif_about"];
    info_about.innerHTML = translations[language]["info_about"];

    //FOOTER
    menu1_footer.innerHTML = translations[language]["menu1_footer"];
    menu2_footer.innerHTML = translations[language]["menu2_footer"];
    menu3_footer.innerHTML = translations[language]["menu3_footer"];
    menu4_footer.innerHTML = translations[language]["menu4_footer"];

}

let translations;
fetch('scripts/languages.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        translate();
    });

function switchLanguage(newLanguage) {
    language = newLanguage;
    translate();
}