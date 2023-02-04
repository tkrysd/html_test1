let div0 = document.getElementById('div_main');
let sel1 = document.getElementById('sl_month');
for (var i = 0; i < 12; i++) {
	let opt = document.createElement('option');

	opt.valueOf(`${i+1}月`);
	opt.innerText = `${i+1}月`;
	sel1.appendChild(opt);
}

let table = document.getElementById('tbl_data');
for (var i = 0; i < 10; i++) {
	let label = document.createElement('label');
	let input = document.createElement('input');
	let td = document.createElement('td');
	let tr = document.createElement('tr');
	
	label.innerText = `${i+1}`;
	table.appendChild(tr);
	table.appendChild(td);
	table.appendChild(label);
	table.appendChild(td);	
	table.appendChild(input);
}



function load_action() {
	let ret = validation();
	if (!ret) {
		return;
	}
	window.alert('読出し！');
}

function upsert_action() {
	let ret = validation();
	if (!ret) {
		return;
	}
	window.alert('登録！');
}

function delete_action() {
	let ret = validation();
	if (!ret) {
		return;
	}
	window.alert('削除！');
}

function validation() {
	let sl_term = document.getElementById('sl_term');
	let sl_kiln = document.getElementById('sl_kiln');
	let sl_month = document.getElementById('sl_month');
	if (sl_term.selectedIndex == 0) {
			window.alert('validation error: 期を選択してください');
			return false;
	}
	if (sl_kiln.selectedIndex == 0) {
			window.alert('validation error: 焼成炉を選択してください');
			return false;
		}
	if (sl_month.selectedIndex == 0) {
			window.alert('validation error: 月を選択してください');
			return false;
		}
	
	return true;
}
