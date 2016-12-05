var stok = false;

function start(){
	document.getElementById('start').style.display = "none";
	document.getElementById('h').style.display = "none";
	console.log('start');
	document.body.style.background = "rgb(158, 214, 192) no-repeat url( 'Gardenia background.jpg ')";
	document.body.style.backgroundSize = "1400px 700px";
	document.getElementById('tekst1').style.display = "inline";
	document.getElementById('town').style.display = "inline";
	document.getElementById('fail1').style.display = "inline";
	document.getElementById('information').style.display = "none";
	document.getElementById('season').style.display = "none";
}

function next(){
	document.getElementById('start').style.display = "none";
	document.getElementById('h').style.display = "none";
	console.log('ga kijken');
	document.body.style.background = "rgb(136, 162, 69) no-repeat url( 'troll battle background.JPG ')";
	document.body.style.backgroundSize = "1400px 700px";
	document.getElementById('tekst1').style.display = "none";
	document.getElementById('tekst2').style.display = "inline";
	document.getElementById('town').style.display = "none";
	document.getElementById('fight').style.display = "inline";
	document.getElementById('flee').style.display = "inline";
	document.getElementById('stok').style.display = "inline";
	document.getElementById('fail1').style.display = "none";
}

function fight() {
	if (stok) {
		document.getElementById('stick').innerHTML = "";
		power();
	} else {
		document.getElementById('stick').innerHTML = "With what?";
		console.log('With what?');
		document.getElementById('stick').style.color = "red";
	}
}

function flee() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	document.getElementById('tekst2').style.display = "none";
	document.getElementById('fight').style.display = "none";
	document.getElementById('flee').style.display = "none";
	document.getElementById('stok').style.display = "none";
	document.getElementById('stick').style.display = "none";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('tip2').style.display = "inline";
}

function stick() {
	console.log('stok gevonden');
	stok = true;
	if (stok) {
		document.getElementById('stick').innerHTML = "You found a stick!";
		document.getElementById('stick').style.color = "limegreen";
	}
}

function information() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'drakenvlam.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('info');
	document.getElementById('start').style.display = "none";
	document.getElementById('h').style.display = "none";
	document.getElementById('information').style.display = "none";
	document.getElementById('uitleg').style.display = "inline";
	document.getElementById('tnx').style.display = "inline";
	document.getElementById('back').style.display = "inline";
	document.getElementById('season').style.display = "none";
}

function back() {
	location.reload(true);
}

function power() {
	document.body.style.background = "rgb(247, 171, 46) no-repeat url( 'blooms power.jpg ')";
	document.body.style.backgroundSize = "1366px 850px";
	document.getElementById('tekst2').style.display = "none";
	document.getElementById('fight').style.display = "none";
	document.getElementById('flee').style.display = "none";
	document.getElementById('stok').style.display = "none";
	document.getElementById('stick').style.display = "none";
	document.getElementById('blooms_power').style.display = "inline";
	document.getElementById('next2').style.display = "inline";
	document.getElementById('fail3').style.display = "inline";
}

function next2() {
	document.body.style.background = "rgb(208, 149, 94) no-repeat url( 'parent.png ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('naar huis');
	document.getElementById('blooms_power').style.display = "none";
	document.getElementById('next2').style.display = "none";
	document.getElementById('parents_home').style.display = "inline";
	document.getElementById('next3').style.display = "inline";
	document.getElementById('fail3').style.display = "none";
	document.getElementById('fail4').style.display = "inline";
}

function try_again() {
	location.reload(true);
}

function next3 () {
	document.body.style.background = "rgb(21, 52, 142) no-repeat url( 'knoet.png ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('naar de deur');
	document.getElementById('parents_home').style.display = "none";
	document.getElementById('next3').style.display = "none"; 
	document.getElementById('fail4').style.display = "none"; 
	document.getElementById('troll').style.display = "inline";
	document.getElementById('next4').style.display = "inline";
	document.getElementById('fail5').style.display = "inline";
}

function next4 () {
	document.body.style.background = "rgb(0, 31, 56) no-repeat url( 'knut.jpg ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('help Stella'); 
	document.getElementById('troll').style.display = "none";
	document.getElementById('next4').style.display = "none";
	document.getElementById('specialist').style.display = "inline";
	document.getElementById('next5').style.display = "inline";
	document.getElementById('fail5').style.display = "none";
	document.getElementById('fail6').style.display = "inline";
}

function next5 () {
	document.body.style.background = "rgb(147, 177, 249) no-repeat url( 'specialists.jpg ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('praat');
	document.getElementById('specialist').style.display = "none";
	document.getElementById('next5').style.display = "none";
	document.getElementById('mangroup').style.display = "inline"; 
	document.getElementById('next6').style.display = "inline"; 
	document.getElementById('fail6').style.display = "none";
	document.getElementById('fail7').style.display = "inline";
}

function next6 () {
	document.body.style.background = "rgb(6, 15, 30) no-repeat url( 'bloomandstella.jpg ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('weer naar huis');
	document.getElementById('mangroup').style.display = "none";
	document.getElementById('next6').style.display = "none";
	document.getElementById('explain').style.display = "inline";
	document.getElementById('next7').style.display = "inline";
	document.getElementById('fail7').style.display = "none";
	document.getElementById('fail8').style.display = "inline";
}

function next7 () {
	document.body.style.background = "rgb(245, 177, 116) no-repeat url( 'parents.jpg ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('praat over magix');
	document.getElementById('explain').style.display = "none";
	document.getElementById('next7').style.display = "none";
	document.getElementById('tomagix').style.display = "inline";
	document.getElementById('next8').style.display = "inline";
	document.getElementById('fail8').style.display = "none";
	document.getElementById('fail9').style.display = "inline";
}


function next8 () {
	document.body.style.background = "rgb(50, 100, 47) no-repeat url( 'magix.jpg ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('gaan');
	document.getElementById('tomagix').style.display = "none";
	document.getElementById('next8').style.display = "none";
	document.getElementById('insidemagix').style.display = "inline";
	document.getElementById('next9').style.display = "inline";
	document.getElementById('fail9').style.display = "none";
	document.getElementById('next10').style.display = "inline";
}

function next9 () {
	document.body.style.background = "rgb(190, 220, 108) no-repeat url( 'aftiteling.jpg ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('naar het bos');
	document.getElementById('insidemagix').style.display = "none";
	document.getElementById('next9').style.display = "none";
	document.getElementById('next10').style.display = "none";
	document.getElementById('ending1').style.display = "inline";
	document.getElementById('next11').style.display = "inline";
}

function next10 () {
	document.body.style.background = "rgb(190, 220, 108) no-repeat url( 'aftiteling.jpg ')";
	document.body.style.backgroundSize = "1366px 800px";
	console.log('naar de school');
	document.getElementById('insidemagix').style.display = "none";
	document.getElementById('next9').style.display = "none";
	document.getElementById('next10').style.display = "none";
	document.getElementById('ending2').style.display = "inline";
	document.getElementById('next12').style.display = "inline";
}

function fail1() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('fail1').style.display = "none";
	document.getElementById('tekst1').style.display = "none";
	document.getElementById('town').style.display = "none";
	document.getElementById('tip1').style.display = "inline";
}

function fail3() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('blooms_power').style.display = "none";
	document.getElementById('next2').style.display = "none";
	document.getElementById('fail3').style.display = "none";
	document.getElementById('tip3').style.display = "inline";
}

function fail4() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('parents_home').style.display = "none";
	document.getElementById('next3').style.display = "none";
	document.getElementById('fail4').style.display = "none";
	document.getElementById('tip4').style.display = "inline";
}

function fail5() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('troll').style.display = "none";
	document.getElementById('next4').style.display = "none";
	document.getElementById('fail5').style.display = "none";
	document.getElementById('tip5').style.display = "inline";
}

function fail6() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('specialist').style.display = "none";
	document.getElementById('next5').style.display = "none";
	document.getElementById('fail6').style.display = "none";
	document.getElementById('tip6').style.display = "inline";
}

function fail7() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('mangroup').style.display = "none";
	document.getElementById('next6').style.display = "none";
	document.getElementById('fail7').style.display = "none";
	document.getElementById('tip7').style.display = "inline";
}

function fail8() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('explain').style.display = "none";
	document.getElementById('next7').style.display = "none";
	document.getElementById('fail8').style.display = "none";
	document.getElementById('tip8').style.display = "inline";
}

function fail9() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'game over.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('game over');
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('tomagix').style.display = "none";
	document.getElementById('next8').style.display = "none";
	document.getElementById('fail9').style.display = "none";
	document.getElementById('tip9').style.display = "inline";
}

function next11() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'ending.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('fake ending');
	document.getElementById('ending1').style.display = "none";
	document.getElementById('next11').style.display = "none";
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('thanks').style.display = "inline";
	document.getElementById('fakeending').style.display = "inline";
}

function next12() {
	document.body.style.background = "rgb(0, 0, 0) no-repeat url( 'ending.jpg ')";
	document.body.style.backgroundSize = "1366px 768px";
	console.log('real ending');
	document.getElementById('ending2').style.display = "none";
	document.getElementById('next12').style.display = "none";
	document.getElementById('try_again').style.display = "inline";
	document.getElementById('thanks').style.display = "inline";
	document.getElementById('realending').style.display = "inline";
}