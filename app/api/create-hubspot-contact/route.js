

import { NextResponse } from 'next/server'

export async function POST(req, res) {
    const { email, firstName, typeOfService, budget, message } = await req.json();

    const payload = JSON.stringify({
        "properties": {
            "email": email,
            "firstname": firstName,
            "type_of_service": typeOfService.toString(),
            "budget": budget,
            "message": message

        }
    })

    // hubspot request options
    var postOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer pat-na1-5f83c730-3053-4c97-85ec-6b6305013743`,
            'Content-Type': 'application/json'
        },
        body: payload,
        redirect: 'follow'
    };
    var patchOptions = {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer pat-na1-5f83c730-3053-4c97-85ec-6b6305013743`,
            'Content-Type': 'application/json'
        },
        body: payload,
        redirect: 'follow'
    };

    try {
        // create contact 
        let response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', postOptions)
        response = await response.json();


        // update contact 
        if (response.status === "error") {
            response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`, patchOptions)
            response = await response.json();
        }

        return NextResponse.json({ message: "This Worked", success: true, data: response });
    } catch (error) {
        console.error(error);
        // const err = await error.json();
        return NextResponse.json({ message: error, success: false });
        // res.status(500).send('Error sending email');

    }
}

export async function GET(req, res) {
    return NextResponse.json(res)

};