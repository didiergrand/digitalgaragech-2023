import axios from 'axios';

export const fetchImage = async (imageId) => {
  try {
    const response = await axios.get(
      `https://blog.digitalgarage.ch/wp-json/wp/v2/media/${imageId}`
    );
    const imageDetails = response.data;
    return imageDetails.source_url;
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de l\'image', error);
    return 'https://medias.digitalgarage.ch/placeholder.png';
  }
};
