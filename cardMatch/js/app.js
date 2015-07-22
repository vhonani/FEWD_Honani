var CardMatchGame = function(elem) {

  var self = this;
  var container = elem;
  this.cards = ["spade", "spade", "spade", "spade", "diamond", "diamond", "diamond", "diamond", "heart", "heart", "heart", "heart", "club", "club", "club", "club"];
  this.selectedCards = [];

  // from stackOverflow http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  this.shuffle = function(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  this.card = function(suit) {

    var card = document.createElement('div');

    card.classList.add('card');
    card.innerHTML = '<div class="front"></div><div class="back"><div class="suit ' + suit + '"></div></div>';
    card.dataset.suit = suit;

    card.addEventListener('mousedown', function(ev) {

      var cards = document.getElementsByClassName('card');

      card.classList.toggle('flipped');

      self.checkMatch(cards);

    });

    container.appendChild(card);

  };

  this.flipCards = function(cards) {

      for (var i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('flipped')) {
          if (!cards[i].classList.contains('matched')) {
            cards[i].classList.remove('flipped');
          }
        }
      }

  };

  this.checkAllMatched = function(cards) {
    var count = 0;
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains('matched')) {
        count++;
      }
      if (count === cards.length) {
        console.log('All cards are matched.');
        document.getElementById('title').innerHTML = 'You Win!';
      }
    }
  };

  this.checkMatch = function(cards) {

    self.selectedCards = [];

    for (var i = 0; i < cards.length; i++) {

      if (cards[i].classList.contains('flipped')) {
        if (!cards[i].classList.contains('matched')) {

          self.selectedCards.push(cards[i]);

          if (self.selectedCards.length === 2) {
            if (self.selectedCards[0].dataset.suit === self.selectedCards[1].dataset.suit) {
              self.selectedCards[0].classList.add('matched');
              self.selectedCards[1].classList.add('matched');
              self.checkAllMatched(cards);
              return true;
            } else {
              setTimeout(function() {
                self.flipCards(cards);
              },700);
              return false;
            }
          }
        }


      }

    }

  };

  this.drawCards = function() {

    this.cards.forEach(function(suit) {

        self.card(suit);

    });
  };


  this.init = function() {

    console.log('Card matching game is online.');
    this.shuffle(this.cards);
    this.drawCards();

  };


  this.init();

};

CardMatchGame.call(document.getElementById('container'), document.getElementById('table'));
