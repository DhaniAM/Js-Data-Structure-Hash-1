let size = 5;
const hashTable = new Array(size);

const hash = (data) => {
	let hashValue = 0;
	for (let i = 0; i < data.length; i++) {
		hashValue += data.charCodeAt(i);
	}
	console.log(data);

	function addToTable(data){
		let pos = data % size;
		hashTable[pos] = data;
		console.log(hashTable);
		
	}
	return hashValue;

}




const getHash = () => {
	// let pos = 
}

hash.addToTable("Dhani");