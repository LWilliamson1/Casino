$(document).ready(function() {

	function renderCard(card) {
		var symbols = { SPADES: "♠", HEARTS: "♥", DIAMONDS: "♦", CLUBS: "♣" };
		var suitClass = (card.suit === "HEARTS" || card.suit === "DIAMONDS") ? "card-red" : "card-black";
		var val = { ACE: "A", JACK: "J", QUEEN: "Q", KING: "K" }[card.value] || card.value;
		var sym = symbols[card.suit];
		return '<div class="playing-card ' + suitClass + '">' +
		       '<div class="card-corner card-top-left">' + val + '<br>' + sym + '</div>' +
		       '<div class="card-center-suit">' + sym + '</div>' +
		       '<div class="card-corner card-bottom-right">' + val + '<br>' + sym + '</div>' +
		       '</div>';
	}

	function renderCardBack() {
		return '<div class="playing-card card-back" id="dealer-hidden">' +
		       '<div class="card-back-inset"></div>' +
		       '</div>';
	}

	function Deck(cards) {
		this.cards = cards;
		this.remaining = cards.length;
		this.success = true;
		this.shuffled = true;
	}

	function Player(type, name) {
		this.type = type;
		this.name = name;
		this.score = 0;
		this.cardCount = 0;
		this.hand = [];

		this.setScore = function setScore(){
			this.score = 0;
			var aceCount = 0;
			var countNum = this.hand.length;
			var oneCardScore = 0;
			if(this.type == "dealer" && this.cardCount==0){
				countNum = 1;
			}

			for(var i=0; i < countNum; i++){
				if(isNaN(this.hand[i]["value"])){
					if(this.hand[i]["value"]!="ACE"){
						this.score = this.score + 10;
					}
					else{
						aceCount++;
						if(this.score <= 10){
							this.score = this.score + 11;
						}
						else{
							this.score = this.score + 1;
						}
					}
				}
				else{
					this.score = this.score + Number(this.hand[i]["value"]);
				}
				if(this.type=="dealer" && this.cardCount==0){
					if(oneCardScore == 0){
						oneCardScore = this.score;
						if(oneCardScore > 9){
							countNum++;
						}
					}
					if(oneCardScore!=0 && this.score == 21){
						displayWinner();
					}
					else{
						this.score=oneCardScore;
					}
				}
			}
			while(this.score > 21 && aceCount > 0){
				this.score = this.score - 10;
				aceCount--;
			}
			this.displayScore();
		}

		this.getScore = function getScore(){
			return this.score;
		}

		this.displayScore = function displayScore(){
			$("#"+this.type+"Status").html(this.score);
		}

		this.bust = function bust(){
			$("#"+this.type+"Status").html("BUST").addClass("status-bust");
			busted();
		}

		this.hit = function hit(deckId){
			draw(deckId, this, 1);
			this.setScore();
			this.showHand();
			if(this.score > 21){
				this.bust();
			}
		}

		this.showHand = function showHand() {
			var cardsToShow = this.hand.length;
			if(this.type=="dealer" && this.cardCount == 0){
				cardsToShow = 1;
			}

			// Reveal face-down placeholder when dealer shows remaining cards
			if(this.type=="dealer" && this.cardCount > 0){
				$("#dealer-hidden").remove();
			}

			for(var i = this.cardCount; i < cardsToShow; i++){
				$("#"+this.name).append(renderCard(this.hand[i]));
			}

			// Add face-down card next to dealer's first visible card
			if(this.type=="dealer" && this.cardCount == 0 && this.hand.length > 1){
				$("#"+this.name).append(renderCardBack());
			}

			if(this.cardCount==0 && this.type == "player"){
				this.cardCount = 2;
			}
			else{
				this.cardCount++;
			}
		}
	}

	function buildShuffledCards() {
		var suits = ["SPADES", "HEARTS", "DIAMONDS", "CLUBS"];
		var values = ["ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING"];
		var cards = [];
		for (var d = 0; d < 6; d++) {
			for (var s = 0; s < suits.length; s++) {
				for (var v = 0; v < values.length; v++) {
					cards.push({ value: values[v], suit: suits[s] });
				}
			}
		}
		for (var i = cards.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var tmp = cards[i]; cards[i] = cards[j]; cards[j] = tmp;
		}
		return cards;
	}

	createNewDeck = function () {
		deck = new Deck(buildShuffledCards());
	}

	shuffleDeck = function (deck) {
		var cards = buildShuffledCards();
		deck.cards = cards;
		deck.remaining = cards.length;
		deck.success = true;
		deck.shuffled = true;
	}

	draw = function (id, player, count) {
		var drawn = deck.cards.splice(0, count);
		deck.remaining = deck.cards.length;
		for (var i = 0; i < drawn.length; i++) {
			player.hand.push(drawn[i]);
		}
		return { cards: drawn };
	}

	playDealer = function(dealer, deckId){
		dealer.setScore();
		while(dealer.score < 17 && dealer.score < 21){
			dealer.hit(deckId);
		}
	}

	displayWinner = function(){
		if(dealer.score > player.score && dealer.score <= 21 || player.score > 21){
			if(dealer.hand.length == 2 && dealer.score==21){
				dealer.setScore();
				dealer.showHand();
				$("#dealerStatus").html("BLACKJACK!").addClass("status-special");
			}
			else{
				$("#dealerStatus").html("WIN").addClass("status-win");
			}
		}
		else if(player.score > dealer.score && player.score <= 21 || dealer.score > 21){
			if(player.hand.length == 2 && player.score==21){
				dealer.showHand();
				dealer.setScore();
				$("#playerStatus").html("BLACKJACK!").addClass("status-special");
			}
			else{
				$("#playerStatus").html("WIN").addClass("status-win");
			}
		}
		else{
			$("#playerStatus").html("PUSH").addClass("status-push");
			$("#dealerStatus").html("PUSH").addClass("status-push");
		}
	}

	busted = function(){
		displayWinner(dealer, player);
		hit.prop("disabled",true);
		dealer.showHand();
		stay.prop("disabled",true);
	}

	startGame = function() {
		draw(deck.id, player, 2);
		draw(deck.id, dealer, 2);

		player.setScore();
		dealer.setScore();

		if(player.score == 21){
			displayWinner(dealer,player);
		}

		player.showHand();
		dealer.showHand();
	}

	var deck;
	createNewDeck();

	if(deck.success){
		var player = new Player("player", "Player1");
		var dealer = new Player("dealer", "Dealer");
	}
	else{
		//error message
	}
	var hit = $("#hit");
	var stay = $("#stay");
	var playAgain = $("#playAgain");

	startGame();

	hit.mouseup(function() {
		player.hit(deck.id);
	});

	stay.mouseup(function() {
		hit.prop("disabled",true);
		stay.prop("disabled",true);
		dealer.showHand();
		playDealer(dealer, deck.id);
		displayWinner(dealer, player);
	});

	playAgain.mouseup(function() {
		if(deck.remaining < 100){
			shuffleDeck(deck);
		}
		if(deck.success){
			player = new Player("player", "Player1");
			dealer = new Player("dealer", "Dealer");
			hit.prop("disabled",false);
			stay.prop("disabled",false);
			$(".cards-container").empty();
			$("#playerStatus, #dealerStatus")
				.html("&mdash;")
				.removeClass("status-win status-special status-push status-bust");
		}
		else{
			//error message
		}
		startGame();
	});
});
