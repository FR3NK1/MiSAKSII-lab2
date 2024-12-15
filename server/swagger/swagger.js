module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Quadratic Equation API",
    version: "1.0.0",
    description:
      "API для решения квадратных уравнений и вычисления дискриминанта",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local server",
    },
  ],
  paths: {
    "/get-roots": {
      get: {
        summary: "Получить корни квадратного уравнения",
        description: "Вычисляет корни уравнения ax^2 + bx + c = 0.",
        parameters: [
          {
            name: "a",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "b",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "c",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
        ],
        responses: {
          200: {
            description: "Корни квадратного уравнения",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    a: { type: "number" },
                    b: { type: "number" },
                    c: { type: "number" },
                    discriminant: { type: "number" },
                    roots: { type: "object" },
                  },
                },
              },
            },
          },
          400: { description: "Некорректные параметры" },
        },
      },
    },
    "/get-discriminant": {
      get: {
        summary: "Получить дискриминант квадратного уравнения",
        description: "Вычисляет дискриминант уравнения ax^2 + bx + c = 0.",
        parameters: [
          {
            name: "a",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "b",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "c",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
        ],
        responses: {
          200: {
            description: "Дискриминант квадратного уравнения",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    a: { type: "number" },
                    b: { type: "number" },
                    c: { type: "number" },
                    discriminant: { type: "number" },
                  },
                },
              },
            },
          },
          400: { description: "Некорректные параметры" },
        },
      },
    },
  },
};
