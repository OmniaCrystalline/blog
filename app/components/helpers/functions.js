/** @format */

export const datestring = (createdAt) =>
  ("0" + createdAt.getDate()).slice(-2) +
  "-" +
  ("0" + (createdAt.getMonth() + 1)).slice(-2) +
  "-" +
  createdAt.getFullYear();

const getCatColor = async() => {
  
}
