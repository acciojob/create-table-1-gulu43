function insert_Row() {
    //Write your code here
	let tb_val = document.getElementById('sampleTable');

	//retriving and adding row to table
	let row_val = document.createElement('tr');
	// tb_val.append(row_val);

	
	//adding row to tb with insertbefore adding roe and refrence chield
	// tb_val.insertBefore(row_val, tb_val.firstElementChild);
	
	

	//retriving and adding text and adding to row
	let col_left_val = document.createElement('td');
	col_left_val.textContent='New Cell1';
	let col_right_val = document.createElement('td');
	col_right_val.textContent='New Cell2';

	

	row_val.append(col_left_val,col_right_val);

	let new_row = tb_val.insertRow(0); //row_val
	new_row.append(col_left_val,col_right_val);
}
