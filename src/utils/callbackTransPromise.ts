interface Action<Param extends unknown[]> {
  (...x: Param): void
}

interface AsyncCall<T extends unknown[]> {
  (cb: Action<T>): void
}

type AsyncCallToPromise = <T extends unknown[]>(asyncCall: AsyncCall<T>) => Promise<T>

const asyncCallToPromise: AsyncCallToPromise = <T extends unknown[]>(asyncCall: AsyncCall<T>) =>
  new Promise((resolve) => asyncCall((...args) => resolve(args as any)))

const fooAsyncCall = (cb: (a: string, b: number) => void) => {
  setTimeout(() => {
    cb('x', 3)
  }, 100)
}

const result = asyncCallToPromise(fooAsyncCall)
