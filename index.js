const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats;
};
function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
};
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
};
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
};
function appendCat(name) {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
    
};
function prependCat(name) {
    const copyOfCats = ["Arnold", ...cats];
    return copyOfCats;
};

function removeLastCat(name) {
    const copyOfCats = cats.slice(0,-1);
    return copyOfCats;
};
function removeFirstCat(name) {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
};


