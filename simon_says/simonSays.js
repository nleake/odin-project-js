function echo(input) {
	return input;
}

function shout(input) {
	return String(input).toUpperCase();
}

function repeat(string, num) {
	let nStr = "";
	if (!num) {
		nStr += `${string} ${string}`;
	}
	let i = 0;
	while (i < num) {
		nStr += `${string} `;
		i++;
	}
	return nStr.trim();
}

function pieceOfWord(str, num) {
	let nStr ="";
	for (let i = 0; i < num; i++){
		nStr += str[i];
	}
	return nStr;
}

function firstWord(str) {
	return str.split(' ')[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(str) {
	let words = str.split(' ');
	const littleWords = ['and', 'or', 'to', 'over', 'the'];
	for (let i = 1; i < words.length; i++){
		for(let j = 1; j < littleWords.length; j++){
			if (words[i].toLowerCase() === littleWords[j]){
				words[i] = words[i].toLowerCase();
			} else {
				words[i] = capitalize(words[i]);
			}
		}
	}
	capitalize(words[0]);
	return words.join(" ");
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}