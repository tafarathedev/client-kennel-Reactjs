import React from 'react';
import {useAuthUser} from 'react-auth-kit'
import { useFlutterwave  } from 'flutterwave-react-v3'


export default function useFlutterwavePayment() {
            ///payment configuration via mobile money 
        const config = {
            public_key: 'FLWPUBK_TEST-b1b508f3889c28fa32723a86765980da-X',
            tx_ref: Date.now(),
            amount: 100,
            currency: 'ZMW',
            payment_options: 'card,mobilemoney',
            customer: {
              email: 'tafaratakaiza19@gmail.com',
              phone_number:'0979100310',
              name: 'john doe',
            },
            customizations: {
              title: 'My store',
              description: 'Payment for items in cart',
              logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
            },
          };
        
         return useFlutterwave(config);
         
        
}