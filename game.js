hole_id_list = ['1', '2', '3', '4', '5', '6','7','8', '9'
];

let time = new Date();
let player_score = [];
let points = 0;
let gameend = false;

function poke(id){
	var element = document.getElementById(id);
	element.classList.toggle("woke");
}

function flip_critters(){
	random_pick = hole_id_list[Math.floor(Math.random() * hole_id_list.length)];
	$(`#${random_pick}`).attr("src", "mole.png");

	console.log(random_pick);
}


$(".box").on('click', function(){
	if (!gameend){
		if ($(this).hasClass('box')){
			points -= 50;
			console.log(points)
		}
		if ($(this).hasClass('woke')){
			points += 100;
			console.log(points)
		}
	}
});

