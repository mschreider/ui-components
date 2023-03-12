const priceConfig = {
    option: {
        monthly: {
            label: 'monthly',
            suffix: '/mo'
        },
        annually: {
            label: 'yearly',
            suffix: '/yr'
        }
    },
    plans: [
        {
            title: 'Free',
            subHeader: undefined,
            currency: "$",
            priceMonthly: '0',
            priceAnnualy: '0',
            description: [
                '10 users included',
                '2 GB of storage',
                'Help center access',
                'Email support',
            ],
            buttonText: 'SELECT PLAN',
            buttonVariant: 'outlined'            
        },
        {
            title: 'Pro',
            subHeader: 'Most Popular',
            currency: "$",
            priceMonthly: '15',
            priceAnnualy: '10',
            description: [
                '20 users included',
                '10 GB of storage',
                'Help center access',
                'Priority email support',
            ],
            buttonText: 'SELECT PLAN',
            buttonVariant: 'contained',
        },
        {
            title: 'Enterprise',
            subHeader: undefined,
            currency: "$",
            priceMonthly: '30',
            priceAnnualy: '20',
            description: [
                '50 users included',
                '30 GB of storage',
                'Help center access',
                'Phone & email support',
            ],
            buttonText: 'SELECT PLAN',
            buttonVariant: 'contained',
        }
    ]
    
}

export {priceConfig}