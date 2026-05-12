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

  const qrOpen = document.querySelector("#qr-open");
  const qrModal = document.querySelector("#qr-modal");
  const qrClose = document.querySelector("#qr-close");
  const qrBackdrop = document.querySelector("#qr-backdrop");

  if (qrOpen && qrModal && qrClose && qrBackdrop) {
    const closeModal = () => {
      qrModal.hidden = true;
      document.body.classList.remove("modal-open");
      qrOpen.focus();
    };

    const openModal = () => {
      qrModal.hidden = false;
      document.body.classList.add("modal-open");
      qrClose.focus();
    };

    qrOpen.addEventListener("click", openModal);
    qrClose.addEventListener("click", closeModal);
    qrBackdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !qrModal.hidden) {
        closeModal();
      }
    });
  }
})();
