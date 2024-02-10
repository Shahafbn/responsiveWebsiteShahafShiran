function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("main-nav").classList.add("hide-mobile");

    // CSS button + CSS Modal + Add click event listener to CSS button to trigger CSS modal
    const cssButton = document.getElementById('CSS_button');
    const cssModal = new bootstrap.Modal (document.getElementById('CSS_modal'));
    cssButton.addEventListener('click', () => { cssModal.show(); });

    // C# button + C# Modal + Add click event listener to c# button to trigger c# modal
    const csButton = document.getElementById('CS_button');
    const csModal = new bootstrap.Modal (document.getElementById('CS_modal'));
    csButton.addEventListener('click', () => csModal.show());

    // HTML button + HTML Modal + Add click event listener to HTML button to trigger HTML modal
    const htmlButton = document.getElementById('HTML_button');
    const htmlModal = new bootstrap.Modal (document.getElementById('HTML_modal'));
    htmlButton.addEventListener('click', () => htmlModal.show());

    // C++ button + C++ Modal + Add click event listener to C++ button to trigger C++ modal
    const cppButton = document.getElementById('CPP_button');
    const cppModal = new bootstrap.Modal (document.getElementById('CPP_modal'));
    cppButton.addEventListener('click', () => cppModal.show());

    // java
    const javaButton = document.getElementById('JAVA_button');
    const javaModal = new bootstrap.Modal (document.getElementById('JAVA_modal'));
    javaButton.addEventListener('click', () => javaModal.show());

    // scratch
    const scratchButton = document.getElementById('SCRATCH_button');
    const scratchModal = new bootstrap.Modal (document.getElementById('SCRATCH_modal'));
    scratchButton.addEventListener('click', () => scratchModal.show());

    // python
    const pythonButton = document.getElementById('PYTHON_button');
    const pythonModal = new bootstrap.Modal (document.getElementById('PYTHON_modal'));
    pythonButton.addEventListener('click', () => pythonModal.show());

    // sql
    const sqlButton = document.getElementById('SQL_button');
    const sqlModal = new bootstrap.Modal (document.getElementById('SQL_modal'));
    sqlButton.addEventListener('click', () => sqlModal.show());

    //javascript
    const javascriptButton = document.getElementById('JAVASCRIPT_button');
    const javascriptModal = new bootstrap.Modal (document.getElementById('JAVASCRIPT_modal'));
    javascriptButton.addEventListener('click', () => javascriptModal.show());

    // ruby
    const rubyButton = document.getElementById('RUBY_button');
    const rubyModal = new bootstrap.Modal (document.getElementById('RUBY_modal'));
    rubyButton.addEventListener('click', () => rubyModal.show());

    // all filter checkboxes
    let filterCheckboxes = document.querySelectorAll("input[type='checkbox']");

    for (let i = 0; i < filterCheckboxes.length; i++) {
        filterCheckboxes[i].addEventListener('change', showRelevantCards);
        filterCheckboxes[i].setAttribute('checked', '');
    }

    // all filter buttons + adding them hover trigger
    let filterButtons = Array.from(document.getElementsByClassName('btn-outline-info'));
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener('mouseover',(e) => {showRelevantCardsOnHover(e);});
        filterButtons[i].addEventListener('mouseout', showAllCards);
    }

    });


// first: hides all cards. second: turns on relevant cards 
function showRelevantCards() {
    // all filter checkboxes
    let filterCheckboxes = document.querySelectorAll("input[type='checkbox']");
    
    hideAllCards();
    for (let i = 0; i < filterCheckboxes.length; i++) {
        if (filterCheckboxes[i].checked) {
            checkboxType = getCheckboxType(filterCheckboxes[i]);
            let cardsOfCheckboxType = Array.from(document.getElementsByClassName(checkboxType));
            cardsOfCheckboxType.map((i)=>i.classList.remove('hiddenCard'));
        }
    }
}

// hides all the cards when marking/unmarking a filter checkbox.
function hideAllCards(){
    let cards = document.querySelectorAll("div.card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("hiddenCard");
    }
}

//helper function to get the card group name.
function getCheckboxType (checkbox) {
    return (checkbox.id);
}

function showRelevantCardsOnHover (e) {
    const hoveredBtnId = (e.target.id).substr(4);
    hideAllCards();
    let cardsOfHoveredBtnId = Array.from(document.getElementsByClassName(hoveredBtnId));
    cardsOfHoveredBtnId.map((i)=>i.classList.remove('hiddenCard'));
}

function showAllCards(){
    let cards = document.querySelectorAll("div.card");
    for (let i = 0; i<cards.length; i++) {
        cards[i].classList.remove("hiddenCard");
    }
}