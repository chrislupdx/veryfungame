hole_id_list = ['1', '2', '3', '4', '5', '6','7','8', '9'
];

let points = 0;
let gameend = false;

playtime = setInterval(flip_critters, 1000);

function poke(id){
	var element = document.getElementById(id);
	$("#" + element.id + "").toggleClass('hole mole');
	hole_id_list.push(element.id);
	console.log(element)
}

function flip_critters(){
	random_pick = hole_id_list[Math.floor(Math.random() * hole_id_list.length)];
	$(`#${random_pick}`).toggleClass('mole hole');
	
	let index = hole_id_list.indexOf(random_pick);
	hole_id_list.splice(index, 1);
	
	if(hole_id_list.length=== 0){
		window.clearInterval(playtime);
		clearInterval(playtime);
		gameend = true;
		$('#gameend').show();
	}
}

//this handles points/displaying score
$('img').on('click', function(){
	if (!gameend){
		if ($(this).hasClass('hole')){
			points -= 50;
		}
		if ($(this).hasClass('mole')){
			points += 100;
		}
	$('#points').text(`${points}`);
	}
});

$('#gameend').hide();