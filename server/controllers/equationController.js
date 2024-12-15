exports.getRoots = (req, res) => {
  const { a, b, c } = req.query;

  if (a === undefined || b === undefined || c === undefined) {
    return res.status(400).json({ error: "Параметры a, b и c обязательны" });
  }

  const A = parseFloat(a);
  const B = parseFloat(b);
  const C = parseFloat(c);

  if (isNaN(A) || isNaN(B) || isNaN(C)) {
    return res.status(400).json({ error: "a, b и c должны быть числами" });
  }

  const discriminant = B * B - 4 * A * C;
  let roots;

  if (discriminant > 0) {
    const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
    const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
    roots = { root1, root2 };
  } else if (discriminant === 0) {
    const root = -B / (2 * A);
    roots = { root };
  } else {
    roots = "Нет корней";
  }

  res.json({ a: A, b: B, c: C, discriminant, roots });
};

exports.getDiscriminant = (req, res) => {
  const { a, b, c } = req.query;

  if (a === undefined || b === undefined || c === undefined) {
    return res.status(400).json({ error: "Параметры a, b и c обязательны" });
  }

  const A = parseFloat(a);
  const B = parseFloat(b);
  const C = parseFloat(c);

  if (isNaN(A) || isNaN(B) || isNaN(C)) {
    return res.status(400).json({ error: "a, b и c должны быть числами" });
  }

  const discriminant = B * B - 4 * A * C;

  res.json({ a: A, b: B, c: C, discriminant });
};
