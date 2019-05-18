function printMessage(msg,end){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
	if(end == 'win'){
		win = 1;
		clearMessages(win);
	} else if (end == 'lose'){
		lose = 0;
		clearMessages(lose);
	}
}

function clearMessages(end){
	var div = document.getElementById('messages'),
		body = document.body;
	div.innerHTML = '';
	div.classList.add('appear');
	body.classList.add('flash');
	setTimeout(function(){
		div.classList.remove('appear');
	},2200);
	setTimeout(function(){
		body.classList.remove('flash');
	},2200);
	if(end == 1){
		div.classList.add('forwards');
		body.classList.add('forwards');
		printMessage('Mamy czempiona!');
		printMessage('Gratulacje!');
	} else if(end == 0){
		div.classList.add('forwards');
		body.classList.add('forwards');
		printMessage('Szczęścia następnym razem!');
		printMessage('Porażka!');
	}
}