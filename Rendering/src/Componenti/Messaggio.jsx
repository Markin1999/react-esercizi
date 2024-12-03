function Messaggio({ eta }) {
  return <>{eta < 18 && <p>Sei molto giovane.</p>}</>;
}

export default Messaggio;
