(() => {
  const emailLink = document.querySelector("#email-link");
  const emailReadable = document.querySelector("#email-readable");

  if (emailLink && emailReadable) {
    const user = [emailLink.dataset.userA, emailLink.dataset.userB].filter(Boolean).join(".");
    const domain = `${emailLink.dataset.domainA}.${emailLink.dataset.domainB}`;
    const address = `${user}@${domain}`;

    emailReadable.textContent = address.replace("@", " [at] ");
    emailLink.href = `mailto:${address}`;
  }

  const phoneLink = document.querySelector("#phone-link");
  const phoneReadable = document.querySelector("#phone-readable");

  if (phoneLink && phoneReadable) {
    const parts = ["p1", "p2", "p3", "p4", "p5"].map((key) => phoneLink.dataset[key]).filter(Boolean);
    const readable = parts.join(" ");
    const tel = parts.join("").replace(/[^+\d]/g, "");

    phoneReadable.textContent = readable;
    phoneLink.href = `tel:${tel}`;
  }
})();
