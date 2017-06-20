import loremIpsum from 'lorem-ipsum'

let newPostId = 200;

const createRandomPost = () => {
  const title = loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceUpperBound: 8,
    sentenceLowerBound: 5,
    random: Math.random,
  });

  const body = loremIpsum({
    count: 15,
    units: 'words',
    random: Math.random,
  })

  return {
    userId: `${Math.floor(Math.random() * 10) + 1}`,
    id: `${newPostId++}`,
    title: `${newPostId} - ${title}`,
    body: body,
  };
}

const utils = {
    createRandomPost,
}

export default utils;