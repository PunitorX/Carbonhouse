const event = document.querySelector(".hero-bottom");

function createEvent([img, date, day, name, tour]) {
    const guest = `
    <div class="hero-card">
        <div class="hero-img">
            <div class="hero-overlay">
                <a class="hero-link">Tickets</a>
            </div>
            <img src="${img}" alt="">     
        </div>
        <div class="hero-event">
            <div class="hero-date">
                ${date}
            </div>
            <div class="hero-day" id="hero-curve">
                ${day}
            </div>
        </div>
        <div class="hero-person">
            <div class="hero-name">
                ${name}
            </div>
            <div class="hero-tour">
                ${tour}
            </div>
        </div>
    </div>
    `;

    event.innerHTML += guest;
}

const guest1 = [
    'images/Niki.jpg',
    'July 25, 2015',
    'Friday',
    'Nicki Minaj',
    'The Pink Print Tour'];

const guest2 = [
    'images/Nick Jonas.png',
    'July 30, 2015',
    'Saturday',
    'Nick Jonas',
    "'Live in Concert' Tour"];

const guest3 = [
    'images/Taylor Swift.png',
    'August 06, 2015',
    'Thursday',
    'Taylor Swift',
    'The 1989 World Tour'];
    
const guest4 = [
    'images/Sam Smith.png',
    'August 15, 2015',
    'Saturday',
    'Sam Smith',
    'In the Lonely Hour Tour'];

const guest5 = [
    'images/Iggy.png',
    'August 22, 2015',
    'Friday',
    'Iggy Azalea',
    "'Great Escape' Tour"];
        
const guest6 = [
    'images/Brandon Flowers.png',
    'August 30, 2015',
    'Saturday',
    'Brandon Flowers',
    'with Temper Trap'];

createEvent(guest1);
createEvent(guest2);
createEvent(guest3);
createEvent(guest4);
createEvent(guest5);
createEvent(guest6);
