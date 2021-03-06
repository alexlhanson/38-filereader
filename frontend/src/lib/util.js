export const renderIf = (test, component) => {
  return test ? component : null;
} 

export const photoToDataURL = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    })

    reader.addEventListener('error', () => {
      reject(reader.error);
    })

    return file ? reader.readAsDataURL(file) : reject(new Error('USEAGE ERROR: Must provide a file'))
  })
} 