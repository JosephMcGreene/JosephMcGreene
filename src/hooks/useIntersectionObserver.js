import { useState, useRef, useEffect } from "react";

export function useIntersectionObserver({
  root = null,
  rootMargin,
  threshold = 1.0,
}) {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), {
      root,
      rootMargin,
      threshold,
    });

    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
}
