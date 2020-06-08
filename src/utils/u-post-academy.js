import axios from 'axios';

async function postAcademy(data) {
  try {
    let response = await axios.post('https://test.api.sportstars.club/public/academies', {
      title: data.title,
      type: data.type
    })

    if (response) {
      return true
    }
  } catch (err) {
    // Output reason
    console.error(err);
    return false
  }
}

export default postAcademy;