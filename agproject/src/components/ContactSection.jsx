import React from 'react';

function ContactSection() {
  return (
    <section id="contacts">
      <h2>Свяжитесь с нами</h2>
      <form className="contact-form">
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Ваш email" required />
        <input type="tel" placeholder="Ваш телефон" />
        <textarea placeholder="Расскажите о вашем проекте"></textarea>
        <button type="submit">Отправить заявку</button>
      </form>
    </section>
  );
}

export default ContactSection;
