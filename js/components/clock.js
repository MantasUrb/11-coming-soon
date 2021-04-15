function calcTimeTillDate(date) {
    const targetDate = '2022-' +date;

    //logic

    return {
        days: 45,
        hours: 17,
        minutes: 35,
        seconds: 9
    }

}



function clock(selector, date) {
    const DOM = document.querySelector(selector);
    const timeLeft = calcTimeTillDate(date);
    const config = ['days', 'hours', 'minutes', 'seconds'];


    let HTML = '';

    for (const item of config) {
        HTML += `<div> class="time">
                    <div class="value">45</div>
                    <div class="label">hours</div>
                 </div>`
    }

    
    DOM.innerHTML = HTML;
}


export { clock }