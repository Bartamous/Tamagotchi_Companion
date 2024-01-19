// Declare Variables
let hunger = 100;
let happy = 100;
let faceState = 0;

console.log('hunger ' + hunger);
console.log('happy' + happy);

while (true) {

    function hungerDepletion() {

        var randomNumber = Math.random();

        //check if ran num is less than 1/3
        if (randomNumber < 1 / 3) {

            //deplete hunger by 1
            hunger -= 1
            console.log('hunger depleted');

            // check if hunger is at 0 and set to 0
            if (hunger < 0) {
                hunger = 0
            }

        } else {
            console.log('hunger not depleted');
        }
    }

    function happyDepletion() {

        var randomNumber = Math.random();

        //check if ran num is less than 1/3
        if (randomNumber < 1 / 3) {

            //deplete happy by 1
            happy -= 1
            console.log('happy depleted');

            // check if hunger is at 0 and set to 0
            if (happy < 0) {
                happy = 0
            }

        } else {
            console.log('happy not depleted');
        }
    }

    setInterval(hungerDepletion, 1000);
    setInterval(happyDepletion, 1000);

}