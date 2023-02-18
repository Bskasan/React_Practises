//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.

//* Footer Component
//* In Arrow Func. Format
export const Footer = () => {
  return (
    <footer>
      <p> Copyright by Bekir {new Date().getFullYear()}</p>
    </footer>
  );
};
