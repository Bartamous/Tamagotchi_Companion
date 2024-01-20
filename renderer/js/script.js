// Declare Variables
let hunger = 100;
let happy = 100;
let happyState = 0;

console.log('hunger ' + hunger);
console.log('happy' + happy);

  function hungerDepletion() {

        var randomNumber = Math.random();

        //check if ran num is less than 1/3
        if (randomNumber < 1 / 3) {

            //deplete hunger by 1
            hunger -= 1
            console.log('hunger depleted' + hunger);

            // check if hunger is at 0 and set to 0
            if (hunger < 0) {
                hunger = 0
            }

        } else {
            console.log('hunger not depleted' + hunger);
        }
    }

    function happyDepletion() {

        var randomNumber = Math.random();

        //check if ran num is less than 1/3
        if (randomNumber < 1 / 3) {

            //deplete happy by 1
            happy -= 1
            console.log('happy depleted' + happy);

            // check if hunger is at 0 and set to 0
            if (happy < 0) {
                happy = 0
            }

        } else {
            console.log('happy not depleted' + happy);
        }
}

// happy face

if (happy > 50) {

    function happyImageShow() {
        happyState = Math.random(0, 2)

        if (happyState == 0) {
            happyState0()
        }

        if (happyState == 1) {
            happyState1()
        }

        if (happyState == 2) {
            happyState2()
        }

        function happyState0() {
            document.getElementById('happyFaceContainer0').style.display = 'block';
            console.log('happy0');
        }

        function happyState1() {
            document.getElementById('happyFaceContainer1').style.display = 'block';
            console.log('happy1');
        }

        function happyState2() {
            document.getElementById('happyFaceContainer2').style.display = 'block';
            console.log('happy2');
        }

    }

    setInterval(happyImageShow, 1000);
}



setInterval(hungerDepletion, 1000);
setInterval(happyDepletion, 1000);