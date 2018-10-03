hole_id_list = ['1', '2', '3', '4', '5', '6','7','8', '9'
];

let points = 0;
let gameend = false;

let time = new Date();
time.setHours(0, 0, 0, 0);

playtime = setInterval(flip_critters, 1000);


function poke(id){
	var element = document.getElementById(id);
	element.classList.toggle("box");
}

function flip_critters(){
	random_pick = hole_id_list[Math.floor(Math.random() * hole_id_list.length)];
	$(`#${random_pick}`).toggleClass("woke");
	
	let index = hole_id_list.indexOf(random_pick);
	hole_id_list.splice(index, 1);
	
	if(hole_id_list.length=== 0){
		$('#end').show();
		window.clearInterval(playtime);
		clearInterval(playtime);
		gameend = true;
	}
}

//this handles points/displaying score
$(".box").on('click', function(){
	if (!gameend){
		if ($(this).hasClass('box')){
			points -= 50;
			$('#points').text(`Score: ${points}`);
		}
		if ($(this).hasClass('woke')){
			points += 100;
			$('#points').text(`Score: ${points}`);
		}
	}

});

$('#gameend').hide();