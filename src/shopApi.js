export function getProducts() {
  return fetch(import.meta.env.VITE_API_PRODUCTS_URL).then((response) => {
    if (!response.ok) throw new Error("Error in fetch: " + response.statusText);

    return response.json();
  });
}

export function saveRegistration(formData) {
  return fetch(import.meta.env.VITE_API_REGISTRATION_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (!response.ok)
      throw new Error("Error in saving: " + response.statusText);

    return response.json();
  });
}

export function getCustomerId(email) {
  return fetch(import.meta.env.VITE_API_PRODUCTS_URL)
  .then((response) => {
    const customers = response.json();
    customers.map((customer, index) => {
      customer.id = index;
      if (customer.email === email) {
        return index;
      }
    })
    .catch((err) => console.error(err));
  });
}

export function softDeleteCustomer(customerId) {
  return fetch(`${import.meta.env.VITE_API_REGISTRATION_URL}/${customerId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      deleted: "true"
    }),
  }).then((response) => {
    if (!response.ok)
      throw new Error("Error in saving: " + response.statusText);

    return response.json();
  });
}