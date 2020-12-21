// by Alexis Mora

var cookieDuration = 14                      // Number of days before the cookie expires, and the banner reappears
var cookieName = 'ac_cookies'               // Name of our cookie
var cookieValue = 'on'                     // Value of cookie
var bannerText = 'TO-DO'                  //The text our banner will recieve

function createBanner(){
    let divLinkPrivacyCookies = 'TO-DO' //<a href="/privacy-cookies-policy/" rel="nofollow" title="Privacy &amp; Cookies Policy">privacy and cookies policy</a>
    //TO-DO: 
        //We have to create the banner with the cookies, on accept it has to create the cookie and close the banner.
        let texts = getTextsByLang()
    bootbox.dialog({
        message: texts.message,
        size: 'large',
        onEscape: false,
        backdrop: null,
        closeButton:false,
        centerVertical:true,
        buttons: {
            Accept: {
                label: texts.buttonCaption,
                className: 'btn-primary',
                callback: ()=>{
                    console.log("KLK")
                    createCookie(window.cookieName,window.cookieValue, window.cookieDuration)} // Create the cookie 
            },
        }
    })          
}
 
 
function createCookie(name,value,days) {

        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = `; expires=${+date.toGMTString()}`
        document.cookie = `${name}=${value}${expires}path=/` 
}
 
function checkCookie(name) {
    var nameEQ = name + "="
    var ca = document.cookie.split(';')
    for(var i=0;i < ca.length;i++) {
        var c = ca[i]
        
        while (c.charAt(0)==' ') c = c.substring(1,c.length)
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length)

    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
 
window.onload = function(){
    if(checkCookie(window.cookieName) != window.cookieValue){
        createBanner(); 
    }
}
function getTextsByLang(){
    let lang = document.querySelector('#dropDownLag > img').alt
    switch(lang){
        case 'es':
            return {
                message: `Esta web utiliza cookies para ofrecer, evaluar y mejorar el servicio ofrecido a nuestros visitantes. 
                          Si continúa navegando consideramos que está de acuerdo con su uso. 
                          Podrá revocar el consentimiento y obtener más información consultando nuestra
                          <a href="/info/policy" rel="nofollow" title="politica de cookies">Política de Cookies</a>`,

                buttonCaption: 'Aceptar',
            }
        case 'en':
            return {
                message: `This web uses cookies to evaluate and improve the service given to our visitors. 
                          If you continue navegating, we consider that you are in agreement with its use.
                          You can revoke agreement and obtain more information by consulting our
                          <a href="/info/policy" rel="nofollow" title="Cookies Policy">Cookies Policy</a>`,
                buttonCaption: 'Accept',
            }
        case 'de':
            return {
                message: `Diese Website verwendet Cookies, um den unseren Besuchern angebotenen Service anzubieten, 
                          zu bewerten und zu verbessern. Wenn Sie weiter surfen, stimmen Sie der Verwendung zu. 
                          Sie können die Einwilligung widerrufen und weitere Informationen erhalten, indem Sie unsere 
                          <a href="/info/policy" rel="nofollow" title="Cookie-Richtlinie">Cookie-Richtlinie</a>  lesen`,
                buttonCaption: 'Akzeptieren',
            }
        case 'fr':
            return {
                message: `Ce site utilise des cookies pour offrir, évaluer et améliorer le service offert à nos visiteurs. 
                Si vous continuez à naviguer, nous considérons que vous acceptez leur utilisation. 
                Vous pouvez révoquer votre consentement et obtenir plus d'informations en consultant notre 
                <a href="/info/policy" rel="nofollow" title="politique de cookies">politique de cookies</a>`,
                buttonCaption: 'Accepter',
            }

    }

}
