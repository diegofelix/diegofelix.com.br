import * as React from "react";

export const EmailTemplate = ({ firstName, lastName, email, message }) => (
  <div>
    <h1>Olá, Diego.</h1>
    <p>Recebemos um contato através do seu site:</p>
    <p>
      <strong>Nome:</strong> {firstName} {lastName}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>{message}</p>
  </div>
);
