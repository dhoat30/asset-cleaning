
export const getQuoteFormData = [

    {
        id: 'firstName', label: 'First name', type: 'text', required: true, autoComplete: "given-name", validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'First name should be at least 3 characters long'
    },
    {
        id: 'lastname', label: 'Last name', type: 'text', required: true, autoComplete: "family-name", validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 1;
            }
            return false;
        },
        errorMessage: 'Last name should be at least 2 characters long'
    },

    {
        id: 'email', label: 'Email address', type: 'email', required: true, autoComplete: "email", validation: value => /\S+@\S+\.\S+/.test(value),
        errorMessage: 'Enter a valid email address'
    },

    {
        id: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: "tel", validation: value => {
            const cleanPhone = (value || '').replace(/[^0-9]/g, '');
            return cleanPhone.length > 6; // Matches numbers having more than 6 characters
        },
        errorMessage: 'Please enter a valid New Zealand phone number'
    },

    {
        id: 'propertyType',
        label: 'Property type',
        type: 'select', // or 'radio' for single selection
        options: [
            { value: 'Commercial', label: 'Commercial' },
            { value: 'Residential', label: 'Residential' },
        ],
        required: false,
        multiple: false
    },
    {
        id: 'service',
        label: 'Service type',
        type: 'select', // or 'radio' for single selection
        options: [
            { value: 'Regular Cleaning', label: 'Regular Cleaning' },
            { value: 'Deep Cleaning', label: 'Deep Cleaning' },
            { value: 'Window Cleaning', label: 'Window Cleaning' },
            { value: 'Carpet Cleaning', label: 'Carpet Cleaning' },
            { value: 'Upholstery Cleaning', label: 'Upholstery Cleaning' },
            { value: 'AirBnb Cleaning', label: 'AirBnb Cleaning' },
            { value: 'Specialty Service', label: 'Specialty Service' },
        ],
        required: false,
        multiple: true
    },

    // {
    //     id: 'message', label: 'Message', type: 'textarea', required: false,
    // },



    // 
]