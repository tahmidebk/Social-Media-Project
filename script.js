$(".young").hover(function() {
	let imgSelector = $(this).find('img');
    let divSelector = $(this).find('div');
	$(imgSelector).toggle();
    $(divSelector).toggle();
});

$(".onebt").click(function() {
    $(".about").slideDown();
    });

$(".twobt").click(function() {
    $(".fam").slideDown();
    });

$(".threebt").click(function() {
    $(".footer").slideDown();
    });