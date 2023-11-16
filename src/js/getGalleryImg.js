


const URL = 'https://pixabay.com/api/';
const KEY = '34949231-97333589adf73858ce38633dc';

export async function getGalleryImg({ name, page, per_page, category, colors, orientation, image_type }) {

    const parameters = new URLSearchParams({
        key: API_KEY,
        q: encodeURIComponent(name),
        safesearch: true,
        page,
        per_page,
        category,
        colors,
        orientation,
        image_type
    });
  
  const respons = await fetch(
    `${URL}?${parameters}`);
  if (!respons.ok) {
    throw new Error(respons.status)
  }
  return respons.json();  
  
}
