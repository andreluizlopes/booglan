import { allLetters, fooLetters, barLetters, numbers } from './texts';

export function getPrepositions(text) {
  const arrayText = text.split(' ');
  const preposition = [];

  arrayText.map(value => {

    if (value.length !== 5) {
      return true;
    }

    if (value.indexOf('l') !== -1) {
      return true;
    }

    if (barLetters.indexOf(value[4]) === -1) {
      return true;
    }

    return preposition.push(value);

  });

  return preposition;

}

export function getVerbs(text) {
  const arrayText = text.split(' ');
  const verbs = [];
  const subjunctiveVerbs = [];

  arrayText.map(value => {

    if (value.length <= 7) {
      return false;
    }
    if (fooLetters.indexOf(value.slice(-1)) !== -1) {
      return false;
    }
    if (fooLetters.indexOf(value[0]) === -1) {
      subjunctiveVerbs.push(value);
    }

    return verbs.push(value);

  });

  return({'verbs': verbs, 'subjunctiveVerbs': subjunctiveVerbs});

}

export function getVocabulary(text) {
  const arrayText = text.split(' ');
  let vocabulary = [];

  vocabulary = arrayText.sort((a, b) => {
    return sortLexicographic(a, b, allLetters);
  });

  vocabulary = vocabulary.filter((item, pos) => {
    return vocabulary.indexOf(item) === pos;
  });


  return vocabulary;
}

function sortLexicographic(x, y, order) {

  var x0 = x[0];
  var y0 = y[0];

  if (x0 && y0 && x0 === y0) {
    //compare next char
    return sortLexicographic(x.slice(1), y.slice(1), order);
  }

  if (x0 === undefined && y0 === undefined) {
    //no more chars to compare, strings must be equal
    return 0;
  } else if (x0 === undefined) {
    //x is shorter than y, so x comes before in sort order
    return -1;
  } else if (y0 === undefined) {
    //y is shorter than x, so y comes before in sort order
    return 1;
  } else if (order.indexOf(x0) < order.indexOf(y0)) {
    //x comes before in sort order
    return -1;
  } else {
    //x comes after in sort order
    return 1;
  }
}

export function getNumbers(text) {
  const arrayText = text.split(' ');
  const prettyNumber = [];

  arrayText.map(value => {
    const number20 = [];
    value.split('').map(letter => {
      return number20.push(numbers[letter]);
    });

    const number10 = parseInt(number20.reverse().join(''), 20);
    if (number10 < 422224) {
      return false;
    }
    if ((number10 % 3) !== 0) {
      return false;
    }
    if (prettyNumber.indexOf(number10) !== -1) {
      return false;
    }

    return prettyNumber.push(number10);
  })

  return prettyNumber;
}
