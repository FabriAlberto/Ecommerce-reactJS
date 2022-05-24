const productos = [
    { id: 1, name: "NIKE WAFFLE ONE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",category:"zapatillas", gende: "mujer", price: 22000, img: "https://woker.vteximg.com.br/arquivos/ids/248080-600-600/4DC2533-002-1.jpg?v=637733531956530000",stock:15, },
    { id: 2, name: "NIKE AIR MAX SC", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",category:"zapatillas", gende: "hombre", price: 22000, img: "https://woker.vteximg.com.br/arquivos/ids/246956-1000-1000/4CW4555-002-1.jpg?v=637729169497530000",stock:20, },
    { id: 3, name: "ADIDAS FORUM 84", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",category:"zapatillas", gende: "hombre", price: 22000, img: "https://woker.vteximg.com.br/arquivos/ids/259602-600-600/6Q46366-000-1.jpg?v=637782715229230000",stock:5, },
    { id: 4, name: "NIKE WAFFLE ONE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",category:"remeras", gende: "hombre", price: 22000, img: "https://woker.vteximg.com.br/arquivos/ids/253722-1000-1000/4DD3349-063-1.jpg?v=637755943530100000",stock:4, },
    { id: 5, name: "NIKE WAFFLE ONE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",category:"remeras", gende: "hombre", price: 22000, img: "https://woker.vteximg.com.br/arquivos/ids/262192-1000-1000/4DM2215-133-1.jpg?v=637795804180400000",stock:8, },
    { id: 6, name: "NIKE WAFFLE ONE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",category:"zapatillas", gende: "mujer", price: 22000, img: "https://woker.vteximg.com.br/arquivos/ids/248080-600-600/4DC2533-002-1.jpg?v=637733531956530000",stock:2, },
    { id: 7, name: "NIKE WAFFLE ONE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",category:"zapatillas", gende: "mujer", price: 22000, img: "https://woker.vteximg.com.br/arquivos/ids/248080-600-600/4DC2533-002-1.jpg?v=637733531956530000",stock:9, },
    { id: 8, name: "NIKE WAFFLE ONE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",category:"zapatillas", gende: "mujer", price: 22000, img: "https://woker.vteximg.com.br/arquivos/ids/248080-600-600/4DC2533-002-1.jpg?v=637733531956530000",stock:1, },

  ]

  export const getData = new Promise((resolve, reject) => {
    let cond = true;
    setTimeout(()=>{
      cond ?
        resolve(productos)
        :
        reject(console.log(`salio mal`))
    },2000)
  })