

import { NextResponse } from 'next/server'
export async function POST(req, res) {
    const { hubspotFormObject, hubspotFormID, portalID } = await req.json();


    var payload = JSON.stringify({
        "submittedAt": new Date().getTime(),
        "fields": hubspotFormObject,
        "legalConsentOptions": { // Include this object when GDPR options are enabled
            "consent": {
                "consentToProcess": true,
                "text": `I agree to allow ${process.env.name} to store and process my personal data.`,
                "communications": [
                    {
                        "value": true,
                        "subscriptionTypeId": 999,
                        "text": `I agree to receive marketing communications from ${process.env.name}.`
                    }
                ]
            }
        }
    })

    // hubspot request options
    var postOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: payload,
        redirect: 'follow'
    };

    try {
        // submit form
        let response = await fetch(`https://api.hsforms.com/submissions/v3/integration/secure/submit/${portalID}/${hubspotFormID}`, postOptions)
        response = await response.json();

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