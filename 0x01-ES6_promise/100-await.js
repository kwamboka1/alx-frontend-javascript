export default asyncUploadUser;
import { uploadPhoto, createUser } from './util';

const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
