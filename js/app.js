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

  const squadContent = $("#squad-content");
  if (squadContent) {
    const squad = config.squad || {};
    const players = Array.isArray(squad.players) ? squad.players.filter((player) => player.published === true) : [];

    if (squad.published !== true || !players.length) {
      const notice = document.createElement("div");
      notice.className = "squad-pending";
      const copy = document.createElement("div");
      const heading = document.createElement("h3");
      heading.textContent = "Plantilla en preparación";
      const paragraph = document.createElement("p");
      paragraph.textContent = "Faltan confirmar los jugadores que pueden publicarse y sus autorizaciones de imagen.";
      copy.append(heading, paragraph);
      const badge = document.createElement("span");
      badge.textContent = "Datos pendientes";
      notice.append(copy, badge);
      squadContent.appendChild(notice);

      const lines = ["Porteros", "Defensas", "Centrocampistas", "Delanteros"];
      const placeholderGrid = document.createElement("div");
      placeholderGrid.className = "squad-placeholder-grid";
      lines.forEach((line) => {
        const card = document.createElement("article");
        card.className = "squad-line-card";
        const number = document.createElement("span");
        number.textContent = "—";
        const name = document.createElement("strong");
        name.textContent = line;
        const detail = document.createElement("small");
        detail.textContent = "Jugadores por confirmar";
        card.append(number, name, detail);
        placeholderGrid.appendChild(card);
      });
      squadContent.appendChild(placeholderGrid);
    } else {
      const groups = ["Porteros", "Defensas", "Centrocampistas", "Delanteros"];
      groups.forEach((group) => {
        const groupPlayers = players.filter((player) => text(player.group) === group);
        if (!groupPlayers.length) return;
        const section = document.createElement("section");
        section.className = "squad-group";
        const heading = document.createElement("h3");
        heading.textContent = group;
        const grid = document.createElement("div");
        grid.className = "squad-grid";
        groupPlayers.forEach((player) => {
          const card = document.createElement("article");
          card.className = "player-card";
          const image = document.createElement("img");
          image.src = text(player.image, "/assets/images/club/escudo-malibu-fc.png");
          image.alt = text(player.name, "Jugador del Malibú FC");
          image.loading = "lazy";
          const data = document.createElement("div");
          const number = document.createElement("span");
          number.textContent = text(player.number, "—");
          const name = document.createElement("strong");
          name.textContent = text(player.name);
          const position = document.createElement("small");
          position.textContent = text(player.position);
          data.append(number, name, position);
          card.append(image, data);
          grid.appendChild(card);
        });
        section.append(heading, grid);
        squadContent.appendChild(section);
      });
    }
  }

  const calendarGrid = $("#calendar-grid");
  if (calendarGrid) {
    const calendar = config.calendar || {};
    const events = Array.isArray(calendar.events) ? calendar.events : [];
    if (!events.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "El calendario se publicará cuando estén confirmados los próximos partidos.";
      calendarGrid.appendChild(empty);
    } else {
      events.forEach((event) => {
        const card = document.createElement("article");
        card.className = "match-card";

        const meta = document.createElement("div");
        meta.className = "match-meta";
        const date = document.createElement("strong");
        date.textContent = text(event.dateLabel, "Fecha por confirmar");
        const competition = document.createElement("span");
        competition.textContent = text(event.competition);
        meta.append(date, competition);

        const match = document.createElement("div");
        match.className = "match-teams";
        [event.home, event.away].forEach((teamName, index) => {
          const team = document.createElement("div");
          if (text(teamName).toLowerCase().includes("malibú")) {
            const crest = document.createElement("img");
            crest.src = "/assets/images/club/escudo-malibu-fc.png";
            crest.alt = "";
            team.appendChild(crest);
          }
          const name = document.createElement("strong");
          name.textContent = text(teamName);
          team.appendChild(name);
          match.appendChild(team);
          if (index === 0) {
            const versus = document.createElement("span");
            versus.className = "match-versus";
            versus.textContent = "VS";
            match.appendChild(versus);
          }
        });

        const footer = document.createElement("div");
        footer.className = "match-footer";
        const venue = document.createElement("span");
        venue.textContent = text(event.venue, "Lugar por confirmar");
        const ticket = document.createElement("div");
        ticket.className = "ticket-box";
        const price = document.createElement("strong");
        price.textContent = text(event.ticketPrice, "0 €");
        const button = document.createElement(event.ticketEnabled && event.ticketUrl ? "a" : "span");
        button.className = "ticket-action";
        if (event.ticketEnabled && event.ticketUrl) {
          button.href = text(event.ticketUrl);
          button.textContent = "Obtener entrada";
        } else {
          button.textContent = calendar.demoMode ? "Entrada demo" : "Próximamente";
          button.setAttribute("aria-disabled", "true");
        }
        ticket.append(price, button);
        footer.append(venue, ticket);

        if (calendar.demoMode) {
          const demo = document.createElement("span");
          demo.className = "demo-label";
          demo.textContent = "Demostración · no genera reserva";
          card.appendChild(demo);
        }
        card.append(meta, match, footer);
        calendarGrid.appendChild(card);
      });
    }
  }

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

        let media;
        if (text(product.image)) {
          media = document.createElement("img");
          media.className = "product-image";
          media.src = text(product.image);
          media.alt = text(product.name, "Producto del Malibú FC");
          media.loading = "lazy";
          media.width = 900;
          media.height = 1200;
        } else {
          media = document.createElement("div");
          media.className = "product-placeholder";
          media.setAttribute("role", "img");
          media.setAttribute("aria-label", "Imagen pendiente de " + text(product.name, "producto"));
          const category = document.createElement("span");
          category.textContent = text(product.category, "Malibú FC");
          const visual = document.createElement("strong");
          visual.textContent = text(product.visualLabel, "MFC");
          const pending = document.createElement("small");
          pending.textContent = "Imagen pendiente";
          media.append(category, visual, pending);
        }

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

        if (text(product.statusLabel)) {
          const status = document.createElement("span");
          status.className = "product-status";
          status.textContent = text(product.statusLabel);
          content.appendChild(status);
        }
        content.append(meta, description, details, order);
        article.append(media, content);
        productGrid.appendChild(article);
      });
    }
  }

  const renderPartnerGrid = (selector, items, emptyText) => {
    const grid = $(selector);
    if (!grid) return;

    const activeItems = Array.isArray(items) ? items.filter((item) => item.active === true) : [];
    if (!activeItems.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = emptyText;
      grid.appendChild(empty);
      return;
    }

    activeItems.forEach((item) => {
      const element = item.url ? document.createElement("a") : document.createElement("div");
      element.className = "partner-card";

      const name = document.createElement("span");
      name.className = "partner-name";
      name.textContent = text(item.name);
      element.appendChild(name);

      if (item.url) {
        const action = document.createElement("span");
        action.className = "partner-action";
        action.textContent = "Visitar enlace ↗";
        element.appendChild(action);
        element.href = text(item.url);
        element.target = "_blank";
        element.rel = "noopener noreferrer";
      }

      grid.appendChild(element);
    });
  };

  renderPartnerGrid("#sponsor-grid", config.sponsors, "Los patrocinadores se incorporarán cuando estén confirmados y autorizados.");
  renderPartnerGrid("#collaborator-grid", config.collaborators, "Los colaboradores se incorporarán cuando estén confirmados y autorizados.");

  const competitionLinks = $("#competition-links");
  const competitionTitle = $("#competition-title");
  if (competitionTitle && config.competition?.name) {
    competitionTitle.textContent = `Jugamos en la ${text(config.competition.name)}`;
  }
  if (competitionLinks && config.competition) {
    const competitionItems = [
      { name: "Web oficial", url: config.competition.websiteUrl },
      { name: "Instagram", url: config.competition.instagramUrl },
      { name: "Facebook", url: config.competition.facebookUrl }
    ];

    competitionItems.filter((item) => item.url).forEach((item) => {
      const link = document.createElement("a");
      link.className = "competition-link";
      link.href = text(item.url);
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const label = document.createElement("span");
      label.textContent = item.name;
      const action = document.createElement("strong");
      action.textContent = "Abrir ↗";
      link.append(label, action);
      competitionLinks.appendChild(link);
    });
  }

  const socialGrid = $("#social-grid");
  if (socialGrid) {
    const socialItems = [
      { name: "Instagram", detail: "@malibufc__", url: config.instagramUrl },
      { name: "YouTube", detail: config.youtubeUrl ? "Canal oficial" : "Canal en construcción", url: config.youtubeUrl }
    ];

    socialItems.forEach((item) => {
      const element = item.url ? document.createElement("a") : document.createElement("div");
      element.className = "social-card";
      if (item.url) {
        element.href = text(item.url);
        element.target = "_blank";
        element.rel = "noopener noreferrer";
      } else {
        element.classList.add("social-card-disabled");
        element.setAttribute("aria-disabled", "true");
      }

      const name = document.createElement("strong");
      name.textContent = item.name;
      const detail = document.createElement("span");
      detail.textContent = item.detail;
      element.append(name, detail);
      socialGrid.appendChild(element);
    });
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

  const matchday = config.calendar?.events?.[0];
  const matchdayStatus = $("#matchday-status");
  const matchdayMeta = $("#matchday-meta");
  const matchdayDate = $("#matchday-date");
  const matchdayOpponent = $("#matchday-opponent");
  const matchdayVenue = $("#matchday-venue");
  const matchdayToggle = $("#matchday-toggle");
  const matchdayDetails = $("#matchday-details");
  if (matchday && matchdayStatus) {
    const home = text(matchday.home, "Malibú FC");
    const away = text(matchday.away, "Rival por confirmar");
    matchdayStatus.textContent = `${home}  ·  ${away}`;
    matchdayMeta.textContent = text(matchday.competition, "Liga de la Amistad");
    if (matchdayDate) matchdayDate.textContent = text(matchday.dateLabel, "Por confirmar");
    if (matchdayOpponent) matchdayOpponent.textContent = away;
    if (matchdayVenue) matchdayVenue.textContent = text(matchday.venue, "Por confirmar");
    const fanMatchCopy = $("#fan-match-copy");
    if (fanMatchCopy) fanMatchCopy.textContent = `${home} · ${away} · ${text(matchday.dateLabel, "Fecha por confirmar")}`;
  }
  const matchdayCountdown = $("#matchday-countdown");
  const matchDate = matchday?.dateISO || matchday?.date;
  if (matchdayCountdown) {
    if (!matchDate) {
      matchdayCountdown.textContent = "Jornada por confirmar";
    } else {
      const targetDate = new Date(matchDate);
      const updateCountdown = () => {
        const remaining = targetDate.getTime() - Date.now();
        if (Number.isNaN(targetDate.getTime()) || remaining <= 0) {
          matchdayCountdown.textContent = remaining <= 0 ? "Jornada en curso" : "Jornada por confirmar";
          return;
        }
        const days = Math.ceil(remaining / 86400000);
        matchdayCountdown.textContent = `${days} ${days === 1 ? "día" : "días"}`;
      };
      updateCountdown();
      window.setInterval(updateCountdown, 3600000);
    }
  }
  if (matchdayToggle && matchdayDetails) {
    matchdayToggle.addEventListener("click", () => {
      const isOpen = matchdayToggle.getAttribute("aria-expanded") === "true";
      matchdayToggle.setAttribute("aria-expanded", String(!isOpen));
      matchdayDetails.hidden = isOpen;
      matchdayToggle.innerHTML = isOpen ? "Ver detalles <span aria-hidden=\"true\">+</span>" : "Ocultar detalles <span aria-hidden=\"true\">−</span>";
    });
  }

  const revealItems = $$(".section, .matchday-strip, .portal-card, .gallery-card, .partner-card, .social-card");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    revealItems.forEach((item) => {
      item.classList.add("reveal-item");
      revealObserver.observe(item);
    });
  }
  const fanTabs = $$(".fan-tab");
  const fanPanels = $$(".fan-panel");
  fanTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      fanTabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      fanPanels.forEach((panel) => {
        const visible = panel.id === tab.getAttribute("aria-controls");
        panel.classList.toggle("is-visible", visible);
        panel.hidden = !visible;
      });
    });
  });
})();
