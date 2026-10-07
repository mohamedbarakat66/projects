const menuItems = [
    {
        id: 1,
        title: "Ful & Falafel",
        category: "breakfast",
        price: "$5.00",
        desc: "Traditional hot and delicious Egyptian breakfast meal.",
        icon: "fa-bowl-food"
    },

    {
        id: 2,
        title: "Eggs with Pastrami",
        category: "breakfast",
        price: "$8.00",
        desc: "Fresh eggs cooked with savory authentic beef pastrami.",
        icon: "fa-egg"
    },

    {
        id: 3,
        title: "Crispy Chicken Sandwich",
        category: "lunch",
        price: "$12.00",
        desc: "Crispy fried chicken breast with special house sauce.",
        icon: "fa-burger"
    },

    {
        id: 4,
        title: "Grilled Sausage",
        category: "lunch",
        price: "$10.50",
        desc: "Juicy oriental spiced grilled sausages.",
        icon: "fa-hotdog"
    },

    {
        id: 5,
        title: "Fresh Mango Juice",
        category: "drinks",
        price: "$4.00",
        desc: "Chilled and refreshing pure fresh mango juice.",
        icon: "fa-glass-water"
    },

    {
        id: 6,
        title: "Turkish Coffee",
        category: "drinks",
        price: "$3.00",
        desc: "Rich and perfectly brewed traditional Turkish coffee.",
        icon: "fa-mug-hot"
    }
];


const menuContainer = document.getElementById("menuContainer");

const Buttons = document.querySelectorAll(".btn");


function displayMenuItems(items) {

    let displayMenu = items.map(function (item) {

        return `
            <div class="menu-item">

                <div class="item-icon">
                    <i class="fa-solid ${item.icon}"></i>
                </div>

                <h3>${item.title}</h3>

                <p>${item.desc}</p>

                <div class="price">
                    ${item.price}
                </div>

            </div>
        `;
    });


    displayMenu = displayMenu.join("");

    menuContainer.innerHTML = displayMenu;
}


window.addEventListener("DOMContentLoaded", function () {

    displayMenuItems(menuItems);

});


Buttons.forEach(function (btn) {

    btn.addEventListener("click", function (e) {

        Buttons.forEach(function (b) {
            b.classList.remove("active");
        });


        e.currentTarget.classList.add("active");


        const category = e.currentTarget.dataset.category;


        if (category === "all") {

            displayMenuItems(menuItems);

        } else {

            const filteredMenu = menuItems.filter(function (item) {

                return item.category === category;

            });

            displayMenuItems(filteredMenu);
        }

    });

});