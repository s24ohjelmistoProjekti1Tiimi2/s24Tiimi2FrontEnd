export function getProducts() {
    return fetch(import.meta.env.VITE_API_PRODUCTS_URL)
    .then(response => {
        if(!response.ok)
            throw new Error("Error in fetch: " + response.statusText)

        return response.json();
    })
}

export function saveRegistration(formData) {
    return fetch(import.meta.env.VITE_API_REGISTRATION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then (response => {
      if (!response.ok)
        throw new Error("Error in saving: " + response.statusText);
   
      return response.json();
    })
  }