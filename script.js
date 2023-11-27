

document.addEventListener('DOMContentLoaded', function() {

//Global Var
const imageCharacter = document.getElementById("characterImage");
const imageWeapon = document.getElementById("weaponImage");
const imageDropzone = document.getElementById("dropzoneImage");
const imageGear = document.getElementById("gearImage");
const imageMeds = document.getElementById("medsImage");
const imageBonus = document.getElementById("bonusImage");


//region Check box

document.getElementById("checkboxCharacter").addEventListener("change", function() {
    if (this.checked) {
        imageCharacter.src = "assets/images/Default/champrandom-466x262.jpg";
    } else {
        imageCharacter.src = "assets/images/Default/disable.png";
    }
});

document.getElementById("checkboxWeapon").addEventListener("change", function() {
    if (this.checked) {
        imageWeapon.src = "assets/images/Default/weapondefault-751x610.png";
    } else {
        imageWeapon.src = "assets/images/Default/disable.png";
    }
});

document.getElementById("checkboxDropzone").addEventListener("change", function() {
    if (this.checked) {
        imageDropzone.src = "assets/images/Default/dropzonedefault-466x398.jpg";
    } else {
        imageDropzone.src = "assets/images/Default/disable.png";
    }
});

document.getElementById("checkboxGear").addEventListener("change", function() {
    if (this.checked) {
        imageGear.src = "assets/images/Default/geardefault-751x529.png";
    } else {
        imageGear.src = "assets/images/Default/disable.png";
    }
});

document.getElementById("checkboxMeds").addEventListener("change", function() {
    if (this.checked) {
        imageMeds.src = "assets/images/Default/medsdefault-751x655.jpg";
    } else {
        imageMeds.src = "assets/images/Default/disable.png";
    }
});

document.getElementById("checkboxBonus").addEventListener("change", function() {
    if (this.checked) {
        imageBonus.src = "assets/images/Default/bonusdefault-751x586.jpg";
    } else {
        imageBonus.src = "assets/images/Default/disable.png";
    }
});


//endregion Check box


//region Button Randomize


document.getElementById('btnRandomize').addEventListener('click', function() {
    
    // Store a reference to the button
   let btn = this;
   // Disable the button after it's clicked
   btn.disabled = true;

    let millisecondAnimation = 1000;
    const delayAnimation = 850;

    if(document.getElementById("checkboxCharacter").checked)
    {
        imageCharacter.src= "assets/images/Default/loading.gif";
        setTimeout(randomizeCharacter, millisecondAnimation);
        millisecondAnimation += delayAnimation;
    }

    if(document.getElementById("checkboxWeapon").checked)
    {
        imageWeapon.src= "assets/images/Default/loading.gif";
        setTimeout(randomizeWeapon, millisecondAnimation);
        millisecondAnimation += delayAnimation;
    }

    if(document.getElementById("checkboxDropzone").checked)
    {
        imageDropzone.src= "assets/images/Default/loading.gif";
        setTimeout(randomizeDrop, millisecondAnimation);
        millisecondAnimation += delayAnimation;
    }

    if(document.getElementById("checkboxGear").checked)
    {
        imageGear.src= "assets/images/Default/loading.gif";
        setTimeout(randomizeGear, millisecondAnimation);
        millisecondAnimation += delayAnimation;
    }

    if(document.getElementById("checkboxMeds").checked)
    {
        imageMeds.src= "assets/images/Default/loading.gif";
        setTimeout(randomizeMeds, millisecondAnimation);
        millisecondAnimation += delayAnimation;
    }

    if(document.getElementById("checkboxBonus").checked)
    {
        imageBonus.src= "assets/images/Default/loading.gif";
        setTimeout(randomizeBonus, millisecondAnimation);
        millisecondAnimation += delayAnimation;
    }

    // Re-enable the button after the function has completed
    setTimeout(function() {
    btn.disabled = false;
    }, millisecondAnimation - delayAnimation + 100);
});

//endregion Button Randomize


//region Random Character

function randomizeCharacter() {
    const characters = [
        "Bangalore",
        "Bloodhound",
        "Gibraltar",
        "Lifeline",
        "Pathfinder",
        "Wraith",
        "Caustic",
        "Mirage",
        "Octane",
        "Wattson",
        "Crypto",
        "Revenant",
        "Loba",
        "Rampart",
        "Horizon",
        "Fuse",
        "Valkyrie",
        "Seer",
        "Ash",
        "Mad Maggie",
        "Newcastle",
        "Vantage",
        "Conduit"
      ];
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];
    document.getElementById('txtCharacter').innerText = randomCharacter;

    imageCharacter.src = "assets/images/Character/"+randomCharacter+".png";
}

//endregion Random Character 

//region Random Weapon

function randomizeWeapon() {
    const weaponRestrictions = [
        ["Assault Rifles only", 1],
        ["Pistols only", 2],
        ["Shotguns only", 1],
        ["SMGs only", 1],
        ["Sniper Rifles only", 3],
        ["Don't use grenades", 1],
        ["Only use weapons that use Light type ammo", 1],
        ["Only use weapons that use Heavy type ammo", 1],
        ["Only use weapons that use Energy type ammo", 1],
        ["Only use weapons that use Shotguns type ammo", 2],
        ["Pistols/Snipers only", 2],
        ["Choose between the first 3 weapons you encounter.", 2],
        ["Only use weapons from players killed with melee.", 3],
        ["Shotguns and SMGs only", 1],
        ["Only use pistols or shotguns.", 1],
        ["Snipers and Shotguns only", 2],
        ["Only use guns from dead players.", 3],
        ["Only Mozambique and P2020", 3],
        ["Only use the weapon you love the most", 1],
        ["Only use the weapon you hate the most", 3],
        ["Only use the first weapon you see", 3],
        ["Only use the first two weapon you see", 2],
        ["You can grab weapons only from bin", 2]
    ];

    const randomIndexWeapon = Math.floor(Math.random() * weaponRestrictions.length);
    const randomWeapon = weaponRestrictions[randomIndexWeapon];
    document.getElementById('txtWeapon').innerText = randomWeapon[0];
    
    imageWeapon.src = "assets/images/Default/weapondefault-751x610.png";
}

//endregion Random Weapon

//region Random Gear

function randomizeGear() {
    const gearRestrictions = [
        ["Only white Body shield.",3],
        ["No backpack.",1],
        ["Every time you kill someone, take his body shield.",2],
        ["You cannot take Body Shields from death boxes.",1],
        ["Drop all your stuff before landing.",2],
        ["Only use the shield you landed with.",1],
        ["No helmet.",1],
        ["No white Body Shield. Drop before landing.",2],
        ["Only Body Shield. No helmet, backpack and knockdown shield.",2],
        ["You cannot pick up Body Shield from the ground or bin.",1],
        ["No knockdown shield.",1]
    ];

    const randomIndexGear = Math.floor(Math.random() * gearRestrictions.length);
    const randomGear = gearRestrictions[randomIndexGear];
    document.getElementById('txtGear').innerText = randomGear[0];

    imageGear.src = "assets/images/Default/geardefault-751x529.png";
}
//endregion Random Gear

//region Random Gear

function randomizeDrop() {
    const dropRestrictions = [
        ["Hot Drop.",2],
        ["Land safe.",1],
        ["Contest at least one team.",2],
        ["Drop really near to an enemy.",3],
        ["Follow a team.",2],
        ["Instant drop.",1],
        ["Land close to a hot drop.",1],
        ["Pick a drop before starting the game.",1]
    ];

    const randomIndexDrop = Math.floor(Math.random() * dropRestrictions.length);
    const randomDrop = dropRestrictions[randomIndexDrop];
    document.getElementById('txtDropzone').innerText = randomDrop[0];

    imageDropzone.src = "assets/images/Default/dropzonedefault-466x398.jpg";
}
//endregion Random Gear


//region Random Meds

function randomizeMeds() {
    const medsRestrictions = [
        ["Only Medkit and Cells",1],
        ["Only Batteries and Sirynges",1],
        ["Only Medkit and Batteries.",1],
        ["Only Sirynges and Cells.",2],
        ["Only Phoenix Kit.",3],
        ["Only one type of heal, you choose.Example: only use batteries.",2],
        ["Choose between Heal meds or Body Shield meds.",2],
        ["Bring a maximum of one of every medical item.",3]
    ];

    const randomIndexMeds = Math.floor(Math.random() * medsRestrictions.length);
    const randomMeds = medsRestrictions[randomIndexMeds];
    document.getElementById('txtMeds').innerText = randomMeds[0];

    imageMeds.src = "assets/images/Default/medsdefault-751x655.jpg";
}
//endregion Random Meds

//region Random Bonus

function randomizeBonus() {
    const bonusRestrictions = [
        ["Win the game.",2],
        ["Get at least 2000 damage.",3],
        ["Get in Top 5.",1],
        ["Get in Top 3.",2],
        ["Get at least 5 Kill.",2],
        ["Get at least 10 Assit + Kill.",2],
        ["Be the damage leader in your team. (2000 damage if solo)",2],
        ["Get a wall jump kill.",1],
        ["Be the kill leader in your team. (5 kill if solo)",2],
        ["Knock an enemy with a melee attack.",1],
        ["Perform two executions on downed enemies.",2],
        ["Win a game with no Audio.",3],
        ["Get to top 3 with no Audio.",2],
        ["Be the assist leader in your team. (5 kill if solo).",2],
        ["Get a 360° kill.",1],
        ["Do a squad wipe.",3],
        ["Never get knocked down. (If you die last on your team it doesn't count as knocked down)",2],
        ["Be the kill leader or/and the damage leader in your team. (5 kill or/and 2000 damage if solo)",2],
        ["The sum of each kill in your team must be greater than or equal to the highest survival time.",3],
        ["All members of your squad having at least 4 kill each.",2],
        ["The total of the squad damage must be greater than 1500 multiply number of player.",3],
        ["You must achieve an average of 100 damage for every minute of your survival time.",2],
        ["Get at least 8 Assist + Kill.",1],
        ["Everyone on the team says a number, the greatest one will represent the minimun number of kills + assists everyone have to achieve in that match.",1],
        ["Get in top 3 by switching your main input device. (keyboard/controller)",3],
        ["Your kill must be greater than your assist. (5 kill if solo)",2],
        ["The first one picking in legend selection, must never be knocked, protect him. (He must be die last)",2],
        ["Get the highest survival time in your team. (NO ratting)",2],
        ["Let your team decide your sensitivity and get in Top 3.",3],
        ["Your assist must be greater than your kill. (5 kill if solo)",1],
        ["Be the knockdown leader in your team.",2]


    ];

    const randomIndexBonus = Math.floor(Math.random() * bonusRestrictions.length);
    const randomBonus = bonusRestrictions[randomIndexBonus];
    document.getElementById('txtBonus').innerText = randomBonus[0];

    imageBonus.src = "assets/images/Default/bonusdefault-751x586.jpg";
}
//endregion Random Meds


//region Helper


//endregion Helper

});