/* eslint-disable */
export default function uploadPhoto(filename) {
  return Promise.reject(
    Error(`Error: ${filename} cannot be processed`).message,
  );
}
