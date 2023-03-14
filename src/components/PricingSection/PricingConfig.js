const priceConfig = {
    option: {
        monthly: {
            label: 'Monthly',
            suffix: '/mo'
        },
        yearly: {
            label: 'Yearly',
            suffix: '/yr'
        }
    },
    plans: [
        {
            highlighted: false,
            title: 'Free',
            subHeader: undefined,
            currency: "$",
            price: {
                monthly: '0',
                yearly: '0'
            },
            description: [
                '10 users included',
                '2 GB of storage',
                'Help center access',
                'Email support',
            ],
            buttonText: 'SELECT PLAN',
        },
        {
            highlighted: true,
            title: 'Pro',
            subHeader: 'MOST POPULAR',
            currency: "$",
            price: {
                monthly: '15',
                yearly: '10'
            },
            description: [
                '20 users included',
                '10 GB of storage',
                'Help center access',
                'Priority email support',
            ],
            buttonText: 'SELECT PLAN',
        },
        {
            highlighted: false,
            title: 'Enterprise',
            subHeader: undefined,
            currency: "$",
            price: {
                monthly: '30',
                yearly: '20'
            },
            description: [
                '50 users included',
                '30 GB of storage',
                'Help center access',
                'Phone & email support',
            ],
            buttonText: 'SELECT PLAN',
        }
    ]
}

export {priceConfig}