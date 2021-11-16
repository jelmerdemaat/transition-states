const provideTransitionStates = (element = document.body, onEnter, onLeave) => {
  if (typeof onEnter !== "function") {
    onEnter = () => {
      element.classList.add("is-active");
    };
  }

  if (typeof onLeave !== "function") {
    onLeave = () => {
      element.classList.remove("is-active");
    };
  }

  const isVisible = !(element.offsetHeight === 0 && element.offsetWidth === 0);
  const state = isVisible ? "leave" : "enter";
  const className = `transition-${state}`;
  const classNameActive = `transition-${state}-active`;

  const onTransitionEnd = () => {
    element.classList.remove(classNameActive);

    if (state === "leave") {
      onLeave();
    }
  };

  element.addEventListener("transitionend", onTransitionEnd, { once: true });

  element.classList.add(className);
  element.classList.add(classNameActive);

  //   const { transitionDuration } = getComputedStyle(div);

  //   if (transitionDuration === "0s") {
  //     element.classList.remove(className);
  //     element.classList.remove(classNameActive);
  //   }

  if (state === "enter") {
    onEnter();
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(className);
    });
  });
};

export { provideTransitionStates };
