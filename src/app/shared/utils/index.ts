/**
 * Subscribe resize window event
 * @param cb Callback
 */
export const addResizeListener = (cb: (this: void) => void) => {
  window.addEventListener("resize", cb);
  window.addEventListener("orientationchange", cb);
};

/**
 * unsubscribe resize window event
 * @param cb Callback
 */
export const removeResizeListener = (cb: (this: void) => void) => {
  window.removeEventListener("resize", cb);
  window.removeEventListener("orientationchange", cb);
};
