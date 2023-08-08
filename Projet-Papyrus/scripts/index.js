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

    //INDEX
    let titre_index = document.getElementById("titre_index");
    let descriptif_index = document.getElementById("descriptif_index");
    let link_about = document.getElementById("link_about");
    let link_bibli = document.getElementById("link_bibli");

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

    //INDEX
    titre_index.innerHTML = translations[language]["titre_index"];
    descriptif_index.innerHTML = translations[language]["descriptif_index"];
    link_about.innerHTML = translations[language]["link_about"];
    link_bibli.innerHTML = translations[language]["link_bibli"];

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