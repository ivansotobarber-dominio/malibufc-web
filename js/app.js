(() => {
  "use strict";

  const config = window.MALIBU_CONFIG || {};
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const text = (value, fallback = "") => String(value ?? fallback);

  const setDisabledLink = (link, label) => {
    link.removeAttribute("href");
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.classList.add("button-disabled");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    if (label) link.textContent = label;
  };

  if (config.siteReady !== true) {
    const status = document.createElement("aside");
    status.className = "site-status";
    status.setAttribute("role", "status");
    status.textContent = "Web en preparación. La identidad visual y las fotografías son oficiales; los contactos, precios y condiciones todavía no están confirmados.";
    document.body.prepend(status);
  }

  const cleanPhone = text(config.whatsappNumber).replace(/\D/g, "");
  const hasWhatsApp = cleanPhone.length >= 7 && cleanPhone.length <= 15;

  const buildWhatsAppUrl = (message) => {
    if (!hasWhatsApp) return "";
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  const menuButton = $(".menu-button");
  const mainNav = $(".main-nav");
  const closeMenu = () => {
    if (!menuButton || !mainNav) return;
    mainNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
      const open = mainNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    $$("a", mainNav).forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mainNav.classList.contains("is-open")) {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  const seasonLabel = $("#season-label");
  if (seasonLabel) {
    seasonLabel.textContent = config.season ? `Temporada ${text(config.season)}` : "Temporada pendiente de confirmar";
  }

  const year = $("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  const productGrid = $("#product-grid");
  if (productGrid) {
    const products = Array.isArray(config.products) ? config.products.filter((product) => product.published === true) : [];
    if (!products.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "El catálogo se publicará cuando estén confirmados los productos, precios y condiciones.";
      productGrid.appendChild(empty);
    } else {
      products.forEach((product) => {
        const article = document.createElement("article");
        article.className = "product-card";

        const image = document.createElement("img");
        image.className = "product-image";
        image.src = text(product.image);
        image.alt = text(product.name, "Producto del Malibú FC");
        image.loading = "lazy";
        image.width = 900;
        image.height = 1200;

        const content = document.createElement("div");
        content.className = "product-content";
        const meta = document.createElement("div");
        meta.className = "product-meta";
        const heading = document.createElement("h3");
        heading.textContent = text(product.name, "Producto");
        const price = document.createElement("span");
        price.className = "product-price";
        price.textContent = text(product.price, "Precio pendiente");
        meta.append(heading, price);

        const description = document.createElement("p");
        description.className = "product-description";
        description.textContent = text(product.description);
        const details = document.createElement("p");
        details.className = "product-detail";
        details.textContent = text(product.details);

        const order = document.createElement("a");
        order.className = "button button-primary product-order";
        const message = `Hola, quiero información para pedir: ${text(product.name, "producto del Malibú FC")}.`;
        if (hasWhatsApp && product.orderEnabled === true) {
          order.href = buildWhatsAppUrl(message);
          order.target = "_blank";
          order.rel = "noopener";
          order.textContent = "Pedir por WhatsApp";
        } else {
          setDisabledLink(order, "Pedidos pendientes");
        }

        content.append(meta, description, details, order);
        article.append(image, content);
        productGrid.appendChild(article);
      });
    }
  }

  const sponsorGrid = $("#sponsor-grid");
  if (sponsorGrid) {
    const sponsors = Array.isArray(config.sponsors) ? config.sponsors.filter((sponsor) => sponsor.active === true) : [];
    if (!sponsors.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Los patrocinadores se incorporarán cuando estén confirmados y autorizados.";
      sponsorGrid.appendChild(empty);
    } else {
      sponsors.forEach((sponsor) => {
        const element = sponsor.url ? document.createElement("a") : document.createElement("div");
        element.className = "sponsor-card";
        element.textContent = text(sponsor.name);
        if (sponsor.url) {
          element.href = text(sponsor.url);
          element.target = "_blank";
          element.rel = "noopener";
        }
        sponsorGrid.appendChild(element);
      });
    }
  }

  $$(".whatsapp-general").forEach((link) => {
    if (!hasWhatsApp) {
      setDisabledLink(link, "WhatsApp pendiente");
      return;
    }
    link.href = buildWhatsAppUrl(config.whatsappGeneralMessage || "Hola, contacto desde la web del Malibú FC.");
    link.target = "_blank";
    link.rel = "noopener";
  });

  $$(".instagram-link").forEach((link) => {
    if (!config.instagramUrl) {
      setDisabledLink(link, "Instagram pendiente");
      return;
    }
    link.href = text(config.instagramUrl);
    link.target = "_blank";
    link.rel = "noopener";
  });

  $$(".email-link").forEach((link) => {
    if (!config.email) {
      setDisabledLink(link, "Correo pendiente");
      return;
    }
    link.href = `mailto:${text(config.email)}`;
  });
})();
