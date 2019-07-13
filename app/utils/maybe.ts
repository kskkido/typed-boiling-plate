type Just<A> = A;
type Nothing = undefined | null;

const maybe = <A,B>(y: B, fn: (x: A) => B) => (
  (x: Nothing | Just<A>): B => (
    x === null || x === undefined
      ? y
      : fn(x)
  )
);

export default maybe;
