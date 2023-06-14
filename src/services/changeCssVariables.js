/* 
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "Light"
--theme-dark-УникальноеИмя    # для "Dark"
--theme-inert-УникальноеИмя   # для "Inert"
*/

export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    const cssVarables = ['header', 'bgImage', 'nav', 'navBorder'];

    cssVarables.forEach(element => { 
        root.style.setProperty(
            `--theme-default-${element}`, 
            `var(--theme-${theme}-${element})`
            ); 
        })
};