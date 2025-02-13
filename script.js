function insert_Row() {
    //Write your code here
	let tb_val = document.getElementById('sampleTable');

	//retriving and adding row to table
	let row_val = document.createElement('tr');
	tb_val.append(row_val);

	//retriving and adding text and adding to row
	let col_left_val = document.createElement('td');
	col_left_val.textContent='New Cell1';
	let col_right_val = document.createElement('td');
	col_right_val.textContent='New Cell2';
	
	row_val.append(col_left_val,col_right_val);
}
