function chanteFontSize(type) {
    let max = 0;
    let elems = ["#js0", "#js1", "#js2", "#js3", "#js4", "#js5", "#js6", "#js7", "#js8", "#js9", "#js10", "#js11", "#js12", "#js13", "#js14", "#js15", "#js16", "#js17", "#js18", "#js19", "#js20", "#js21", "#js22", "#js23", "#js24", "#js25", "#js26", "#js27", "#js28", "#js29", "#js30", "#js31", "#js32", "#js33", "#js34", "#js35", "#js36", "#js37", "#js38", "#js39", "#js40", "#js41", "#js42", "#js43", "#js44", "#js45", "#js46", "#js47", "#js48", "#js49", "#js50", "#js51", "#js52", "#js53", "#js54", "#js55", "#js56", "#js57", "#js58", "#js59", "#js60", "#js61", "#js62", "#js63", "#js64", "#js65", "#js66", "#js67", "#js68", "#js69", "#js70", "#js71", "#js72", "#js73"]
    elems.forEach(el => {
        let elem = document.querySelector(el);

        let fontS = window.getComputedStyle(elem, null).getPropertyValue("font-size");
        fontS = parseFloat(fontS);

        if (max < fontS + 3) {
            max = fontS;
        }
        if (type === 'i') {
            if (fontS < 50) {
                elem.style.fontSize = (fontS + 3) + "px";
            }
        } else {
            elem.style.fontSize = (fontS - 3) + "px";
        }

    })
    console.log(type);
    console.log(max);
}