document.documentElement.dataset.appReady = 'true';

const benefitItems = [
  { label: 'Discreet & qualified treatments', iconPath: 'assets/benefits/discreet-treatments.svg' },
  { label: 'Online consultation & prescription', iconPath: 'assets/benefits/online-consultation.svg' },
  { label: 'Shipping 1–2 days', iconPath: 'assets/benefits/shipping.svg' },
  { label: 'Secure information', iconPath: 'assets/benefits/secure-information.svg' },
  { label: 'Affordable pricing with no hidden fees', iconPath: 'assets/benefits/affordable-pricing.svg' },
  { label: '600K+ customers', iconPath: 'assets/benefits/customers.svg' },
  { label: '40+ categories', iconPath: 'assets/benefits/categories.svg' },
  { label: '24h order processing', iconPath: 'assets/benefits/order-processing.svg' },
  { label: '7+ years of trust', iconPath: 'assets/benefits/trust.svg' },
];

const benefitRail = document.querySelector('[data-benefit-rail]');

if (benefitRail) {
  const createBenefitItem = ({ label, iconPath }) => {
    const item = document.createElement('div');
    item.className = 'benefit-item';

    const icon = document.createElement('span');
    icon.className = 'benefit-icon';
    icon.setAttribute('aria-hidden', 'true');

    const image = document.createElement('img');
    image.src = iconPath;
    image.alt = '';
    image.width = 24;
    image.height = 24;
    image.draggable = false;
    icon.append(image);

    const text = document.createElement('span');
    text.textContent = label;

    item.append(icon, text);
    return item;
  };

  benefitRail.replaceChildren(...benefitItems.map(createBenefitItem));
}

const testimonialItems = [
  {
    name: 'Jan S.',
    date: '25 October',
    dateTime: '2025-10-25',
    review: 'Super unkomplizierte Bestellvorgang, schnelle Bearbeitung, Schneller Versenden. **Von der Bestellung bis zum Erhalt 2–3 Tage.** Dankeschön',
  },
  {
    name: 'Rainer N.',
    date: '25 October',
    dateTime: '2025-10-25',
    review: 'Einfach und **unkompliziert 3 Bestellungen** bisher gemacht und hat immer reibungslos funktioniert, praktisch auch alles im Rahmen',
  },
  {
    name: 'Daniel L.',
    date: '25 October',
    dateTime: '2025-10-25',
    review: 'Es hat bis jetzt bei **3 Bestellungen alles perfekt** funktioniert und die **Qualität** war top !!! Höchstens der Preis könnte ein bisschen billiger sein aber bis jetzt alles **perfekt**',
  },
  {
    name: 'Michael A.',
    date: '25 October',
    dateTime: '2025-10-25',
    review: '**Schnelle Diagnose, sehr schnelle Bearbeitung** und schnelle Lieferung. Bin sehr zufrieden Jahr Kunde und kann es nur weiterempfehlen. Top',
  },
  {
    name: 'Lena K.',
    date: '25 October',
    dateTime: '2025-10-25',
    review: 'Sehr freundlicher Service und **schnelle Bearbeitung**. Die Bestellung war einfach und alles wurde verständlich erklärt.',
  },
  {
    name: 'Sophie M.',
    date: '25 October',
    dateTime: '2025-10-25',
    review: '**Unkomplizierte Beratung** und schnelle Lieferung. Ich wurde über jeden Schritt informiert und bin sehr zufrieden.',
  },
  {
    name: 'Thomas R.',
    date: '25 October',
    dateTime: '2025-10-25',
    review: 'Hat alles **schnell und diskret** funktioniert. Die Behandlung kam pünktlich an und der Ablauf war sehr angenehm.',
  },
  {
    name: 'Julia B.',
    date: '25 October',
    dateTime: '2025-10-25',
    review: 'Von der Bestellung bis zur Lieferung war alles **klar, schnell und zuverlässig**. Vielen Dank für den guten Service.',
  },
];

const howItWorksItems = [
  {
    number: 1,
    title: 'Füllen Sie einen vertraulichen **Online-Fragebogen aus**',
    image: 'assets/card_1.png',
    imageAlt: 'Online-Fragebogen auf einem Smartphone',
    imageClass: 'steps-card-image--form',
  },
  {
    number: 2,
    title: 'Erhalten Sie eine ärztlich geprüfte **Therapieempfehlung**',
    image: 'assets/card_2.png',
    imageAlt: 'Lächelnder Arzt in einem weißen Kittel',
    imageClass: 'steps-card-image--doctor',
  },
  {
    number: 3,
    title: 'Diskrete Lieferung nach\nHause innerhalb von\n**1–48 Stunden**',
    image: 'assets/card_3.png',
    imageAlt: 'Diskretes Versandpaket',
    imageClass: 'steps-card-image--package',
  },
];

const footerSocialItems = [
  { label: 'Facebook', image: 'assets/fb_svg.svg' },
  { label: 'LinkedIn', image: 'assets/in_svg.svg' },
  { label: 'YouTube', image: 'assets/yt_svg.svg' },
  { label: 'X', image: 'assets/x_svg.svg' },
  { label: 'Instagram', image: 'assets/insta_svg.svg' },
];

const footerBadgeItems = [
  { alt: 'DoktorABC Zertifizierung', image: 'assets/footer/doctorabc-seal.png' },
  { alt: 'DMCA geschützt', image: 'assets/footer/dmca.png' },
  { alt: 'Qualitätssiegel Datenschutz', image: 'assets/footer/doctorabc-certification.png' },
  { alt: 'PCI konform', image: 'assets/footer/pci.png' },
];

const renderFooterAssets = () => {
  const socialContainer = document.querySelector('[data-footer-socials]');
  const badgeContainer = document.querySelector('[data-footer-badges]');

  if (!socialContainer || !badgeContainer) {
    return;
  }

  const createSocialLink = ({ label, image: imageSource }) => {
    const link = document.createElement('a');
    link.className = 'footer-social-link';
    link.href = '#';
    link.setAttribute('aria-label', label);

    const image = document.createElement('img');
    image.className = 'footer-social-icon';
    image.src = imageSource;
    image.alt = '';
    image.width = 55;
    image.height = 55;
    image.draggable = false;

    link.append(image);
    return link;
  };

  const createBadge = ({ alt, image: imageSource }) => {
    const image = document.createElement('img');
    image.src = imageSource;
    image.alt = alt;
    image.draggable = false;
    return image;
  };

  socialContainer.replaceChildren(...footerSocialItems.map(createSocialLink));
  badgeContainer.replaceChildren(...footerBadgeItems.map(createBadge));
};

renderFooterAssets();

const appendMarkedText = (element, text) => {
  const emphasisPattern = /\*\*(.+?)\*\*/g;
  let textEnd = 0;

  text.replace(emphasisPattern, (match, emphasizedText, matchStart) => {
    element.append(document.createTextNode(text.slice(textEnd, matchStart)));

    const emphasizedElement = document.createElement('em');
    emphasizedElement.textContent = emphasizedText;
    element.append(emphasizedElement);

    textEnd = matchStart + match.length;
    return match;
  });

  element.append(document.createTextNode(text.slice(textEnd)));
};

const testimonials = document.querySelector('[data-testimonials]');

if (testimonials) {
  const track = testimonials.querySelector('.testimonials-track');
  const pagination = testimonials.querySelector('.testimonials-pagination');

  const renderReview = (reviewText) => {
    const review = document.createElement('p');
    appendMarkedText(review, reviewText);
    return review;
  };

  const createTestimonialCard = (item) => {
    const card = document.createElement('li');
    card.className = 'testimonial-card';

    const content = document.createElement('div');
    content.className = 'testimonial-card-content';

    const heading = document.createElement('div');
    heading.className = 'testimonial-card-heading';

    const name = document.createElement('h3');
    name.textContent = item.name;

    const date = document.createElement('time');
    date.dateTime = item.dateTime;
    date.textContent = item.date;

    heading.append(name, date);

    const review = renderReview(item.review);

    const ellipsis = document.createElement('span');
    ellipsis.className = 'testimonial-ellipsis';
    ellipsis.setAttribute('aria-hidden', 'true');
    ellipsis.textContent = '....';

    const verified = document.createElement('span');
    verified.className = 'testimonial-verified';

    const checkIcon = document.createElement('img');
    checkIcon.className = 'testimonial-check-icon';
    checkIcon.src = 'assets/lucide/circle-check.png';
    checkIcon.alt = '';
    checkIcon.width = 15;
    checkIcon.height = 15;
    checkIcon.setAttribute('aria-hidden', 'true');

    verified.append(checkIcon, document.createTextNode('Verifizierte Bewertung'));
    content.append(heading, review, ellipsis, verified);
    card.append(content);

    return card;
  };

  const createPaginationDot = (index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.role = 'tab';
    dot.setAttribute('aria-selected', String(index === 0));
    dot.setAttribute('aria-label', `Bewertung ${index + 1}`);
    dot.dataset.testimonialDot = index;

    if (index === 0) {
      dot.classList.add('is-active');
    }

    return dot;
  };

  const getVisibleItemCount = () => (window.matchMedia('(min-width: 900px)').matches ? 4 : 1);

  const getPositionCount = () => Math.max(1, testimonialItems.length - getVisibleItemCount() + 1);

  const updateTrackPosition = () => {
    const firstCard = track.firstElementChild;

    if (!firstCard) {
      return;
    }

    const cardWidth = firstCard.getBoundingClientRect().width;
    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;

    track.style.transform = `translateX(-${activeIndex * (cardWidth + gap)}px)`;
  };

  track.append(...testimonialItems.map(createTestimonialCard));
  let activeIndex = 0;
  let dots = [];

  const renderPagination = () => {
    pagination.replaceChildren(...Array.from({ length: getPositionCount() }, (_, index) => createPaginationDot(index)));
    dots = [...pagination.querySelectorAll('[data-testimonial-dot]')];
  };

  const updatePaginationState = () => {
    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  renderPagination();

  const previousButton = testimonials.querySelector('[data-testimonials-prev]');
  const nextButton = testimonials.querySelector('[data-testimonials-next]');

  const updateTestimonials = (nextIndex) => {
    activeIndex = (nextIndex + getPositionCount()) % getPositionCount();
    updateTrackPosition();
    updatePaginationState();
  };

  updateTrackPosition();

  previousButton.addEventListener('click', () => updateTestimonials(activeIndex - 1));
  nextButton.addEventListener('click', () => updateTestimonials(activeIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => updateTestimonials(Number(dot.dataset.testimonialDot)));
  });

  window.addEventListener('resize', () => {
    activeIndex = Math.min(activeIndex, getPositionCount() - 1);
    renderPagination();
    updateTrackPosition();
    updatePaginationState();

    dots.forEach((dot) => {
      dot.addEventListener('click', () => updateTestimonials(Number(dot.dataset.testimonialDot)));
    });
  });
}

const howItWorks = document.querySelector('[data-how-it-works]');

if (howItWorks) {
  const track = howItWorks.querySelector('.steps-track');
  const pagination = howItWorks.querySelector('.steps-pagination');
  const previousButton = howItWorks.querySelector('[data-steps-prev]');
  const nextButton = howItWorks.querySelector('[data-steps-next]');
  let activeIndex = 0;
  let dots = [];

  const createStepCard = (item) => {
    const card = document.createElement('li');
    card.className = `steps-card${item.number === 2 ? ' steps-card--featured' : ''}`;

    const number = document.createElement('span');
    number.className = 'steps-card-number';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = item.number;

    const title = document.createElement('p');
    title.className = 'steps-card-title';
    appendMarkedText(title, item.title);

    const image = document.createElement('img');
    image.className = `steps-card-image ${item.imageClass}`;
    image.src = item.image;
    image.alt = item.imageAlt;
    image.draggable = false;

    card.append(number, title, image);
    return card;
  };

  const createStepDot = (index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.role = 'tab';
    dot.className = index === 0 ? 'is-active' : '';
    dot.setAttribute('aria-selected', String(index === 0));
    dot.setAttribute('aria-label', `Schritt ${index + 1}`);
    dot.dataset.stepDot = index;
    return dot;
  };

  const getVisibleItemCount = () => (window.matchMedia('(min-width: 900px)').matches ? 3 : 1);
  const getPositionCount = () => Math.max(1, howItWorksItems.length - getVisibleItemCount() + 1);

  const updateTrackPosition = () => {
    const firstCard = track.firstElementChild;

    if (!firstCard) {
      return;
    }

    const cardWidth = firstCard.getBoundingClientRect().width;
    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
    track.style.transform = `translateX(-${activeIndex * (cardWidth + gap)}px)`;
  };

  const updatePaginationState = () => {
    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  const renderPagination = () => {
    pagination.replaceChildren(...Array.from({ length: getPositionCount() }, (_, index) => createStepDot(index)));
    dots = [...pagination.querySelectorAll('[data-step-dot]')];
  };

  const updateSteps = (nextIndex) => {
    activeIndex = (nextIndex + getPositionCount()) % getPositionCount();
    updateTrackPosition();
    updatePaginationState();
  };

  track.append(...howItWorksItems.map(createStepCard));
  renderPagination();
  updateTrackPosition();

  previousButton.addEventListener('click', () => updateSteps(activeIndex - 1));
  nextButton.addEventListener('click', () => updateSteps(activeIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => updateSteps(Number(dot.dataset.stepDot)));
  });

  window.addEventListener('resize', () => {
    activeIndex = Math.min(activeIndex, getPositionCount() - 1);
    renderPagination();
    updateTrackPosition();
    updatePaginationState();

    dots.forEach((dot) => {
      dot.addEventListener('click', () => updateSteps(Number(dot.dataset.stepDot)));
    });
  });
}

const heroSection = document.querySelector('.hero-section');
const heroMedia = heroSection?.querySelector('.hero-media');

if (heroSection && heroMedia) {
  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroMedia.classList.toggle('is-in-view', entry.isIntersecting);
      },
      { threshold: 0.18 },
    );

    heroObserver.observe(heroSection);
  } else {
    heroMedia.classList.add('is-in-view');
  }
}

const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  let headerScrollFrame = 0;

  const updateHeaderState = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 40);
    headerScrollFrame = 0;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!headerScrollFrame) {
        headerScrollFrame = window.requestAnimationFrame(updateHeaderState);
      }
    },
    { passive: true },
  );

  updateHeaderState();
}
