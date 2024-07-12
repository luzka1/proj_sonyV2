export const item = {
  hidden: { scale: 2, opacity: 1 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export const itemHeader = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const itens = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const right = {
  hidden: { x: 500 },
  visible: {
    x: 0,
  },
};

export const initial = {
  opacity: 0,
  x: -100,
};

export const inView = {
  opacity: 1,
  x: 0,
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
