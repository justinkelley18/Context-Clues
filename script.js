document.addEventListener('DOMContentLoaded', function () {
    var div = document.getElementById("#headingDiv");
    var createH3Elements = document.createElement("h3");
        var h3Text = document.createTextNode(`Accusation ${i}`);

    for (var i = 1; i <= 100; i++) {
        var personArr = ["Emma", "Matt", "Blake", "Mark", "Keith"];

        var locationName = ["Hallway", "Dining Room", "Ball Room", "Master Bedroom", "Bathroom"];

        var objArr = [
            "Knife",
            "Gun",
            "Sword",
            "Energy Sword",
            "Raygun",
            "Nunchucks",
            "Machete",
            "Baseball Bat",
            "Brass Knuckles",
            "Bow N Arrow",
            "Bear Trap",
            "Cup",
            "Boxing Gloves",
            "A jar of fingernails",
            "Sharpie",
            "Flamethrower",
            "Tire iron",
            "Sledgehammer",
            "Captain America's Shield",
            "Rusty Syringe",
        ]

        createH3Elements.appendChild(h3Text);
        div.appendChild(createH3Elements);

        createH3Elements.addEventListener("click", alertMsg(i));
    }

    function alertMsg(i) {
        function newAlert() {
            alert(`Accusation ${[i]}: I accuse ${personArr[i % 5]}, with the ${objArr[i % 20]} in the ${locationName[i % 10]}!`);
        }

        return newAlert;
    }
})