import { useEffect, useRef } from "react";

export default function Componente() {
  const montatore = useRef(false);

  useEffect(() => {
    if (!montatore) {
      montatore.current = true;
    }
  }, []);

  return <div>Benvenuto nel mio componente!</div>;
}
