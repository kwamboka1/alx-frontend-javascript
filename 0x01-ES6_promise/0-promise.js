export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const a = 1;

    if (a === 1) {
      resolve('Random number is one');
    } else {
      reject(Error('Not one'));
    }
  });
}
