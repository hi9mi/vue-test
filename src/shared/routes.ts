export const routes: {
  [key: string]: {
    path: string;
    name: string;
  };
  [Symbol.iterator]: () => Generator<{ path: string; name: string }>;
} = {
  stock: {
    path: "/",
    name: "stock",
  },
  favorites: {
    path: "/favorites",
    name: "favorites",
  },
  deals: {
    path: "/deals",
    name: "deals",
  },
  *[Symbol.iterator]() {
    const O = this;
    const keys = Object.keys(O);

    for (let i = 0; i < keys.length; i++) {
      yield O[keys[i]];
    }
  },
};
