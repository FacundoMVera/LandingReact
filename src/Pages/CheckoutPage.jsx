import React, { useEffect } from 'react';

function CheckoutPage() {
  useEffect(() => {
    
    if (!document.getElementById('paypal-sdk')) {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=AQbqkEsI-LCFisp8aphgrfY-VrJLww8cLF5kGzE5Mj-Bru6wJenWCeKrSHTi2bex9BmKoZJSs-RRpUR7`;
      script.id = 'paypal-sdk';
      script.async = true;
      script.onload = () => {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: { value: '10.00' } 
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              alert('Pago exitoso, gracias ' + details.payer.name.given_name);
            });
          },
          onError: (err) => {
            console.error("Error en el pago: ", err);
          }
        }).render('#paypal-button-container');
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h2>Página de Checkout</h2>
      {}
      <div id="paypal-button-container"></div>
    </div>
  );
}

export default CheckoutPage;

