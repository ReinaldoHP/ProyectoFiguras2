module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]]
};

/* ¿Por qué usar esto con Jest?
Jest ejecuta tests en Node.js

Node.js no soporta nativamente todos los features de ES6+

Babel hace el "traducción" para que Jest pueda entender tu código */