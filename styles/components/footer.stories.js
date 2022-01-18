import "./footer.css";

export default {
  title: "Component/Footer",
};

export const Regular = () => `<footer class="footer mt-15 rounded shadow">
<address id="contact" class="flex justify-evenly items-center">
  <ul class="px-3 list-none">
    <p>Contact me</p>
    <li>
      <a href="mailto:e.mail@mail.de">📧 e.mail@mail.de</a>
    </li>
    &nbsp;
    <li>
      <a href="tel:+4912345635">📞 +49 135 813 58</a>
    </li>
  </ul>
</address>
<p class="footer__tool flex justify-center items-center">
  Go to the top
  <a class="no-underline" href="#nav-bar">&nbsp;&#128316;</a>
</p>
</footer>`;