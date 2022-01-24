export default {
  allowedTags: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'],
  allowedAttributes: {
    p: ['style'],
    h1: ['style'],
    h2: ['style'],
    h3: ['style'],
    h4: ['style'],
    h5: ['style'],
    h6: ['style'],
    span: ['style'],
  },
  allowedStyles: {
    '*': {
      color: [
        /^#(0x)?[0-9a-f]+$/i,
        /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
      ],
      'text-align': [/^left$/, /^right$/, /^center$/, /^justify$/],
      // Match any number with px, em, or %
      'font-size': [/^\d+(?:px|em|%|pt)$/],
      'font-family': [/.*/],
    },
  },
};
