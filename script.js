function hide(act) {
	document.getElementsByClassName('side-menu')[0].style.transition = 'all 0.3s ease';
	document.getElementsByClassName('main-wrapper')[0].style.transition = 'all 0.3s ease';
	switch(act) {
		case 1:
			document.getElementsByClassName('side-menu')[0].style.width = '0';
			document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
			document.getElementsByClassName('burger')[0].style.display = 'block';
			break;
		case 2:
			document.getElementsByClassName('side-menu')[0].style.width = '240px';
			document.getElementsByClassName('main-wrapper')[0].style.padding = '0 0 0 240px';
			document.getElementsByClassName('burger')[0].style.display = 'none';
			break;
		default: return;
	}
}

function check(menu, label) {
	switch(menu) {
		case 1: 
			scheck=false;
			document.getElementsByTagName('h1')[0].innerHTML = label;
			document.getElementsByClassName('submenu')[0].classList.remove("active");
			document.getElementsByClassName('submenu')[1].classList.remove("active");
			break;
		case 2:
			document.getElementsByClassName('submenu')[1].classList.remove("active");
			document.getElementsByClassName('submenu')[0].classList.toggle("active");
			break;
		case 3:
			document.getElementsByClassName('submenu')[0].classList.remove("active");
			document.getElementsByClassName('submenu')[1].classList.toggle("active");
			break;
		case 2.1: case 2.2: case 2.3: 
		case 3.1: case 3.2: case 3.3:
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		default: return;
	}
}

function another(im) {
	switch(im) {
		case 2.1:
			document.getElementById('pic').src = 'images/users.jpg';
			break;
		case 2.2:
			document.getElementById('pic').src = 'images/groups.jpg';
			break;
		case 2.3:
			document.getElementById('pic').src = 'images/roles.jpg';
			break;
		case 3.1:
			document.getElementById('pic').src = 'images/documents.jpg';
			break;
		case 3.2:
			document.getElementById('pic').src = 'images/workspaces.jpg';
			break;
		case 3.3:
			document.getElementById('pic').src = 'images/trash.jpg';
			break;
		default: return;
	}
}