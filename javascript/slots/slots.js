const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
	"A" : 2
	, "B": 4
	, "C": 6
	, "D": 8
}

const SYMBOL_VALUES = {
	"A": 5
	, "B": 4
	, "C": 3
	, "D": 2
}

const deposit = () => {
	while (true) {
		const amt = parseFloat(prompt("Enter amount to bet: "));
		if (isNaN(amt) || amt <= 0) {
			console.log("Not a valid amount");
		}
		else {
			return amt;
		}
	}
};

const getLines = () => {
	while (true) {
		const lines = parseFloat(prompt("Enter number of lines to bet (1-3): "));
		if (isNaN(lines) || lines <= 0 || lines > 3) {
			console.log("Invalid number of lines");
		}
		else {
			return lines;
		}
	}
};

const getBet = (balance, lines) => {
	while (true) {
		const bet = parseFloat(prompt("Enter bet amount per line: "));
		if (isNaN(bet) || lines <= 0 || bet * lines > balance) {
			console.log("Invalid bet");
		}
		else {
			return bet;
		}
	}
};

const spin = () => {
	const symbols = [];
	for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
		for (let i = 0; i < count; i++) {
			symbols.push(symbol);
		}
	}

	const reels = [[], [], []];
	for (let i = 0; i < COLS; i++) {
		const perReel = [...symbols];
		for(let j = 0; j < ROWS; j++) {
			const rand = Math.floor(Math.random() * perReel.length)
			const selected = perReel[rand];
			reels[i].push(selected);
			perReel.splice(rand, 1);
		}
	}
	return reels;
};

const transpose = arr => arr[0].map((col, i) => arr.map(row => row[i]));

const printRows = (rows) => {
	for (const row of rows) {
		let rowString = "";
		for (const [i, s] of row.entries()) {
			rowString += s;
			if (i != row.length - 1) {
				rowString += " | ";
			}
		}
		console.log(rowString);
	}
}

const winner = (rows, bet, lines) => {
	let winnings = 0;
	for (let i = 0; i < lines; i++) {
		const symbols = rows[i];
		let matching = true;

		for (const s of symbols) {
			if (s != symbols[0]) {
				matching = false;
				break;
			}
		}
		if (matching) {
			winnings += bet * SYMBOL_VALUES[symbols[0]];
		}
	}
	return winnings;
}

const game = () => {
	let balance = deposit();
	while(balance > 0) {
		console.log("You have a balance of: $" + balance + "\n");
		const lines = getLines();
		const bet = getBet(balance, lines);
		balance -= (bet * lines);
		const reels = spin()
		const rows = transpose(reels);
		printRows(rows);
		const winnings = winner(rows, bet, lines);
		balance += winnings;
		console.log("\nWon: $" + winnings.toString() + "\n");

		const again = prompt("Do you want to play again? (y/n)")
		if (again != 'y') break;
	}
}

game();