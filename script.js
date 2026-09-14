document.documentElement.dataset.appReady = 'true';

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

const testimonials = document.querySelector('[data-testimonials]');

if (testimonials) {
  const track = testimonials.querySelector('.testimonials-track');
  const pagination = testimonials.querySelector('.testimonials-pagination');

  const renderReview = (reviewText) => {
    const review = document.createElement('p');
    const emphasisPattern = /\*\*(.+?)\*\*/g;
    let textEnd = 0;

    reviewText.replace(emphasisPattern, (match, emphasizedText, matchStart) => {
      review.append(document.createTextNode(reviewText.slice(textEnd, matchStart)));

      const emphasizedElement = document.createElement('em');
      emphasizedElement.textContent = emphasizedText;
      review.append(emphasizedElement);

      textEnd = matchStart + match.length;
      return match;
    });

    review.append(document.createTextNode(reviewText.slice(textEnd)));
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
