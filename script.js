

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
    
    if(document.getElementById("checkboxCharacter").checked)
    {
        randomizeCharacter();
    }

    if(document.getElementById("checkboxWeapon").checked)
    {
        randomizeWeapon();
    }

    if(document.getElementById("checkboxGear").checked)
    {
        randomizeGear();
    }

    if(document.getElementById("checkboxDropzone").checked)
    {
        randomizeDrop();
    }

    if(document.getElementById("checkboxMeds").checked)
    {
        randomizeMeds();
    }

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
}
//endregion Random Meds

});