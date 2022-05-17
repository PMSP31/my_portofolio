module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container : {
      center : true,
      padding : '24px'
    },
    extend: {
      colors: {
        primary : '#7c3aed',
        secondary : '#64748b',
        dark : '#1e293b'
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
