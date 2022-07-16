export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2204-FTB-ET-WEB-PT";

export async function fetchAllPosts(token) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser({ username, password }) {
  try {
    return fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
  } catch (error) {
    console.error(error);
  }
}

export async function logInUser({ username, password }) {
  try {
    return fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
  } catch (error) {
    console.error(error);
  }
}

export async function getUserProfile({ token }) {
  try {
    return fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
  } catch (error) {
    console.error(error);
  }
}

export async function createNewPost({
  token,
  title,
  description,
  price,
  location,
  willDeliver,
}) {
  try {
    return fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          location: `${location}`,
          willDeliver: `${willDeliver}`,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(postId, token) {
  try {
    return fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
          return result;
      });
  } catch (error) {
    console.error(error);
  }
}
