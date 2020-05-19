import React from "react";

export default function Book({ book }) {
  return (
    <tr>
      <th>{book.id}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
    </tr>
  );
}
