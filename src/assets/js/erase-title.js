var items = document.querySelectorAll(".item-cw");

console.log(items);

items.forEach(function(item) {
    item.addEventListener("dbclick", function() {
        console.log("Double click");
    });
});