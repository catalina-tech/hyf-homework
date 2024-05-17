function getCharacterFrequencies(string) {
  const frequency = {};

  for (const character of string) {
    if (frequency[character]) {
      frequency[character]++;
    } else {
      frequency[character] = 1;
    }
  }
  return {
    characters: frequency,
    length: string.length,
  };
}

console.log(getCharacterFrequencies("Hello"));
console.log(getCharacterFrequencies("Hello World"));
console.log(getCharacterFrequencies('happy'));

/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/
