function poke(id){
	console.log(id)
	var element = document.getElementById(id);
	 element.classList.toggle("woke");
	incrementcount();

}

let player_score = [];

function addNum(num) {
      numArray.push(num);
      document.querySelector(".txt").innerHTML = numArray.join('');
  }

function incrementcount(){
	player_score++;
	console.log(player_score)
}