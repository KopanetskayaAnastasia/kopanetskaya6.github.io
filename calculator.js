function updatePrice() {
    let s = document.getElementsByName("myselect");
    let select = s[0];
    let price = 0;
    let prices = {
        types: [120, 150, 330, 180, 160],
        options: {
            2: 100,
        },
        checkboxes: {
            1: 10,
            2: 50,
            3: 80,
        }
    };

    price = prices.types[select.value - 1];

    let radioDiv = document.getElementById("radiobuttons");
    radioDiv.style.display = (select.value == "2" || select.value == "4" ? "block" : "none");
    let radios = document.getElementsByName("options");
    radios.forEach(
        function(radio)
        {
            if (radio.checked) 
            {
                if (prices.options[radio.value] !== undefined) 
                {
                    price += prices.options[radio.value];
                }
            }
        }
    );

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "1" || select.value == "2" || select.value == "4" ? "none" : "block");
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(
        function(checkbox) 
        {
            if (checkbox.checked) 
            {
                price += prices.checkboxes[checkbox.name];
            }
        }
    );

    let count = document.getElementById("count").value;
    if(parseInt(count) < 0) {
        let Price = document.getElementById("price");
        Price.innerHTML = "Введенное количество меньше нуля";
    }
    else {
        price *= parseInt(count);
        if(select.value != "2" && select.value != "4") 
        {
            if(price - prices.types[select.value - 1] * count >= 100 && select.value != "1" && price-prices.types[select.value - 1] * count!=130 && price-prices.types[select.value - 1] * count!=140) {
                price -= 100 * count;
            }
            if(select.value == "1") {
                price = prices.types[0] * count;
            }
        }
        else if(price/count-prices.types[select.value - 1] == 10 || price/count-prices.types[select.value - 1] == 110) {
        price -= 10 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 50 || price/count-prices.types[select.value - 1] == 150) {
            price -= 50 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 80 || price/count-prices.types[select.value - 1] == 180) {
            price -= 80 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 60 || price/count-prices.types[select.value - 1] == 160) {
            price -= 60 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 90 || price/count-prices.types[select.value - 1] == 190) {
            price -= 90 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 130 || price/count-prices.types[select.value - 1] == 230) {
            price -= 130 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 140 || price/count-prices.types[select.value - 1] == 240) {
            price -= 140 * count;
        }
        let Price = document.getElementById("price");
        Price.innerHTML = price + " рублей";
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radiobuttons");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("myselect");
    let select = s[0];
    select.addEventListener("change", function(event) {
        updatePrice();
    });
    let count = document.getElementById("count");
    count.addEventListener("change", function(event) {
        updatePrice();
    });
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    updatePrice();
});